import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const send = mutation({
  args: { eventId: v.id("events"), userId: v.id("users"), message: v.string() },
  handler: async (ctx, { eventId, userId, message }) => {
    await ctx.db.insert("messages", { eventId, userId, message });
  },
});

export const get = query({
  args: { eventId: v.id("events") },
  handler: async (ctx, { eventId }) => {
    const messages = await ctx.db
      .query("messages")
      .filter((q) => q.eq(q.field("eventId"), eventId))
      .collect();

    const userIds = [...new Set(messages.map((message) => message.userId))];

    const users = await Promise.all(
      userIds.map(async (userId) => {
        return await ctx.db
          .query("users")
          .filter((q) => q.eq(q.field("_id"), userId))
          .first();
      }),
    );

    const userMap = new Map(users.map((user) => [user?._id, user]));

    const messagesWithUsers = messages.map((message) => ({
      message: message.message,
      timeStamp: message._creationTime,
      user: userMap.get(message.userId) || null,
    }));

    return messagesWithUsers;
  },
});
