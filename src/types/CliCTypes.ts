import * as z from "zod";

const CliCTableSchema = z.object({
  name: z.string(),
  type: z.literal('table'),
  index: z.array(z.iso.datetime()),
  keys: z.array(z.string()),
  data: z.array(z.array(z.union([z.number(), z.string(), z.null()])))
}).superRefine((val, ctx) => {
  const indexLength = val.index.length;
  const keyLength = val.keys.length;
  if (val.data.length != indexLength) {
    ctx.addIssue({
      code: 'custom',
      message: `Data length must be equal to the size of index(${indexLength}).`
    });
  }
  val.data.forEach((row, index) => {
    if (row.length != keyLength) {
      ctx.addIssue({
        code: 'custom',
        message: `Row at data[${index}] must have same length as key size(${keyLength}).`
      });
    }
  });
});

export type CliCTable = z.infer<typeof CliCTableSchema>;

const CliCPlotSchema = z.object({
  type:z.string(),
  target: z.array(z.string()),
  parameters: z.object()
});

const CliCAxesSchema = z.object({
  charts: z.array(CliCPlotSchema),
  height: z.number()
});

const CliCFigureSchema = z.object({
  width: z.number(),
  dateRange: z.array(z.iso.datetime()).length(2),
  axesList: z.array(CliCAxesSchema)
});

const CliCProjectSchema = z.object({
  dataList: z.array(CliCTableSchema),
  figure: CliCFigureSchema
});

/*
CliCProject{}
layer
*/
