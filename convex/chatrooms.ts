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
  args: {},
  handler: async (ctx) => {
    const chatrooms = await ctx.db.query("chatrooms").collect();

    const eventsMap: Chatroom = {};

    for (const room of chatrooms) {
      const userDetails = await ctx.db
        .query("users")
        .filter((q) => q.eq(q.field("_id"), room.userId))
        .first();

      if (!eventsMap[room.eventId]) {
        const eventDetails = await ctx.db
          .query("events")
          .filter((q) => q.eq(q.field("_id"), room.eventId))
          .first();

        if (eventDetails) {
          eventsMap[room.eventId] = {
            event: eventDetails,
            users: [],
          };
        }
      }

      if (userDetails) {
        eventsMap[room.eventId].users.push(userDetails);
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
