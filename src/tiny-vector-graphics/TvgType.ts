import * as z from "zod";

const StrokeSchema = z.object({
  color: z.string(),
  width: z.number(),
  dasharray: z.array(z.number()).optional()
});

export type Stroke = z.infer<typeof StrokeSchema>;

const FillSchema = z.object({
  color: z.string(),
  rule: z.enum(['nonzero', 'evenodd']).optional()
});

export type Fill = z.infer<typeof FillSchema>;

const FontSchema = z.object({
  family: z.string().optional(),
  size: z.number().optional(),
  weight: z.int().min(1).max(1000).optional(),
  style: z.enum(['normal', 'italic', 'oblique']).optional()
});

export type Font = z.infer<typeof FontSchema>;

const TextPlacementSchema = z.object({
  anchor: z.enum(['start', 'end', 'middle']).optional(),
  baseline: z.enum(['hanging', 'middle', 'alphabetic', 'ideographic']).optional()
});

export type TextPlacement = z.infer<typeof TextPlacementSchema>;

const TransformSchema = z.array(z.number()).length(6);

const RectSchema = z.object({
  type: z.literal('rect'),
  x: z.number(),
  y: z.number(),
  width: z.number(),
  height: z.number(),
  rx: z.number().optional(),
  ry: z.number().optional(),
  stroke: StrokeSchema.optional(),
  fill: FillSchema.optional(),
  transform: TransformSchema.optional()
});

const EllipseSchema = z.object({
  type: z.literal('ellipse'),
  cx: z.number(),
  cy: z.number(),
  rx: z.number(),
  ry: z.number(),
  stroke: StrokeSchema.optional(),
  fill: FillSchema.optional(),
  transform: TransformSchema.optional()
});

const LineSchema = z.object({
  type: z.literal('line'),
  x1: z.number(),
  y1: z.number(),
  x2: z.number(),
  y2: z.number(),
  stroke: StrokeSchema.optional(),
  transform: TransformSchema.optional()
});

const PolylineSchema = z.object({
  type: z.literal('polyline'),
  points: z.array(z.array(z.number()).length(2)),
  stroke: StrokeSchema.optional(),
  fill: FillSchema.optional(),
  transform: TransformSchema.optional()
});

const PolygonSchema = z.object({
  type: z.literal('polygon'),
  points: z.array(z.array(z.number()).length(2)),
  stroke: StrokeSchema.optional(),
  fill: FillSchema.optional(),
  transform: TransformSchema.optional()
});

const TextSchema = z.object({
  type: z.literal('text'),
  x: z.number(),
  y: z.number(),
  text: z.string(),
  font: FontSchema.optional(),
  placement: TextPlacementSchema.optional(),
  stroke: StrokeSchema.optional(),
  fill: FillSchema.optional(),
  transform: TransformSchema.optional()
});

const GroupSchema = z.object({
  type: z.literal('group'),
  transform: TransformSchema.optional(),
  get children() {
    return z.array(TvgElementSchema);
  }
});

const ClipRectSchema = z.object({
  type: z.literal('cliprect'),
  x: z.number(),
  y: z.number(),
  width: z.number(),
  height: z.number(),
  transform: TransformSchema.optional(),
  get children() {
    return z.array(TvgElementSchema);
  }
});

const LayoutParamSchema = z.object({
  anchorSelf: z.enum(['start', 'center', 'end']),
  anchorTarget: z.enum(['start', 'center', 'end']),
  targetId: z.string(),
  margin: z.number()
});

const LayoutSchema = z.object({
  type: z.literal('layout'),
  id: z.string(),
  x: z.union([z.number(), LayoutParamSchema]),
  y: z.union([z.number(), LayoutParamSchema]),
  get children() {
    return z.array(TvgElementSchema);
  }
});

export const TvgElementSchema = z.discriminatedUnion('type', [
  RectSchema,
  EllipseSchema,
  LineSchema,
  PolylineSchema,
  PolygonSchema,
  TextSchema,
  GroupSchema,
  ClipRectSchema,
  LayoutSchema
]);

export type TvgElement = z.infer<typeof TvgElementSchema>;

export type Rect = z.infer<typeof RectSchema>;
export type Ellipse = z.infer<typeof EllipseSchema>;
export type Line = z.infer<typeof LineSchema>;
export type Polyline = z.infer<typeof PolylineSchema>;
export type Polygon = z.infer<typeof PolygonSchema>;
export type Text = z.infer<typeof TextSchema>;
export type Group = z.infer<typeof GroupSchema>;
export type ClipRect = z.infer<typeof ClipRectSchema>;
export type Layout = z.infer<typeof LayoutSchema>;
