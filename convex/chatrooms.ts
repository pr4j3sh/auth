import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { Chatroom } from "../src/lib/types";

export const bookEvent = mutation({
  args: { eventId: v.id("events"), userId: v.id("users") },
  handler: async (ctx, { eventId, userId }) => {
    await ctx.db.insert("chatrooms", { eventId, userId });
  },
});

export const get = query({
  args: {
    userId: v.string(), // Add userId as an argument
  },
  handler: async (ctx, { userId }) => {
    // Filter chatrooms by userId
    const chatrooms = await ctx.db
      .query("chatrooms")
      .filter((q) => q.eq(q.field("userId"), userId))
      .collect();

    const eventsMap: Chatroom = {};

    for (const room of chatrooms) {
      if (!eventsMap[room.eventId]) {
        const eventDetails = await ctx.db
          .query("events")
          .filter((q) => q.eq(q.field("_id"), room.eventId))
          .first();

        if (eventDetails) {
          // Fetch all chatrooms for this event to get the userIds
          const eventChatrooms = await ctx.db
            .query("chatrooms")
            .filter((cr) => cr.eq(cr.field("eventId"), room.eventId))
            .collect();

          // Extract userIds from the fetched chatrooms
          const userIds = eventChatrooms.map((chatroom) => chatroom.userId);

          // Fetch all users individually without using 'in'
          const allUsers = [];
          for (const id of userIds) {
            const user = await ctx.db
              .query("users")
              .filter((q) => q.eq(q.field("_id"), id))
              .first();
            if (user) {
              allUsers.push(user);
            }
          }

          eventsMap[room.eventId] = {
            event: eventDetails,
            users: allUsers, // Store all users of the event
          };
        }
      }
    }

    const eventsWithUsers = Object.values(eventsMap);

    return eventsWithUsers;
  },
});

export const getChatroom = query({
  args: { eventId: v.id("events") },
  handler: async (ctx, { eventId }) => {
    const chatrooms = await ctx.db
      .query("chatrooms")
      .filter((q) => q.eq(q.field("eventId"), eventId))
      .collect();

    if (chatrooms.length === 0) {
      return null;
    }

    const eventDetails = await ctx.db
      .query("events")
      .filter((q) => q.eq(q.field("_id"), eventId))
      .first();

    if (!eventDetails) {
      return null;
    }

    const users = await Promise.all(
      chatrooms.map(async (room) => {
        return await ctx.db
          .query("users")
          .filter((q) => q.eq(q.field("_id"), room.userId))
          .first();
      }),
    );

    return {
      event: eventDetails,
      users: users.filter((user) => user !== null),
    };
  },
});

export const checkEvent = query({
  args: {
    eventId: v.id("events"), // Required eventId
    userId: v.id("users"), // Required userId
  },
  handler: async (ctx, { eventId, userId }) => {
    // Query chatrooms to check if there is an entry for the given eventId and userId
    const chatroom = await ctx.db
      .query("chatrooms")
      .filter((q) => q.eq(q.field("eventId"), eventId)) // First filter by eventId
      .filter((q) => q.eq(q.field("userId"), userId)) // Then filter by userId
      .first(); // Fetch the first matching chatroom

    return {
      isBooked: !!chatroom, // Return true if chatroom exists, false otherwise
    };
  },
});
