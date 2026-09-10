import * as z from "zod";

const CliCTableSchema = z.object({
  name: z.string(),
  type: z.literal('table'),
  index: z.array(z.union([z.iso.date()])),
  dasharray: z.array(z.number()).optional()
});

export type CliCTable = z.infer<typeof CliCTableSchema>;