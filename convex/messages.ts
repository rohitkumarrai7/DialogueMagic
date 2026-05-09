import { mutationGeneric as mutation, queryGeneric as query } from "convex/server";
import { v } from "convex/values";

export const sendMessage = mutation({
  args: {
    name: v.string(),
    business: v.string(),
    email: v.string(),
    service: v.string(),
    budget: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const messageId = await ctx.db.insert("messages", {
      name: args.name,
      business: args.business,
      email: args.email,
      service: args.service,
      budget: args.budget,
      message: args.message,
    });
    return messageId;
  },
});

export const getMessages = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("messages").order("desc").take(100);
  },
});
