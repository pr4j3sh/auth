import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";

const schema = defineSchema({
  ...authTables,
  events: defineTable({
    title: v.string(),
    description: v.string(),
    category: v.string(),
    lat: v.string(),
    lon: v.string(),
    date: v.string(),
    timeFrom: v.string(),
    timeTo: v.string(),
    attendees: v.number(),
    isBookmarked: v.boolean(),
  }),
  chatrooms: defineTable({
    eventId: v.id("events"),
    userId: v.id("users"),
  }),
  bookmarks: defineTable({
    eventId: v.id("events"),
    userId: v.id("users"),
  }),
  messages: defineTable({
    eventId: v.id("events"),
    userId: v.id("users"),
    message: v.string(),
  }),
});

export default schema;
