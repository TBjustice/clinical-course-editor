import * as z from "zod";

export const TableDataSchema = z.object({
  header: z.array(z.string()),
  index: z.array(z.string()),
  indexName: z.string(),
  data: z.array(z.array(z.string()))
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

export type TableData = z.infer<typeof TableDataSchema>;

