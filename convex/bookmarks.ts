import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const bookmarkEvent = mutation({
  args: { eventId: v.id("events"), userId: v.id("users") },
  handler: async (ctx, { eventId, userId }) => {
    await ctx.db.insert("bookmarks", { eventId, userId });
  },
});

export const getBookmarkedEvents = query({
  args: {
    userId: v.id("users"),
  },
  handler: async (ctx, { userId }) => {
    const bookmarks = await ctx.db
      .query("bookmarks")
      .filter((q) => q.eq(q.field("userId"), userId))
      .collect();

    const eventIds = bookmarks.map((bookmark) => bookmark.eventId);

    const events = [];
    for (const eventId of eventIds) {
      const event = await ctx.db
        .query("events")
        .filter((q) => q.eq(q.field("_id"), eventId))
        .first();
      if (event) {
        events.push(event);
      }
    }

    return events;
  },
});

export const checkBookmark = query({
  args: {
    eventId: v.id("events"),
    userId: v.id("users"),
  },
  handler: async (ctx, { eventId, userId }) => {
    // Query bookmarks for the given user and event
    const bookmark = await ctx.db
      .query("bookmarks")
      .filter((q) => q.eq(q.field("userId"), userId))
      .filter((q) => q.eq(q.field("eventId"), eventId))
      .first();

    return {
      bookmarkId: bookmark ? bookmark._id : null, // Return bookmarkId if exists
      isBookmarked: !!bookmark, // Return true if bookmark exists, false otherwise
    };
  },
});

export const deleteBookmark = mutation({
  args: { bookmarkId: v.id("bookmarks") },
  handler: async (ctx, { bookmarkId }) => {
    await ctx.db.delete(bookmarkId);
  },
});
