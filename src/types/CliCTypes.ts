import * as z from "zod";

export const CliCTableSchema = z.object({
  name: z.string(),
  type: z.literal('table'),
  header: z.array(z.iso.datetime()),
  index: z.array(z.string()),
  data: z.array(z.array(z.union([z.number(), z.string(), z.null()])))
}).superRefine((val, ctx) => {
  const headerLength = val.header.length;
  const keyLength = val.index.length;
  if (val.data.length != headerLength) {
    ctx.addIssue({
      code: 'custom',
      message: `Data length must be equal to the size of index(${headerLength}).`
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

export const CliCPlotSchema = z.object({
  type:z.string(),
  target: z.array(z.string()),
  parameters: z.object()
});

export const CliCLayerSchema = z.object({
  charts: z.array(CliCPlotSchema),
  height: z.number()
});

export const CliCFigureSchema = z.object({
  width: z.number(),
  dateRange: z.array(z.iso.datetime()).length(2),
  layerList: z.array(CliCLayerSchema)
});

export const CliCProjectSchema = z.object({
  dataList: z.array(CliCTableSchema),
  figure: CliCFigureSchema
});

export type CliCProject = z.infer<typeof CliCProjectSchema>;
