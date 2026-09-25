import * as z from "zod";

export const CliCTableHeaderSchema = z.object({
  uuid: z.string(),
  name: z.string()
});

export type CliCTableHeader = z.infer<typeof CliCTableHeaderSchema>;

export const CliCTableSchema = z.object({
  name: z.string(),
  header: z.array(CliCTableHeaderSchema),
  datetime: z.array(z.string()),
  data: z.array(z.array(z.union([z.string(), z.number(), z.null()])))
}).superRefine((val, ctx) => {
  const headerLength = val.header.length;
  const datetimeLength = val.datetime.length;
  if (val.data.length != headerLength) {
    ctx.addIssue({
      code: 'custom',
      message: `Data length must be equal to the size of index(${headerLength}).`
    });
  }
  val.data.forEach((row, index) => {
    if (row.length != datetimeLength) {
      ctx.addIssue({
        code: 'custom',
        message: `Row at data[${index}] must have same length as key size(${datetimeLength}).`
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

export type CliCPlot = z.infer<typeof CliCPlotSchema>;

export const CliCLayerSchema = z.object({
  name: z.string(),
  plotList: z.array(CliCPlotSchema),
  height: z.number()
});

export type CliCLayer = z.infer<typeof CliCLayerSchema>;

export const CliCFigureSchema = z.object({
  width: z.number(),
  dateRange: z.array(z.string()).length(2),
  layerList: z.array(CliCLayerSchema)
});

export type CliCFigure = z.infer<typeof CliCFigureSchema>;

export const CliCProjectSchema = z.object({
  tableList: z.array(CliCTableSchema),
  figure: CliCFigureSchema
});

export type CliCProject = z.infer<typeof CliCProjectSchema>;
