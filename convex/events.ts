import { query } from "./_generated/server";
import { v } from "convex/values";
import { calculateDistance } from "../src/lib/utils";
import { Event } from "../src/lib/types";

export const get = query({
  args: { currentLat: v.number(), currentLon: v.number() },
  handler: async (ctx, { currentLat, currentLon }) => {
    // Fetch all events
    const events: Event[] = await ctx.db.query("events").collect();

    // Calculate distance for each event and add it to the event object
    const eventsWithDistance = events.map((event) => {
      const distance = calculateDistance(
        currentLat,
        currentLon,
        parseFloat(event.lat),
        parseFloat(event.lon),
      );
      return { ...event, distance };
    });

    // Sort events by distance
    const sortedEvents = eventsWithDistance.sort(
      (a: Event, b: Event) => (a?.distance ?? 0) - (b?.distance ?? 0),
    );

    return sortedEvents;
  },
});

export const getBookmarkedEvents = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("events")
      .filter((q) => q.eq(q.field("isBookmarked"), true))
      .collect();
  },
});

export const getEventsByCategory = query({
  args: { category: v.string() }, // Accepts a category name as an argument
  handler: async (ctx, { category }) => {
    return await ctx.db
      .query("events")
      .filter((q) => q.eq(q.field("category"), category))
      .collect();
  },
});

export const getCategories = query({
  args: {},
  handler: async (ctx) => {
    const events = await ctx.db.query("events").collect();
    const categories = [...new Set(events.map((event) => event.category))];
    return categories;
  },
});
