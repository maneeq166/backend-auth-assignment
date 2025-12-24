const { z } = require("zod");

exports.createTaskSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
});

exports.updateTaskSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  status: z.enum(["pending", "done"]).optional(),
});
