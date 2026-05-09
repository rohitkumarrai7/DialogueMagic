import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  messages: defineTable({
    name: v.string(),
    business: v.string(),
    email: v.string(),
    service: v.string(),
    budget: v.string(),
    message: v.string(),
  }),
});
