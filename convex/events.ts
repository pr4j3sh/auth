import { query } from "./_generated/server";
import { v } from "convex/values";
import { calculateDistance } from "../src/lib/utils";
import { Event } from "../src/lib/types";

export const getEventById = query({
  args: { eventId: v.string() }, // Expect an event ID as a string
  handler: async (ctx, { eventId }) => {
    const event = await ctx.db
      .query("events")
      .filter((q) => q.eq(q.field("_id"), eventId)) // Adjust field name to match your schema
      .first(); // Get the first matching result

    return event;
  },
});

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

export const getEventsByCategory = query({
  args: {
    category: v.string(),
    currentLat: v.number(),
    currentLon: v.number(),
  },
  handler: async (ctx, { category, currentLat, currentLon }) => {
    // Fetch events by category
    const events: Event[] = await ctx.db
      .query("events")
      .filter((q) => q.eq(q.field("category"), category))
      .collect();

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

export const getCategories = query({
  args: {},
  handler: async (ctx) => {
    const events = await ctx.db.query("events").collect();
    const categories = [...new Set(events.map((event) => event.category))];
    return categories;
  },
});
