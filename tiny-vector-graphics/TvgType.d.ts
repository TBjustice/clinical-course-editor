import * as z from "zod";
declare const StrokeSchema: z.ZodObject<{
    color: z.ZodString;
    width: z.ZodNumber;
    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
}, z.core.$strip>;
export type Stroke = z.infer<typeof StrokeSchema>;
declare const FillSchema: z.ZodObject<{
    color: z.ZodString;
    rule: z.ZodOptional<z.ZodEnum<{
        evenodd: "evenodd";
        nonzero: "nonzero";
    }>>;
}, z.core.$strip>;
export type Fill = z.infer<typeof FillSchema>;
declare const FontSchema: z.ZodObject<{
    family: z.ZodOptional<z.ZodString>;
    size: z.ZodOptional<z.ZodNumber>;
    weight: z.ZodOptional<z.ZodInt>;
    style: z.ZodOptional<z.ZodEnum<{
        normal: "normal";
        italic: "italic";
        oblique: "oblique";
    }>>;
}, z.core.$strip>;
export type Font = z.infer<typeof FontSchema>;
declare const TextPlacementSchema: z.ZodObject<{
    anchor: z.ZodOptional<z.ZodEnum<{
        end: "end";
        start: "start";
        middle: "middle";
    }>>;
    baseline: z.ZodOptional<z.ZodEnum<{
        alphabetic: "alphabetic";
        hanging: "hanging";
        ideographic: "ideographic";
        middle: "middle";
    }>>;
}, z.core.$strip>;
export type TextPlacement = z.infer<typeof TextPlacementSchema>;
declare const RectSchema: z.ZodObject<{
    type: z.ZodLiteral<"rect">;
    x: z.ZodNumber;
    y: z.ZodNumber;
    width: z.ZodNumber;
    height: z.ZodNumber;
    rx: z.ZodOptional<z.ZodNumber>;
    ry: z.ZodOptional<z.ZodNumber>;
    stroke: z.ZodOptional<z.ZodObject<{
        color: z.ZodString;
        width: z.ZodNumber;
        dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>>;
    fill: z.ZodOptional<z.ZodObject<{
        color: z.ZodString;
        rule: z.ZodOptional<z.ZodEnum<{
            evenodd: "evenodd";
            nonzero: "nonzero";
        }>>;
    }, z.core.$strip>>;
    transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
}, z.core.$strip>;
declare const EllipseSchema: z.ZodObject<{
    type: z.ZodLiteral<"ellipse">;
    cx: z.ZodNumber;
    cy: z.ZodNumber;
    rx: z.ZodNumber;
    ry: z.ZodNumber;
    stroke: z.ZodOptional<z.ZodObject<{
        color: z.ZodString;
        width: z.ZodNumber;
        dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>>;
    fill: z.ZodOptional<z.ZodObject<{
        color: z.ZodString;
        rule: z.ZodOptional<z.ZodEnum<{
            evenodd: "evenodd";
            nonzero: "nonzero";
        }>>;
    }, z.core.$strip>>;
    transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
}, z.core.$strip>;
declare const LineSchema: z.ZodObject<{
    type: z.ZodLiteral<"line">;
    x1: z.ZodNumber;
    y1: z.ZodNumber;
    x2: z.ZodNumber;
    y2: z.ZodNumber;
    stroke: z.ZodOptional<z.ZodObject<{
        color: z.ZodString;
        width: z.ZodNumber;
        dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>>;
    transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
}, z.core.$strip>;
declare const PolylineSchema: z.ZodObject<{
    type: z.ZodLiteral<"polyline">;
    points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
    stroke: z.ZodOptional<z.ZodObject<{
        color: z.ZodString;
        width: z.ZodNumber;
        dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>>;
    fill: z.ZodOptional<z.ZodObject<{
        color: z.ZodString;
        rule: z.ZodOptional<z.ZodEnum<{
            evenodd: "evenodd";
            nonzero: "nonzero";
        }>>;
    }, z.core.$strip>>;
    transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
}, z.core.$strip>;
declare const PolygonSchema: z.ZodObject<{
    type: z.ZodLiteral<"polygon">;
    points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
    stroke: z.ZodOptional<z.ZodObject<{
        color: z.ZodString;
        width: z.ZodNumber;
        dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>>;
    fill: z.ZodOptional<z.ZodObject<{
        color: z.ZodString;
        rule: z.ZodOptional<z.ZodEnum<{
            evenodd: "evenodd";
            nonzero: "nonzero";
        }>>;
    }, z.core.$strip>>;
    transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
}, z.core.$strip>;
declare const TextSchema: z.ZodObject<{
    type: z.ZodLiteral<"text">;
    x: z.ZodNumber;
    y: z.ZodNumber;
    text: z.ZodString;
    font: z.ZodOptional<z.ZodObject<{
        family: z.ZodOptional<z.ZodString>;
        size: z.ZodOptional<z.ZodNumber>;
        weight: z.ZodOptional<z.ZodInt>;
        style: z.ZodOptional<z.ZodEnum<{
            normal: "normal";
            italic: "italic";
            oblique: "oblique";
        }>>;
    }, z.core.$strip>>;
    placement: z.ZodOptional<z.ZodObject<{
        anchor: z.ZodOptional<z.ZodEnum<{
            end: "end";
            start: "start";
            middle: "middle";
        }>>;
        baseline: z.ZodOptional<z.ZodEnum<{
            alphabetic: "alphabetic";
            hanging: "hanging";
            ideographic: "ideographic";
            middle: "middle";
        }>>;
    }, z.core.$strip>>;
    stroke: z.ZodOptional<z.ZodObject<{
        color: z.ZodString;
        width: z.ZodNumber;
        dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>>;
    fill: z.ZodOptional<z.ZodObject<{
        color: z.ZodString;
        rule: z.ZodOptional<z.ZodEnum<{
            evenodd: "evenodd";
            nonzero: "nonzero";
        }>>;
    }, z.core.$strip>>;
    transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
}, z.core.$strip>;
declare const GroupSchema: z.ZodObject<{
    type: z.ZodLiteral<"group">;
    transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    children: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        type: z.ZodLiteral<"rect">;
        x: z.ZodNumber;
        y: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
        rx: z.ZodOptional<z.ZodNumber>;
        ry: z.ZodOptional<z.ZodNumber>;
        stroke: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            width: z.ZodNumber;
            dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>>;
        fill: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            rule: z.ZodOptional<z.ZodEnum<{
                evenodd: "evenodd";
                nonzero: "nonzero";
            }>>;
        }, z.core.$strip>>;
        transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"ellipse">;
        cx: z.ZodNumber;
        cy: z.ZodNumber;
        rx: z.ZodNumber;
        ry: z.ZodNumber;
        stroke: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            width: z.ZodNumber;
            dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>>;
        fill: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            rule: z.ZodOptional<z.ZodEnum<{
                evenodd: "evenodd";
                nonzero: "nonzero";
            }>>;
        }, z.core.$strip>>;
        transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"line">;
        x1: z.ZodNumber;
        y1: z.ZodNumber;
        x2: z.ZodNumber;
        y2: z.ZodNumber;
        stroke: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            width: z.ZodNumber;
            dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>>;
        transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"polyline">;
        points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
        stroke: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            width: z.ZodNumber;
            dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>>;
        fill: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            rule: z.ZodOptional<z.ZodEnum<{
                evenodd: "evenodd";
                nonzero: "nonzero";
            }>>;
        }, z.core.$strip>>;
        transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"polygon">;
        points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
        stroke: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            width: z.ZodNumber;
            dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>>;
        fill: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            rule: z.ZodOptional<z.ZodEnum<{
                evenodd: "evenodd";
                nonzero: "nonzero";
            }>>;
        }, z.core.$strip>>;
        transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"text">;
        x: z.ZodNumber;
        y: z.ZodNumber;
        text: z.ZodString;
        font: z.ZodOptional<z.ZodObject<{
            family: z.ZodOptional<z.ZodString>;
            size: z.ZodOptional<z.ZodNumber>;
            weight: z.ZodOptional<z.ZodInt>;
            style: z.ZodOptional<z.ZodEnum<{
                normal: "normal";
                italic: "italic";
                oblique: "oblique";
            }>>;
        }, z.core.$strip>>;
        placement: z.ZodOptional<z.ZodObject<{
            anchor: z.ZodOptional<z.ZodEnum<{
                end: "end";
                start: "start";
                middle: "middle";
            }>>;
            baseline: z.ZodOptional<z.ZodEnum<{
                alphabetic: "alphabetic";
                hanging: "hanging";
                ideographic: "ideographic";
                middle: "middle";
            }>>;
        }, z.core.$strip>>;
        stroke: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            width: z.ZodNumber;
            dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>>;
        fill: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            rule: z.ZodOptional<z.ZodEnum<{
                evenodd: "evenodd";
                nonzero: "nonzero";
            }>>;
        }, z.core.$strip>>;
        transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"cliprect">;
        x: z.ZodNumber;
        y: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
        transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        children: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            type: z.ZodLiteral<"rect">;
            x: z.ZodNumber;
            y: z.ZodNumber;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rx: z.ZodOptional<z.ZodNumber>;
            ry: z.ZodOptional<z.ZodNumber>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"ellipse">;
            cx: z.ZodNumber;
            cy: z.ZodNumber;
            rx: z.ZodNumber;
            ry: z.ZodNumber;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"line">;
            x1: z.ZodNumber;
            y1: z.ZodNumber;
            x2: z.ZodNumber;
            y2: z.ZodNumber;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"polyline">;
            points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"polygon">;
            points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"text">;
            x: z.ZodNumber;
            y: z.ZodNumber;
            text: z.ZodString;
            font: z.ZodOptional<z.ZodObject<{
                family: z.ZodOptional<z.ZodString>;
                size: z.ZodOptional<z.ZodNumber>;
                weight: z.ZodOptional<z.ZodInt>;
                style: z.ZodOptional<z.ZodEnum<{
                    normal: "normal";
                    italic: "italic";
                    oblique: "oblique";
                }>>;
            }, z.core.$strip>>;
            placement: z.ZodOptional<z.ZodObject<{
                anchor: z.ZodOptional<z.ZodEnum<{
                    end: "end";
                    start: "start";
                    middle: "middle";
                }>>;
                baseline: z.ZodOptional<z.ZodEnum<{
                    alphabetic: "alphabetic";
                    hanging: "hanging";
                    ideographic: "ideographic";
                    middle: "middle";
                }>>;
            }, z.core.$strip>>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"layout">;
            id: z.ZodString;
            x: z.ZodUnion<readonly [z.ZodNumber, z.ZodObject<{
                anchorSelf: z.ZodEnum<{
                    center: "center";
                    end: "end";
                    start: "start";
                }>;
                anchorTarget: z.ZodEnum<{
                    center: "center";
                    end: "end";
                    start: "start";
                }>;
                targetId: z.ZodString;
                margin: z.ZodNumber;
            }, z.core.$strip>]>;
            y: z.ZodUnion<readonly [z.ZodNumber, z.ZodObject<{
                anchorSelf: z.ZodEnum<{
                    center: "center";
                    end: "end";
                    start: "start";
                }>;
                anchorTarget: z.ZodEnum<{
                    center: "center";
                    end: "end";
                    start: "start";
                }>;
                targetId: z.ZodString;
                margin: z.ZodNumber;
            }, z.core.$strip>]>;
            children: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
                type: z.ZodLiteral<"rect">;
                x: z.ZodNumber;
                y: z.ZodNumber;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rx: z.ZodOptional<z.ZodNumber>;
                ry: z.ZodOptional<z.ZodNumber>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"ellipse">;
                cx: z.ZodNumber;
                cy: z.ZodNumber;
                rx: z.ZodNumber;
                ry: z.ZodNumber;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"line">;
                x1: z.ZodNumber;
                y1: z.ZodNumber;
                x2: z.ZodNumber;
                y2: z.ZodNumber;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"polyline">;
                points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"polygon">;
                points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"text">;
                x: z.ZodNumber;
                y: z.ZodNumber;
                text: z.ZodString;
                font: z.ZodOptional<z.ZodObject<{
                    family: z.ZodOptional<z.ZodString>;
                    size: z.ZodOptional<z.ZodNumber>;
                    weight: z.ZodOptional<z.ZodInt>;
                    style: z.ZodOptional<z.ZodEnum<{
                        normal: "normal";
                        italic: "italic";
                        oblique: "oblique";
                    }>>;
                }, z.core.$strip>>;
                placement: z.ZodOptional<z.ZodObject<{
                    anchor: z.ZodOptional<z.ZodEnum<{
                        end: "end";
                        start: "start";
                        middle: "middle";
                    }>>;
                    baseline: z.ZodOptional<z.ZodEnum<{
                        alphabetic: "alphabetic";
                        hanging: "hanging";
                        ideographic: "ideographic";
                        middle: "middle";
                    }>>;
                }, z.core.$strip>>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>], "type">>;
        }, z.core.$strip>], "type">>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"layout">;
        id: z.ZodString;
        x: z.ZodUnion<readonly [z.ZodNumber, z.ZodObject<{
            anchorSelf: z.ZodEnum<{
                center: "center";
                end: "end";
                start: "start";
            }>;
            anchorTarget: z.ZodEnum<{
                center: "center";
                end: "end";
                start: "start";
            }>;
            targetId: z.ZodString;
            margin: z.ZodNumber;
        }, z.core.$strip>]>;
        y: z.ZodUnion<readonly [z.ZodNumber, z.ZodObject<{
            anchorSelf: z.ZodEnum<{
                center: "center";
                end: "end";
                start: "start";
            }>;
            anchorTarget: z.ZodEnum<{
                center: "center";
                end: "end";
                start: "start";
            }>;
            targetId: z.ZodString;
            margin: z.ZodNumber;
        }, z.core.$strip>]>;
        children: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            type: z.ZodLiteral<"rect">;
            x: z.ZodNumber;
            y: z.ZodNumber;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rx: z.ZodOptional<z.ZodNumber>;
            ry: z.ZodOptional<z.ZodNumber>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"ellipse">;
            cx: z.ZodNumber;
            cy: z.ZodNumber;
            rx: z.ZodNumber;
            ry: z.ZodNumber;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"line">;
            x1: z.ZodNumber;
            y1: z.ZodNumber;
            x2: z.ZodNumber;
            y2: z.ZodNumber;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"polyline">;
            points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"polygon">;
            points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"text">;
            x: z.ZodNumber;
            y: z.ZodNumber;
            text: z.ZodString;
            font: z.ZodOptional<z.ZodObject<{
                family: z.ZodOptional<z.ZodString>;
                size: z.ZodOptional<z.ZodNumber>;
                weight: z.ZodOptional<z.ZodInt>;
                style: z.ZodOptional<z.ZodEnum<{
                    normal: "normal";
                    italic: "italic";
                    oblique: "oblique";
                }>>;
            }, z.core.$strip>>;
            placement: z.ZodOptional<z.ZodObject<{
                anchor: z.ZodOptional<z.ZodEnum<{
                    end: "end";
                    start: "start";
                    middle: "middle";
                }>>;
                baseline: z.ZodOptional<z.ZodEnum<{
                    alphabetic: "alphabetic";
                    hanging: "hanging";
                    ideographic: "ideographic";
                    middle: "middle";
                }>>;
            }, z.core.$strip>>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"cliprect">;
            x: z.ZodNumber;
            y: z.ZodNumber;
            width: z.ZodNumber;
            height: z.ZodNumber;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            children: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
                type: z.ZodLiteral<"rect">;
                x: z.ZodNumber;
                y: z.ZodNumber;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rx: z.ZodOptional<z.ZodNumber>;
                ry: z.ZodOptional<z.ZodNumber>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"ellipse">;
                cx: z.ZodNumber;
                cy: z.ZodNumber;
                rx: z.ZodNumber;
                ry: z.ZodNumber;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"line">;
                x1: z.ZodNumber;
                y1: z.ZodNumber;
                x2: z.ZodNumber;
                y2: z.ZodNumber;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"polyline">;
                points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"polygon">;
                points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"text">;
                x: z.ZodNumber;
                y: z.ZodNumber;
                text: z.ZodString;
                font: z.ZodOptional<z.ZodObject<{
                    family: z.ZodOptional<z.ZodString>;
                    size: z.ZodOptional<z.ZodNumber>;
                    weight: z.ZodOptional<z.ZodInt>;
                    style: z.ZodOptional<z.ZodEnum<{
                        normal: "normal";
                        italic: "italic";
                        oblique: "oblique";
                    }>>;
                }, z.core.$strip>>;
                placement: z.ZodOptional<z.ZodObject<{
                    anchor: z.ZodOptional<z.ZodEnum<{
                        end: "end";
                        start: "start";
                        middle: "middle";
                    }>>;
                    baseline: z.ZodOptional<z.ZodEnum<{
                        alphabetic: "alphabetic";
                        hanging: "hanging";
                        ideographic: "ideographic";
                        middle: "middle";
                    }>>;
                }, z.core.$strip>>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>], "type">>;
        }, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>], "type">>;
    }, z.core.$strip>], "type">>;
}, z.core.$strip>;
declare const ClipRectSchema: z.ZodObject<{
    type: z.ZodLiteral<"cliprect">;
    x: z.ZodNumber;
    y: z.ZodNumber;
    width: z.ZodNumber;
    height: z.ZodNumber;
    transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    children: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        type: z.ZodLiteral<"rect">;
        x: z.ZodNumber;
        y: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
        rx: z.ZodOptional<z.ZodNumber>;
        ry: z.ZodOptional<z.ZodNumber>;
        stroke: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            width: z.ZodNumber;
            dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>>;
        fill: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            rule: z.ZodOptional<z.ZodEnum<{
                evenodd: "evenodd";
                nonzero: "nonzero";
            }>>;
        }, z.core.$strip>>;
        transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"ellipse">;
        cx: z.ZodNumber;
        cy: z.ZodNumber;
        rx: z.ZodNumber;
        ry: z.ZodNumber;
        stroke: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            width: z.ZodNumber;
            dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>>;
        fill: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            rule: z.ZodOptional<z.ZodEnum<{
                evenodd: "evenodd";
                nonzero: "nonzero";
            }>>;
        }, z.core.$strip>>;
        transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"line">;
        x1: z.ZodNumber;
        y1: z.ZodNumber;
        x2: z.ZodNumber;
        y2: z.ZodNumber;
        stroke: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            width: z.ZodNumber;
            dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>>;
        transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"polyline">;
        points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
        stroke: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            width: z.ZodNumber;
            dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>>;
        fill: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            rule: z.ZodOptional<z.ZodEnum<{
                evenodd: "evenodd";
                nonzero: "nonzero";
            }>>;
        }, z.core.$strip>>;
        transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"polygon">;
        points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
        stroke: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            width: z.ZodNumber;
            dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>>;
        fill: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            rule: z.ZodOptional<z.ZodEnum<{
                evenodd: "evenodd";
                nonzero: "nonzero";
            }>>;
        }, z.core.$strip>>;
        transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"text">;
        x: z.ZodNumber;
        y: z.ZodNumber;
        text: z.ZodString;
        font: z.ZodOptional<z.ZodObject<{
            family: z.ZodOptional<z.ZodString>;
            size: z.ZodOptional<z.ZodNumber>;
            weight: z.ZodOptional<z.ZodInt>;
            style: z.ZodOptional<z.ZodEnum<{
                normal: "normal";
                italic: "italic";
                oblique: "oblique";
            }>>;
        }, z.core.$strip>>;
        placement: z.ZodOptional<z.ZodObject<{
            anchor: z.ZodOptional<z.ZodEnum<{
                end: "end";
                start: "start";
                middle: "middle";
            }>>;
            baseline: z.ZodOptional<z.ZodEnum<{
                alphabetic: "alphabetic";
                hanging: "hanging";
                ideographic: "ideographic";
                middle: "middle";
            }>>;
        }, z.core.$strip>>;
        stroke: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            width: z.ZodNumber;
            dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>>;
        fill: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            rule: z.ZodOptional<z.ZodEnum<{
                evenodd: "evenodd";
                nonzero: "nonzero";
            }>>;
        }, z.core.$strip>>;
        transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"group">;
        transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        children: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            type: z.ZodLiteral<"rect">;
            x: z.ZodNumber;
            y: z.ZodNumber;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rx: z.ZodOptional<z.ZodNumber>;
            ry: z.ZodOptional<z.ZodNumber>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"ellipse">;
            cx: z.ZodNumber;
            cy: z.ZodNumber;
            rx: z.ZodNumber;
            ry: z.ZodNumber;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"line">;
            x1: z.ZodNumber;
            y1: z.ZodNumber;
            x2: z.ZodNumber;
            y2: z.ZodNumber;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"polyline">;
            points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"polygon">;
            points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"text">;
            x: z.ZodNumber;
            y: z.ZodNumber;
            text: z.ZodString;
            font: z.ZodOptional<z.ZodObject<{
                family: z.ZodOptional<z.ZodString>;
                size: z.ZodOptional<z.ZodNumber>;
                weight: z.ZodOptional<z.ZodInt>;
                style: z.ZodOptional<z.ZodEnum<{
                    normal: "normal";
                    italic: "italic";
                    oblique: "oblique";
                }>>;
            }, z.core.$strip>>;
            placement: z.ZodOptional<z.ZodObject<{
                anchor: z.ZodOptional<z.ZodEnum<{
                    end: "end";
                    start: "start";
                    middle: "middle";
                }>>;
                baseline: z.ZodOptional<z.ZodEnum<{
                    alphabetic: "alphabetic";
                    hanging: "hanging";
                    ideographic: "ideographic";
                    middle: "middle";
                }>>;
            }, z.core.$strip>>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"layout">;
            id: z.ZodString;
            x: z.ZodUnion<readonly [z.ZodNumber, z.ZodObject<{
                anchorSelf: z.ZodEnum<{
                    center: "center";
                    end: "end";
                    start: "start";
                }>;
                anchorTarget: z.ZodEnum<{
                    center: "center";
                    end: "end";
                    start: "start";
                }>;
                targetId: z.ZodString;
                margin: z.ZodNumber;
            }, z.core.$strip>]>;
            y: z.ZodUnion<readonly [z.ZodNumber, z.ZodObject<{
                anchorSelf: z.ZodEnum<{
                    center: "center";
                    end: "end";
                    start: "start";
                }>;
                anchorTarget: z.ZodEnum<{
                    center: "center";
                    end: "end";
                    start: "start";
                }>;
                targetId: z.ZodString;
                margin: z.ZodNumber;
            }, z.core.$strip>]>;
            children: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
                type: z.ZodLiteral<"rect">;
                x: z.ZodNumber;
                y: z.ZodNumber;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rx: z.ZodOptional<z.ZodNumber>;
                ry: z.ZodOptional<z.ZodNumber>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"ellipse">;
                cx: z.ZodNumber;
                cy: z.ZodNumber;
                rx: z.ZodNumber;
                ry: z.ZodNumber;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"line">;
                x1: z.ZodNumber;
                y1: z.ZodNumber;
                x2: z.ZodNumber;
                y2: z.ZodNumber;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"polyline">;
                points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"polygon">;
                points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"text">;
                x: z.ZodNumber;
                y: z.ZodNumber;
                text: z.ZodString;
                font: z.ZodOptional<z.ZodObject<{
                    family: z.ZodOptional<z.ZodString>;
                    size: z.ZodOptional<z.ZodNumber>;
                    weight: z.ZodOptional<z.ZodInt>;
                    style: z.ZodOptional<z.ZodEnum<{
                        normal: "normal";
                        italic: "italic";
                        oblique: "oblique";
                    }>>;
                }, z.core.$strip>>;
                placement: z.ZodOptional<z.ZodObject<{
                    anchor: z.ZodOptional<z.ZodEnum<{
                        end: "end";
                        start: "start";
                        middle: "middle";
                    }>>;
                    baseline: z.ZodOptional<z.ZodEnum<{
                        alphabetic: "alphabetic";
                        hanging: "hanging";
                        ideographic: "ideographic";
                        middle: "middle";
                    }>>;
                }, z.core.$strip>>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>], "type">>;
        }, z.core.$strip>], "type">>;
    }, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"layout">;
        id: z.ZodString;
        x: z.ZodUnion<readonly [z.ZodNumber, z.ZodObject<{
            anchorSelf: z.ZodEnum<{
                center: "center";
                end: "end";
                start: "start";
            }>;
            anchorTarget: z.ZodEnum<{
                center: "center";
                end: "end";
                start: "start";
            }>;
            targetId: z.ZodString;
            margin: z.ZodNumber;
        }, z.core.$strip>]>;
        y: z.ZodUnion<readonly [z.ZodNumber, z.ZodObject<{
            anchorSelf: z.ZodEnum<{
                center: "center";
                end: "end";
                start: "start";
            }>;
            anchorTarget: z.ZodEnum<{
                center: "center";
                end: "end";
                start: "start";
            }>;
            targetId: z.ZodString;
            margin: z.ZodNumber;
        }, z.core.$strip>]>;
        children: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            type: z.ZodLiteral<"rect">;
            x: z.ZodNumber;
            y: z.ZodNumber;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rx: z.ZodOptional<z.ZodNumber>;
            ry: z.ZodOptional<z.ZodNumber>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"ellipse">;
            cx: z.ZodNumber;
            cy: z.ZodNumber;
            rx: z.ZodNumber;
            ry: z.ZodNumber;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"line">;
            x1: z.ZodNumber;
            y1: z.ZodNumber;
            x2: z.ZodNumber;
            y2: z.ZodNumber;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"polyline">;
            points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"polygon">;
            points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"text">;
            x: z.ZodNumber;
            y: z.ZodNumber;
            text: z.ZodString;
            font: z.ZodOptional<z.ZodObject<{
                family: z.ZodOptional<z.ZodString>;
                size: z.ZodOptional<z.ZodNumber>;
                weight: z.ZodOptional<z.ZodInt>;
                style: z.ZodOptional<z.ZodEnum<{
                    normal: "normal";
                    italic: "italic";
                    oblique: "oblique";
                }>>;
            }, z.core.$strip>>;
            placement: z.ZodOptional<z.ZodObject<{
                anchor: z.ZodOptional<z.ZodEnum<{
                    end: "end";
                    start: "start";
                    middle: "middle";
                }>>;
                baseline: z.ZodOptional<z.ZodEnum<{
                    alphabetic: "alphabetic";
                    hanging: "hanging";
                    ideographic: "ideographic";
                    middle: "middle";
                }>>;
            }, z.core.$strip>>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"group">;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            children: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
                type: z.ZodLiteral<"rect">;
                x: z.ZodNumber;
                y: z.ZodNumber;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rx: z.ZodOptional<z.ZodNumber>;
                ry: z.ZodOptional<z.ZodNumber>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"ellipse">;
                cx: z.ZodNumber;
                cy: z.ZodNumber;
                rx: z.ZodNumber;
                ry: z.ZodNumber;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"line">;
                x1: z.ZodNumber;
                y1: z.ZodNumber;
                x2: z.ZodNumber;
                y2: z.ZodNumber;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"polyline">;
                points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"polygon">;
                points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"text">;
                x: z.ZodNumber;
                y: z.ZodNumber;
                text: z.ZodString;
                font: z.ZodOptional<z.ZodObject<{
                    family: z.ZodOptional<z.ZodString>;
                    size: z.ZodOptional<z.ZodNumber>;
                    weight: z.ZodOptional<z.ZodInt>;
                    style: z.ZodOptional<z.ZodEnum<{
                        normal: "normal";
                        italic: "italic";
                        oblique: "oblique";
                    }>>;
                }, z.core.$strip>>;
                placement: z.ZodOptional<z.ZodObject<{
                    anchor: z.ZodOptional<z.ZodEnum<{
                        end: "end";
                        start: "start";
                        middle: "middle";
                    }>>;
                    baseline: z.ZodOptional<z.ZodEnum<{
                        alphabetic: "alphabetic";
                        hanging: "hanging";
                        ideographic: "ideographic";
                        middle: "middle";
                    }>>;
                }, z.core.$strip>>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>], "type">>;
        }, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>], "type">>;
    }, z.core.$strip>], "type">>;
}, z.core.$strip>;
declare const LayoutSchema: z.ZodObject<{
    type: z.ZodLiteral<"layout">;
    id: z.ZodString;
    x: z.ZodUnion<readonly [z.ZodNumber, z.ZodObject<{
        anchorSelf: z.ZodEnum<{
            center: "center";
            end: "end";
            start: "start";
        }>;
        anchorTarget: z.ZodEnum<{
            center: "center";
            end: "end";
            start: "start";
        }>;
        targetId: z.ZodString;
        margin: z.ZodNumber;
    }, z.core.$strip>]>;
    y: z.ZodUnion<readonly [z.ZodNumber, z.ZodObject<{
        anchorSelf: z.ZodEnum<{
            center: "center";
            end: "end";
            start: "start";
        }>;
        anchorTarget: z.ZodEnum<{
            center: "center";
            end: "end";
            start: "start";
        }>;
        targetId: z.ZodString;
        margin: z.ZodNumber;
    }, z.core.$strip>]>;
    children: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        type: z.ZodLiteral<"rect">;
        x: z.ZodNumber;
        y: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
        rx: z.ZodOptional<z.ZodNumber>;
        ry: z.ZodOptional<z.ZodNumber>;
        stroke: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            width: z.ZodNumber;
            dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>>;
        fill: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            rule: z.ZodOptional<z.ZodEnum<{
                evenodd: "evenodd";
                nonzero: "nonzero";
            }>>;
        }, z.core.$strip>>;
        transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"ellipse">;
        cx: z.ZodNumber;
        cy: z.ZodNumber;
        rx: z.ZodNumber;
        ry: z.ZodNumber;
        stroke: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            width: z.ZodNumber;
            dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>>;
        fill: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            rule: z.ZodOptional<z.ZodEnum<{
                evenodd: "evenodd";
                nonzero: "nonzero";
            }>>;
        }, z.core.$strip>>;
        transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"line">;
        x1: z.ZodNumber;
        y1: z.ZodNumber;
        x2: z.ZodNumber;
        y2: z.ZodNumber;
        stroke: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            width: z.ZodNumber;
            dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>>;
        transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"polyline">;
        points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
        stroke: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            width: z.ZodNumber;
            dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>>;
        fill: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            rule: z.ZodOptional<z.ZodEnum<{
                evenodd: "evenodd";
                nonzero: "nonzero";
            }>>;
        }, z.core.$strip>>;
        transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"polygon">;
        points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
        stroke: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            width: z.ZodNumber;
            dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>>;
        fill: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            rule: z.ZodOptional<z.ZodEnum<{
                evenodd: "evenodd";
                nonzero: "nonzero";
            }>>;
        }, z.core.$strip>>;
        transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"text">;
        x: z.ZodNumber;
        y: z.ZodNumber;
        text: z.ZodString;
        font: z.ZodOptional<z.ZodObject<{
            family: z.ZodOptional<z.ZodString>;
            size: z.ZodOptional<z.ZodNumber>;
            weight: z.ZodOptional<z.ZodInt>;
            style: z.ZodOptional<z.ZodEnum<{
                normal: "normal";
                italic: "italic";
                oblique: "oblique";
            }>>;
        }, z.core.$strip>>;
        placement: z.ZodOptional<z.ZodObject<{
            anchor: z.ZodOptional<z.ZodEnum<{
                end: "end";
                start: "start";
                middle: "middle";
            }>>;
            baseline: z.ZodOptional<z.ZodEnum<{
                alphabetic: "alphabetic";
                hanging: "hanging";
                ideographic: "ideographic";
                middle: "middle";
            }>>;
        }, z.core.$strip>>;
        stroke: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            width: z.ZodNumber;
            dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>>;
        fill: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            rule: z.ZodOptional<z.ZodEnum<{
                evenodd: "evenodd";
                nonzero: "nonzero";
            }>>;
        }, z.core.$strip>>;
        transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"group">;
        transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        children: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            type: z.ZodLiteral<"rect">;
            x: z.ZodNumber;
            y: z.ZodNumber;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rx: z.ZodOptional<z.ZodNumber>;
            ry: z.ZodOptional<z.ZodNumber>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"ellipse">;
            cx: z.ZodNumber;
            cy: z.ZodNumber;
            rx: z.ZodNumber;
            ry: z.ZodNumber;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"line">;
            x1: z.ZodNumber;
            y1: z.ZodNumber;
            x2: z.ZodNumber;
            y2: z.ZodNumber;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"polyline">;
            points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"polygon">;
            points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"text">;
            x: z.ZodNumber;
            y: z.ZodNumber;
            text: z.ZodString;
            font: z.ZodOptional<z.ZodObject<{
                family: z.ZodOptional<z.ZodString>;
                size: z.ZodOptional<z.ZodNumber>;
                weight: z.ZodOptional<z.ZodInt>;
                style: z.ZodOptional<z.ZodEnum<{
                    normal: "normal";
                    italic: "italic";
                    oblique: "oblique";
                }>>;
            }, z.core.$strip>>;
            placement: z.ZodOptional<z.ZodObject<{
                anchor: z.ZodOptional<z.ZodEnum<{
                    end: "end";
                    start: "start";
                    middle: "middle";
                }>>;
                baseline: z.ZodOptional<z.ZodEnum<{
                    alphabetic: "alphabetic";
                    hanging: "hanging";
                    ideographic: "ideographic";
                    middle: "middle";
                }>>;
            }, z.core.$strip>>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"cliprect">;
            x: z.ZodNumber;
            y: z.ZodNumber;
            width: z.ZodNumber;
            height: z.ZodNumber;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            children: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
                type: z.ZodLiteral<"rect">;
                x: z.ZodNumber;
                y: z.ZodNumber;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rx: z.ZodOptional<z.ZodNumber>;
                ry: z.ZodOptional<z.ZodNumber>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"ellipse">;
                cx: z.ZodNumber;
                cy: z.ZodNumber;
                rx: z.ZodNumber;
                ry: z.ZodNumber;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"line">;
                x1: z.ZodNumber;
                y1: z.ZodNumber;
                x2: z.ZodNumber;
                y2: z.ZodNumber;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"polyline">;
                points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"polygon">;
                points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"text">;
                x: z.ZodNumber;
                y: z.ZodNumber;
                text: z.ZodString;
                font: z.ZodOptional<z.ZodObject<{
                    family: z.ZodOptional<z.ZodString>;
                    size: z.ZodOptional<z.ZodNumber>;
                    weight: z.ZodOptional<z.ZodInt>;
                    style: z.ZodOptional<z.ZodEnum<{
                        normal: "normal";
                        italic: "italic";
                        oblique: "oblique";
                    }>>;
                }, z.core.$strip>>;
                placement: z.ZodOptional<z.ZodObject<{
                    anchor: z.ZodOptional<z.ZodEnum<{
                        end: "end";
                        start: "start";
                        middle: "middle";
                    }>>;
                    baseline: z.ZodOptional<z.ZodEnum<{
                        alphabetic: "alphabetic";
                        hanging: "hanging";
                        ideographic: "ideographic";
                        middle: "middle";
                    }>>;
                }, z.core.$strip>>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>], "type">>;
        }, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>], "type">>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"cliprect">;
        x: z.ZodNumber;
        y: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
        transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        children: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            type: z.ZodLiteral<"rect">;
            x: z.ZodNumber;
            y: z.ZodNumber;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rx: z.ZodOptional<z.ZodNumber>;
            ry: z.ZodOptional<z.ZodNumber>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"ellipse">;
            cx: z.ZodNumber;
            cy: z.ZodNumber;
            rx: z.ZodNumber;
            ry: z.ZodNumber;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"line">;
            x1: z.ZodNumber;
            y1: z.ZodNumber;
            x2: z.ZodNumber;
            y2: z.ZodNumber;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"polyline">;
            points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"polygon">;
            points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"text">;
            x: z.ZodNumber;
            y: z.ZodNumber;
            text: z.ZodString;
            font: z.ZodOptional<z.ZodObject<{
                family: z.ZodOptional<z.ZodString>;
                size: z.ZodOptional<z.ZodNumber>;
                weight: z.ZodOptional<z.ZodInt>;
                style: z.ZodOptional<z.ZodEnum<{
                    normal: "normal";
                    italic: "italic";
                    oblique: "oblique";
                }>>;
            }, z.core.$strip>>;
            placement: z.ZodOptional<z.ZodObject<{
                anchor: z.ZodOptional<z.ZodEnum<{
                    end: "end";
                    start: "start";
                    middle: "middle";
                }>>;
                baseline: z.ZodOptional<z.ZodEnum<{
                    alphabetic: "alphabetic";
                    hanging: "hanging";
                    ideographic: "ideographic";
                    middle: "middle";
                }>>;
            }, z.core.$strip>>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"group">;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            children: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
                type: z.ZodLiteral<"rect">;
                x: z.ZodNumber;
                y: z.ZodNumber;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rx: z.ZodOptional<z.ZodNumber>;
                ry: z.ZodOptional<z.ZodNumber>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"ellipse">;
                cx: z.ZodNumber;
                cy: z.ZodNumber;
                rx: z.ZodNumber;
                ry: z.ZodNumber;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"line">;
                x1: z.ZodNumber;
                y1: z.ZodNumber;
                x2: z.ZodNumber;
                y2: z.ZodNumber;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"polyline">;
                points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"polygon">;
                points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"text">;
                x: z.ZodNumber;
                y: z.ZodNumber;
                text: z.ZodString;
                font: z.ZodOptional<z.ZodObject<{
                    family: z.ZodOptional<z.ZodString>;
                    size: z.ZodOptional<z.ZodNumber>;
                    weight: z.ZodOptional<z.ZodInt>;
                    style: z.ZodOptional<z.ZodEnum<{
                        normal: "normal";
                        italic: "italic";
                        oblique: "oblique";
                    }>>;
                }, z.core.$strip>>;
                placement: z.ZodOptional<z.ZodObject<{
                    anchor: z.ZodOptional<z.ZodEnum<{
                        end: "end";
                        start: "start";
                        middle: "middle";
                    }>>;
                    baseline: z.ZodOptional<z.ZodEnum<{
                        alphabetic: "alphabetic";
                        hanging: "hanging";
                        ideographic: "ideographic";
                        middle: "middle";
                    }>>;
                }, z.core.$strip>>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>], "type">>;
        }, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>], "type">>;
    }, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>], "type">>;
}, z.core.$strip>;
export declare const TvgElementSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    type: z.ZodLiteral<"rect">;
    x: z.ZodNumber;
    y: z.ZodNumber;
    width: z.ZodNumber;
    height: z.ZodNumber;
    rx: z.ZodOptional<z.ZodNumber>;
    ry: z.ZodOptional<z.ZodNumber>;
    stroke: z.ZodOptional<z.ZodObject<{
        color: z.ZodString;
        width: z.ZodNumber;
        dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>>;
    fill: z.ZodOptional<z.ZodObject<{
        color: z.ZodString;
        rule: z.ZodOptional<z.ZodEnum<{
            evenodd: "evenodd";
            nonzero: "nonzero";
        }>>;
    }, z.core.$strip>>;
    transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"ellipse">;
    cx: z.ZodNumber;
    cy: z.ZodNumber;
    rx: z.ZodNumber;
    ry: z.ZodNumber;
    stroke: z.ZodOptional<z.ZodObject<{
        color: z.ZodString;
        width: z.ZodNumber;
        dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>>;
    fill: z.ZodOptional<z.ZodObject<{
        color: z.ZodString;
        rule: z.ZodOptional<z.ZodEnum<{
            evenodd: "evenodd";
            nonzero: "nonzero";
        }>>;
    }, z.core.$strip>>;
    transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"line">;
    x1: z.ZodNumber;
    y1: z.ZodNumber;
    x2: z.ZodNumber;
    y2: z.ZodNumber;
    stroke: z.ZodOptional<z.ZodObject<{
        color: z.ZodString;
        width: z.ZodNumber;
        dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>>;
    transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"polyline">;
    points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
    stroke: z.ZodOptional<z.ZodObject<{
        color: z.ZodString;
        width: z.ZodNumber;
        dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>>;
    fill: z.ZodOptional<z.ZodObject<{
        color: z.ZodString;
        rule: z.ZodOptional<z.ZodEnum<{
            evenodd: "evenodd";
            nonzero: "nonzero";
        }>>;
    }, z.core.$strip>>;
    transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"polygon">;
    points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
    stroke: z.ZodOptional<z.ZodObject<{
        color: z.ZodString;
        width: z.ZodNumber;
        dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>>;
    fill: z.ZodOptional<z.ZodObject<{
        color: z.ZodString;
        rule: z.ZodOptional<z.ZodEnum<{
            evenodd: "evenodd";
            nonzero: "nonzero";
        }>>;
    }, z.core.$strip>>;
    transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"text">;
    x: z.ZodNumber;
    y: z.ZodNumber;
    text: z.ZodString;
    font: z.ZodOptional<z.ZodObject<{
        family: z.ZodOptional<z.ZodString>;
        size: z.ZodOptional<z.ZodNumber>;
        weight: z.ZodOptional<z.ZodInt>;
        style: z.ZodOptional<z.ZodEnum<{
            normal: "normal";
            italic: "italic";
            oblique: "oblique";
        }>>;
    }, z.core.$strip>>;
    placement: z.ZodOptional<z.ZodObject<{
        anchor: z.ZodOptional<z.ZodEnum<{
            end: "end";
            start: "start";
            middle: "middle";
        }>>;
        baseline: z.ZodOptional<z.ZodEnum<{
            alphabetic: "alphabetic";
            hanging: "hanging";
            ideographic: "ideographic";
            middle: "middle";
        }>>;
    }, z.core.$strip>>;
    stroke: z.ZodOptional<z.ZodObject<{
        color: z.ZodString;
        width: z.ZodNumber;
        dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>>;
    fill: z.ZodOptional<z.ZodObject<{
        color: z.ZodString;
        rule: z.ZodOptional<z.ZodEnum<{
            evenodd: "evenodd";
            nonzero: "nonzero";
        }>>;
    }, z.core.$strip>>;
    transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"group">;
    transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    children: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        type: z.ZodLiteral<"rect">;
        x: z.ZodNumber;
        y: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
        rx: z.ZodOptional<z.ZodNumber>;
        ry: z.ZodOptional<z.ZodNumber>;
        stroke: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            width: z.ZodNumber;
            dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>>;
        fill: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            rule: z.ZodOptional<z.ZodEnum<{
                evenodd: "evenodd";
                nonzero: "nonzero";
            }>>;
        }, z.core.$strip>>;
        transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"ellipse">;
        cx: z.ZodNumber;
        cy: z.ZodNumber;
        rx: z.ZodNumber;
        ry: z.ZodNumber;
        stroke: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            width: z.ZodNumber;
            dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>>;
        fill: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            rule: z.ZodOptional<z.ZodEnum<{
                evenodd: "evenodd";
                nonzero: "nonzero";
            }>>;
        }, z.core.$strip>>;
        transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"line">;
        x1: z.ZodNumber;
        y1: z.ZodNumber;
        x2: z.ZodNumber;
        y2: z.ZodNumber;
        stroke: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            width: z.ZodNumber;
            dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>>;
        transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"polyline">;
        points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
        stroke: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            width: z.ZodNumber;
            dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>>;
        fill: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            rule: z.ZodOptional<z.ZodEnum<{
                evenodd: "evenodd";
                nonzero: "nonzero";
            }>>;
        }, z.core.$strip>>;
        transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"polygon">;
        points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
        stroke: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            width: z.ZodNumber;
            dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>>;
        fill: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            rule: z.ZodOptional<z.ZodEnum<{
                evenodd: "evenodd";
                nonzero: "nonzero";
            }>>;
        }, z.core.$strip>>;
        transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"text">;
        x: z.ZodNumber;
        y: z.ZodNumber;
        text: z.ZodString;
        font: z.ZodOptional<z.ZodObject<{
            family: z.ZodOptional<z.ZodString>;
            size: z.ZodOptional<z.ZodNumber>;
            weight: z.ZodOptional<z.ZodInt>;
            style: z.ZodOptional<z.ZodEnum<{
                normal: "normal";
                italic: "italic";
                oblique: "oblique";
            }>>;
        }, z.core.$strip>>;
        placement: z.ZodOptional<z.ZodObject<{
            anchor: z.ZodOptional<z.ZodEnum<{
                end: "end";
                start: "start";
                middle: "middle";
            }>>;
            baseline: z.ZodOptional<z.ZodEnum<{
                alphabetic: "alphabetic";
                hanging: "hanging";
                ideographic: "ideographic";
                middle: "middle";
            }>>;
        }, z.core.$strip>>;
        stroke: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            width: z.ZodNumber;
            dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>>;
        fill: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            rule: z.ZodOptional<z.ZodEnum<{
                evenodd: "evenodd";
                nonzero: "nonzero";
            }>>;
        }, z.core.$strip>>;
        transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"cliprect">;
        x: z.ZodNumber;
        y: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
        transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        children: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            type: z.ZodLiteral<"rect">;
            x: z.ZodNumber;
            y: z.ZodNumber;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rx: z.ZodOptional<z.ZodNumber>;
            ry: z.ZodOptional<z.ZodNumber>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"ellipse">;
            cx: z.ZodNumber;
            cy: z.ZodNumber;
            rx: z.ZodNumber;
            ry: z.ZodNumber;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"line">;
            x1: z.ZodNumber;
            y1: z.ZodNumber;
            x2: z.ZodNumber;
            y2: z.ZodNumber;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"polyline">;
            points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"polygon">;
            points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"text">;
            x: z.ZodNumber;
            y: z.ZodNumber;
            text: z.ZodString;
            font: z.ZodOptional<z.ZodObject<{
                family: z.ZodOptional<z.ZodString>;
                size: z.ZodOptional<z.ZodNumber>;
                weight: z.ZodOptional<z.ZodInt>;
                style: z.ZodOptional<z.ZodEnum<{
                    normal: "normal";
                    italic: "italic";
                    oblique: "oblique";
                }>>;
            }, z.core.$strip>>;
            placement: z.ZodOptional<z.ZodObject<{
                anchor: z.ZodOptional<z.ZodEnum<{
                    end: "end";
                    start: "start";
                    middle: "middle";
                }>>;
                baseline: z.ZodOptional<z.ZodEnum<{
                    alphabetic: "alphabetic";
                    hanging: "hanging";
                    ideographic: "ideographic";
                    middle: "middle";
                }>>;
            }, z.core.$strip>>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"layout">;
            id: z.ZodString;
            x: z.ZodUnion<readonly [z.ZodNumber, z.ZodObject<{
                anchorSelf: z.ZodEnum<{
                    center: "center";
                    end: "end";
                    start: "start";
                }>;
                anchorTarget: z.ZodEnum<{
                    center: "center";
                    end: "end";
                    start: "start";
                }>;
                targetId: z.ZodString;
                margin: z.ZodNumber;
            }, z.core.$strip>]>;
            y: z.ZodUnion<readonly [z.ZodNumber, z.ZodObject<{
                anchorSelf: z.ZodEnum<{
                    center: "center";
                    end: "end";
                    start: "start";
                }>;
                anchorTarget: z.ZodEnum<{
                    center: "center";
                    end: "end";
                    start: "start";
                }>;
                targetId: z.ZodString;
                margin: z.ZodNumber;
            }, z.core.$strip>]>;
            children: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
                type: z.ZodLiteral<"rect">;
                x: z.ZodNumber;
                y: z.ZodNumber;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rx: z.ZodOptional<z.ZodNumber>;
                ry: z.ZodOptional<z.ZodNumber>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"ellipse">;
                cx: z.ZodNumber;
                cy: z.ZodNumber;
                rx: z.ZodNumber;
                ry: z.ZodNumber;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"line">;
                x1: z.ZodNumber;
                y1: z.ZodNumber;
                x2: z.ZodNumber;
                y2: z.ZodNumber;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"polyline">;
                points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"polygon">;
                points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"text">;
                x: z.ZodNumber;
                y: z.ZodNumber;
                text: z.ZodString;
                font: z.ZodOptional<z.ZodObject<{
                    family: z.ZodOptional<z.ZodString>;
                    size: z.ZodOptional<z.ZodNumber>;
                    weight: z.ZodOptional<z.ZodInt>;
                    style: z.ZodOptional<z.ZodEnum<{
                        normal: "normal";
                        italic: "italic";
                        oblique: "oblique";
                    }>>;
                }, z.core.$strip>>;
                placement: z.ZodOptional<z.ZodObject<{
                    anchor: z.ZodOptional<z.ZodEnum<{
                        end: "end";
                        start: "start";
                        middle: "middle";
                    }>>;
                    baseline: z.ZodOptional<z.ZodEnum<{
                        alphabetic: "alphabetic";
                        hanging: "hanging";
                        ideographic: "ideographic";
                        middle: "middle";
                    }>>;
                }, z.core.$strip>>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>], "type">>;
        }, z.core.$strip>], "type">>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"layout">;
        id: z.ZodString;
        x: z.ZodUnion<readonly [z.ZodNumber, z.ZodObject<{
            anchorSelf: z.ZodEnum<{
                center: "center";
                end: "end";
                start: "start";
            }>;
            anchorTarget: z.ZodEnum<{
                center: "center";
                end: "end";
                start: "start";
            }>;
            targetId: z.ZodString;
            margin: z.ZodNumber;
        }, z.core.$strip>]>;
        y: z.ZodUnion<readonly [z.ZodNumber, z.ZodObject<{
            anchorSelf: z.ZodEnum<{
                center: "center";
                end: "end";
                start: "start";
            }>;
            anchorTarget: z.ZodEnum<{
                center: "center";
                end: "end";
                start: "start";
            }>;
            targetId: z.ZodString;
            margin: z.ZodNumber;
        }, z.core.$strip>]>;
        children: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            type: z.ZodLiteral<"rect">;
            x: z.ZodNumber;
            y: z.ZodNumber;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rx: z.ZodOptional<z.ZodNumber>;
            ry: z.ZodOptional<z.ZodNumber>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"ellipse">;
            cx: z.ZodNumber;
            cy: z.ZodNumber;
            rx: z.ZodNumber;
            ry: z.ZodNumber;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"line">;
            x1: z.ZodNumber;
            y1: z.ZodNumber;
            x2: z.ZodNumber;
            y2: z.ZodNumber;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"polyline">;
            points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"polygon">;
            points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"text">;
            x: z.ZodNumber;
            y: z.ZodNumber;
            text: z.ZodString;
            font: z.ZodOptional<z.ZodObject<{
                family: z.ZodOptional<z.ZodString>;
                size: z.ZodOptional<z.ZodNumber>;
                weight: z.ZodOptional<z.ZodInt>;
                style: z.ZodOptional<z.ZodEnum<{
                    normal: "normal";
                    italic: "italic";
                    oblique: "oblique";
                }>>;
            }, z.core.$strip>>;
            placement: z.ZodOptional<z.ZodObject<{
                anchor: z.ZodOptional<z.ZodEnum<{
                    end: "end";
                    start: "start";
                    middle: "middle";
                }>>;
                baseline: z.ZodOptional<z.ZodEnum<{
                    alphabetic: "alphabetic";
                    hanging: "hanging";
                    ideographic: "ideographic";
                    middle: "middle";
                }>>;
            }, z.core.$strip>>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"cliprect">;
            x: z.ZodNumber;
            y: z.ZodNumber;
            width: z.ZodNumber;
            height: z.ZodNumber;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            children: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
                type: z.ZodLiteral<"rect">;
                x: z.ZodNumber;
                y: z.ZodNumber;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rx: z.ZodOptional<z.ZodNumber>;
                ry: z.ZodOptional<z.ZodNumber>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"ellipse">;
                cx: z.ZodNumber;
                cy: z.ZodNumber;
                rx: z.ZodNumber;
                ry: z.ZodNumber;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"line">;
                x1: z.ZodNumber;
                y1: z.ZodNumber;
                x2: z.ZodNumber;
                y2: z.ZodNumber;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"polyline">;
                points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"polygon">;
                points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"text">;
                x: z.ZodNumber;
                y: z.ZodNumber;
                text: z.ZodString;
                font: z.ZodOptional<z.ZodObject<{
                    family: z.ZodOptional<z.ZodString>;
                    size: z.ZodOptional<z.ZodNumber>;
                    weight: z.ZodOptional<z.ZodInt>;
                    style: z.ZodOptional<z.ZodEnum<{
                        normal: "normal";
                        italic: "italic";
                        oblique: "oblique";
                    }>>;
                }, z.core.$strip>>;
                placement: z.ZodOptional<z.ZodObject<{
                    anchor: z.ZodOptional<z.ZodEnum<{
                        end: "end";
                        start: "start";
                        middle: "middle";
                    }>>;
                    baseline: z.ZodOptional<z.ZodEnum<{
                        alphabetic: "alphabetic";
                        hanging: "hanging";
                        ideographic: "ideographic";
                        middle: "middle";
                    }>>;
                }, z.core.$strip>>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>], "type">>;
        }, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>], "type">>;
    }, z.core.$strip>], "type">>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"cliprect">;
    x: z.ZodNumber;
    y: z.ZodNumber;
    width: z.ZodNumber;
    height: z.ZodNumber;
    transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    children: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        type: z.ZodLiteral<"rect">;
        x: z.ZodNumber;
        y: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
        rx: z.ZodOptional<z.ZodNumber>;
        ry: z.ZodOptional<z.ZodNumber>;
        stroke: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            width: z.ZodNumber;
            dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>>;
        fill: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            rule: z.ZodOptional<z.ZodEnum<{
                evenodd: "evenodd";
                nonzero: "nonzero";
            }>>;
        }, z.core.$strip>>;
        transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"ellipse">;
        cx: z.ZodNumber;
        cy: z.ZodNumber;
        rx: z.ZodNumber;
        ry: z.ZodNumber;
        stroke: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            width: z.ZodNumber;
            dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>>;
        fill: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            rule: z.ZodOptional<z.ZodEnum<{
                evenodd: "evenodd";
                nonzero: "nonzero";
            }>>;
        }, z.core.$strip>>;
        transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"line">;
        x1: z.ZodNumber;
        y1: z.ZodNumber;
        x2: z.ZodNumber;
        y2: z.ZodNumber;
        stroke: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            width: z.ZodNumber;
            dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>>;
        transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"polyline">;
        points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
        stroke: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            width: z.ZodNumber;
            dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>>;
        fill: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            rule: z.ZodOptional<z.ZodEnum<{
                evenodd: "evenodd";
                nonzero: "nonzero";
            }>>;
        }, z.core.$strip>>;
        transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"polygon">;
        points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
        stroke: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            width: z.ZodNumber;
            dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>>;
        fill: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            rule: z.ZodOptional<z.ZodEnum<{
                evenodd: "evenodd";
                nonzero: "nonzero";
            }>>;
        }, z.core.$strip>>;
        transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"text">;
        x: z.ZodNumber;
        y: z.ZodNumber;
        text: z.ZodString;
        font: z.ZodOptional<z.ZodObject<{
            family: z.ZodOptional<z.ZodString>;
            size: z.ZodOptional<z.ZodNumber>;
            weight: z.ZodOptional<z.ZodInt>;
            style: z.ZodOptional<z.ZodEnum<{
                normal: "normal";
                italic: "italic";
                oblique: "oblique";
            }>>;
        }, z.core.$strip>>;
        placement: z.ZodOptional<z.ZodObject<{
            anchor: z.ZodOptional<z.ZodEnum<{
                end: "end";
                start: "start";
                middle: "middle";
            }>>;
            baseline: z.ZodOptional<z.ZodEnum<{
                alphabetic: "alphabetic";
                hanging: "hanging";
                ideographic: "ideographic";
                middle: "middle";
            }>>;
        }, z.core.$strip>>;
        stroke: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            width: z.ZodNumber;
            dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>>;
        fill: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            rule: z.ZodOptional<z.ZodEnum<{
                evenodd: "evenodd";
                nonzero: "nonzero";
            }>>;
        }, z.core.$strip>>;
        transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"group">;
        transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        children: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            type: z.ZodLiteral<"rect">;
            x: z.ZodNumber;
            y: z.ZodNumber;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rx: z.ZodOptional<z.ZodNumber>;
            ry: z.ZodOptional<z.ZodNumber>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"ellipse">;
            cx: z.ZodNumber;
            cy: z.ZodNumber;
            rx: z.ZodNumber;
            ry: z.ZodNumber;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"line">;
            x1: z.ZodNumber;
            y1: z.ZodNumber;
            x2: z.ZodNumber;
            y2: z.ZodNumber;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"polyline">;
            points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"polygon">;
            points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"text">;
            x: z.ZodNumber;
            y: z.ZodNumber;
            text: z.ZodString;
            font: z.ZodOptional<z.ZodObject<{
                family: z.ZodOptional<z.ZodString>;
                size: z.ZodOptional<z.ZodNumber>;
                weight: z.ZodOptional<z.ZodInt>;
                style: z.ZodOptional<z.ZodEnum<{
                    normal: "normal";
                    italic: "italic";
                    oblique: "oblique";
                }>>;
            }, z.core.$strip>>;
            placement: z.ZodOptional<z.ZodObject<{
                anchor: z.ZodOptional<z.ZodEnum<{
                    end: "end";
                    start: "start";
                    middle: "middle";
                }>>;
                baseline: z.ZodOptional<z.ZodEnum<{
                    alphabetic: "alphabetic";
                    hanging: "hanging";
                    ideographic: "ideographic";
                    middle: "middle";
                }>>;
            }, z.core.$strip>>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"layout">;
            id: z.ZodString;
            x: z.ZodUnion<readonly [z.ZodNumber, z.ZodObject<{
                anchorSelf: z.ZodEnum<{
                    center: "center";
                    end: "end";
                    start: "start";
                }>;
                anchorTarget: z.ZodEnum<{
                    center: "center";
                    end: "end";
                    start: "start";
                }>;
                targetId: z.ZodString;
                margin: z.ZodNumber;
            }, z.core.$strip>]>;
            y: z.ZodUnion<readonly [z.ZodNumber, z.ZodObject<{
                anchorSelf: z.ZodEnum<{
                    center: "center";
                    end: "end";
                    start: "start";
                }>;
                anchorTarget: z.ZodEnum<{
                    center: "center";
                    end: "end";
                    start: "start";
                }>;
                targetId: z.ZodString;
                margin: z.ZodNumber;
            }, z.core.$strip>]>;
            children: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
                type: z.ZodLiteral<"rect">;
                x: z.ZodNumber;
                y: z.ZodNumber;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rx: z.ZodOptional<z.ZodNumber>;
                ry: z.ZodOptional<z.ZodNumber>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"ellipse">;
                cx: z.ZodNumber;
                cy: z.ZodNumber;
                rx: z.ZodNumber;
                ry: z.ZodNumber;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"line">;
                x1: z.ZodNumber;
                y1: z.ZodNumber;
                x2: z.ZodNumber;
                y2: z.ZodNumber;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"polyline">;
                points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"polygon">;
                points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"text">;
                x: z.ZodNumber;
                y: z.ZodNumber;
                text: z.ZodString;
                font: z.ZodOptional<z.ZodObject<{
                    family: z.ZodOptional<z.ZodString>;
                    size: z.ZodOptional<z.ZodNumber>;
                    weight: z.ZodOptional<z.ZodInt>;
                    style: z.ZodOptional<z.ZodEnum<{
                        normal: "normal";
                        italic: "italic";
                        oblique: "oblique";
                    }>>;
                }, z.core.$strip>>;
                placement: z.ZodOptional<z.ZodObject<{
                    anchor: z.ZodOptional<z.ZodEnum<{
                        end: "end";
                        start: "start";
                        middle: "middle";
                    }>>;
                    baseline: z.ZodOptional<z.ZodEnum<{
                        alphabetic: "alphabetic";
                        hanging: "hanging";
                        ideographic: "ideographic";
                        middle: "middle";
                    }>>;
                }, z.core.$strip>>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>], "type">>;
        }, z.core.$strip>], "type">>;
    }, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"layout">;
        id: z.ZodString;
        x: z.ZodUnion<readonly [z.ZodNumber, z.ZodObject<{
            anchorSelf: z.ZodEnum<{
                center: "center";
                end: "end";
                start: "start";
            }>;
            anchorTarget: z.ZodEnum<{
                center: "center";
                end: "end";
                start: "start";
            }>;
            targetId: z.ZodString;
            margin: z.ZodNumber;
        }, z.core.$strip>]>;
        y: z.ZodUnion<readonly [z.ZodNumber, z.ZodObject<{
            anchorSelf: z.ZodEnum<{
                center: "center";
                end: "end";
                start: "start";
            }>;
            anchorTarget: z.ZodEnum<{
                center: "center";
                end: "end";
                start: "start";
            }>;
            targetId: z.ZodString;
            margin: z.ZodNumber;
        }, z.core.$strip>]>;
        children: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            type: z.ZodLiteral<"rect">;
            x: z.ZodNumber;
            y: z.ZodNumber;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rx: z.ZodOptional<z.ZodNumber>;
            ry: z.ZodOptional<z.ZodNumber>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"ellipse">;
            cx: z.ZodNumber;
            cy: z.ZodNumber;
            rx: z.ZodNumber;
            ry: z.ZodNumber;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"line">;
            x1: z.ZodNumber;
            y1: z.ZodNumber;
            x2: z.ZodNumber;
            y2: z.ZodNumber;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"polyline">;
            points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"polygon">;
            points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"text">;
            x: z.ZodNumber;
            y: z.ZodNumber;
            text: z.ZodString;
            font: z.ZodOptional<z.ZodObject<{
                family: z.ZodOptional<z.ZodString>;
                size: z.ZodOptional<z.ZodNumber>;
                weight: z.ZodOptional<z.ZodInt>;
                style: z.ZodOptional<z.ZodEnum<{
                    normal: "normal";
                    italic: "italic";
                    oblique: "oblique";
                }>>;
            }, z.core.$strip>>;
            placement: z.ZodOptional<z.ZodObject<{
                anchor: z.ZodOptional<z.ZodEnum<{
                    end: "end";
                    start: "start";
                    middle: "middle";
                }>>;
                baseline: z.ZodOptional<z.ZodEnum<{
                    alphabetic: "alphabetic";
                    hanging: "hanging";
                    ideographic: "ideographic";
                    middle: "middle";
                }>>;
            }, z.core.$strip>>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"group">;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            children: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
                type: z.ZodLiteral<"rect">;
                x: z.ZodNumber;
                y: z.ZodNumber;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rx: z.ZodOptional<z.ZodNumber>;
                ry: z.ZodOptional<z.ZodNumber>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"ellipse">;
                cx: z.ZodNumber;
                cy: z.ZodNumber;
                rx: z.ZodNumber;
                ry: z.ZodNumber;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"line">;
                x1: z.ZodNumber;
                y1: z.ZodNumber;
                x2: z.ZodNumber;
                y2: z.ZodNumber;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"polyline">;
                points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"polygon">;
                points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"text">;
                x: z.ZodNumber;
                y: z.ZodNumber;
                text: z.ZodString;
                font: z.ZodOptional<z.ZodObject<{
                    family: z.ZodOptional<z.ZodString>;
                    size: z.ZodOptional<z.ZodNumber>;
                    weight: z.ZodOptional<z.ZodInt>;
                    style: z.ZodOptional<z.ZodEnum<{
                        normal: "normal";
                        italic: "italic";
                        oblique: "oblique";
                    }>>;
                }, z.core.$strip>>;
                placement: z.ZodOptional<z.ZodObject<{
                    anchor: z.ZodOptional<z.ZodEnum<{
                        end: "end";
                        start: "start";
                        middle: "middle";
                    }>>;
                    baseline: z.ZodOptional<z.ZodEnum<{
                        alphabetic: "alphabetic";
                        hanging: "hanging";
                        ideographic: "ideographic";
                        middle: "middle";
                    }>>;
                }, z.core.$strip>>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>], "type">>;
        }, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>], "type">>;
    }, z.core.$strip>], "type">>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"layout">;
    id: z.ZodString;
    x: z.ZodUnion<readonly [z.ZodNumber, z.ZodObject<{
        anchorSelf: z.ZodEnum<{
            center: "center";
            end: "end";
            start: "start";
        }>;
        anchorTarget: z.ZodEnum<{
            center: "center";
            end: "end";
            start: "start";
        }>;
        targetId: z.ZodString;
        margin: z.ZodNumber;
    }, z.core.$strip>]>;
    y: z.ZodUnion<readonly [z.ZodNumber, z.ZodObject<{
        anchorSelf: z.ZodEnum<{
            center: "center";
            end: "end";
            start: "start";
        }>;
        anchorTarget: z.ZodEnum<{
            center: "center";
            end: "end";
            start: "start";
        }>;
        targetId: z.ZodString;
        margin: z.ZodNumber;
    }, z.core.$strip>]>;
    children: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        type: z.ZodLiteral<"rect">;
        x: z.ZodNumber;
        y: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
        rx: z.ZodOptional<z.ZodNumber>;
        ry: z.ZodOptional<z.ZodNumber>;
        stroke: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            width: z.ZodNumber;
            dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>>;
        fill: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            rule: z.ZodOptional<z.ZodEnum<{
                evenodd: "evenodd";
                nonzero: "nonzero";
            }>>;
        }, z.core.$strip>>;
        transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"ellipse">;
        cx: z.ZodNumber;
        cy: z.ZodNumber;
        rx: z.ZodNumber;
        ry: z.ZodNumber;
        stroke: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            width: z.ZodNumber;
            dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>>;
        fill: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            rule: z.ZodOptional<z.ZodEnum<{
                evenodd: "evenodd";
                nonzero: "nonzero";
            }>>;
        }, z.core.$strip>>;
        transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"line">;
        x1: z.ZodNumber;
        y1: z.ZodNumber;
        x2: z.ZodNumber;
        y2: z.ZodNumber;
        stroke: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            width: z.ZodNumber;
            dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>>;
        transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"polyline">;
        points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
        stroke: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            width: z.ZodNumber;
            dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>>;
        fill: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            rule: z.ZodOptional<z.ZodEnum<{
                evenodd: "evenodd";
                nonzero: "nonzero";
            }>>;
        }, z.core.$strip>>;
        transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"polygon">;
        points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
        stroke: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            width: z.ZodNumber;
            dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>>;
        fill: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            rule: z.ZodOptional<z.ZodEnum<{
                evenodd: "evenodd";
                nonzero: "nonzero";
            }>>;
        }, z.core.$strip>>;
        transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"text">;
        x: z.ZodNumber;
        y: z.ZodNumber;
        text: z.ZodString;
        font: z.ZodOptional<z.ZodObject<{
            family: z.ZodOptional<z.ZodString>;
            size: z.ZodOptional<z.ZodNumber>;
            weight: z.ZodOptional<z.ZodInt>;
            style: z.ZodOptional<z.ZodEnum<{
                normal: "normal";
                italic: "italic";
                oblique: "oblique";
            }>>;
        }, z.core.$strip>>;
        placement: z.ZodOptional<z.ZodObject<{
            anchor: z.ZodOptional<z.ZodEnum<{
                end: "end";
                start: "start";
                middle: "middle";
            }>>;
            baseline: z.ZodOptional<z.ZodEnum<{
                alphabetic: "alphabetic";
                hanging: "hanging";
                ideographic: "ideographic";
                middle: "middle";
            }>>;
        }, z.core.$strip>>;
        stroke: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            width: z.ZodNumber;
            dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>>;
        fill: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            rule: z.ZodOptional<z.ZodEnum<{
                evenodd: "evenodd";
                nonzero: "nonzero";
            }>>;
        }, z.core.$strip>>;
        transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"group">;
        transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        children: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            type: z.ZodLiteral<"rect">;
            x: z.ZodNumber;
            y: z.ZodNumber;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rx: z.ZodOptional<z.ZodNumber>;
            ry: z.ZodOptional<z.ZodNumber>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"ellipse">;
            cx: z.ZodNumber;
            cy: z.ZodNumber;
            rx: z.ZodNumber;
            ry: z.ZodNumber;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"line">;
            x1: z.ZodNumber;
            y1: z.ZodNumber;
            x2: z.ZodNumber;
            y2: z.ZodNumber;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"polyline">;
            points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"polygon">;
            points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"text">;
            x: z.ZodNumber;
            y: z.ZodNumber;
            text: z.ZodString;
            font: z.ZodOptional<z.ZodObject<{
                family: z.ZodOptional<z.ZodString>;
                size: z.ZodOptional<z.ZodNumber>;
                weight: z.ZodOptional<z.ZodInt>;
                style: z.ZodOptional<z.ZodEnum<{
                    normal: "normal";
                    italic: "italic";
                    oblique: "oblique";
                }>>;
            }, z.core.$strip>>;
            placement: z.ZodOptional<z.ZodObject<{
                anchor: z.ZodOptional<z.ZodEnum<{
                    end: "end";
                    start: "start";
                    middle: "middle";
                }>>;
                baseline: z.ZodOptional<z.ZodEnum<{
                    alphabetic: "alphabetic";
                    hanging: "hanging";
                    ideographic: "ideographic";
                    middle: "middle";
                }>>;
            }, z.core.$strip>>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"cliprect">;
            x: z.ZodNumber;
            y: z.ZodNumber;
            width: z.ZodNumber;
            height: z.ZodNumber;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            children: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
                type: z.ZodLiteral<"rect">;
                x: z.ZodNumber;
                y: z.ZodNumber;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rx: z.ZodOptional<z.ZodNumber>;
                ry: z.ZodOptional<z.ZodNumber>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"ellipse">;
                cx: z.ZodNumber;
                cy: z.ZodNumber;
                rx: z.ZodNumber;
                ry: z.ZodNumber;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"line">;
                x1: z.ZodNumber;
                y1: z.ZodNumber;
                x2: z.ZodNumber;
                y2: z.ZodNumber;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"polyline">;
                points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"polygon">;
                points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"text">;
                x: z.ZodNumber;
                y: z.ZodNumber;
                text: z.ZodString;
                font: z.ZodOptional<z.ZodObject<{
                    family: z.ZodOptional<z.ZodString>;
                    size: z.ZodOptional<z.ZodNumber>;
                    weight: z.ZodOptional<z.ZodInt>;
                    style: z.ZodOptional<z.ZodEnum<{
                        normal: "normal";
                        italic: "italic";
                        oblique: "oblique";
                    }>>;
                }, z.core.$strip>>;
                placement: z.ZodOptional<z.ZodObject<{
                    anchor: z.ZodOptional<z.ZodEnum<{
                        end: "end";
                        start: "start";
                        middle: "middle";
                    }>>;
                    baseline: z.ZodOptional<z.ZodEnum<{
                        alphabetic: "alphabetic";
                        hanging: "hanging";
                        ideographic: "ideographic";
                        middle: "middle";
                    }>>;
                }, z.core.$strip>>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>], "type">>;
        }, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>], "type">>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"cliprect">;
        x: z.ZodNumber;
        y: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
        transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        children: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            type: z.ZodLiteral<"rect">;
            x: z.ZodNumber;
            y: z.ZodNumber;
            width: z.ZodNumber;
            height: z.ZodNumber;
            rx: z.ZodOptional<z.ZodNumber>;
            ry: z.ZodOptional<z.ZodNumber>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"ellipse">;
            cx: z.ZodNumber;
            cy: z.ZodNumber;
            rx: z.ZodNumber;
            ry: z.ZodNumber;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"line">;
            x1: z.ZodNumber;
            y1: z.ZodNumber;
            x2: z.ZodNumber;
            y2: z.ZodNumber;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"polyline">;
            points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"polygon">;
            points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"text">;
            x: z.ZodNumber;
            y: z.ZodNumber;
            text: z.ZodString;
            font: z.ZodOptional<z.ZodObject<{
                family: z.ZodOptional<z.ZodString>;
                size: z.ZodOptional<z.ZodNumber>;
                weight: z.ZodOptional<z.ZodInt>;
                style: z.ZodOptional<z.ZodEnum<{
                    normal: "normal";
                    italic: "italic";
                    oblique: "oblique";
                }>>;
            }, z.core.$strip>>;
            placement: z.ZodOptional<z.ZodObject<{
                anchor: z.ZodOptional<z.ZodEnum<{
                    end: "end";
                    start: "start";
                    middle: "middle";
                }>>;
                baseline: z.ZodOptional<z.ZodEnum<{
                    alphabetic: "alphabetic";
                    hanging: "hanging";
                    ideographic: "ideographic";
                    middle: "middle";
                }>>;
            }, z.core.$strip>>;
            stroke: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                width: z.ZodNumber;
                dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>>;
            fill: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                rule: z.ZodOptional<z.ZodEnum<{
                    evenodd: "evenodd";
                    nonzero: "nonzero";
                }>>;
            }, z.core.$strip>>;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"group">;
            transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            children: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
                type: z.ZodLiteral<"rect">;
                x: z.ZodNumber;
                y: z.ZodNumber;
                width: z.ZodNumber;
                height: z.ZodNumber;
                rx: z.ZodOptional<z.ZodNumber>;
                ry: z.ZodOptional<z.ZodNumber>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"ellipse">;
                cx: z.ZodNumber;
                cy: z.ZodNumber;
                rx: z.ZodNumber;
                ry: z.ZodNumber;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"line">;
                x1: z.ZodNumber;
                y1: z.ZodNumber;
                x2: z.ZodNumber;
                y2: z.ZodNumber;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"polyline">;
                points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"polygon">;
                points: z.ZodArray<z.ZodArray<z.ZodNumber>>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"text">;
                x: z.ZodNumber;
                y: z.ZodNumber;
                text: z.ZodString;
                font: z.ZodOptional<z.ZodObject<{
                    family: z.ZodOptional<z.ZodString>;
                    size: z.ZodOptional<z.ZodNumber>;
                    weight: z.ZodOptional<z.ZodInt>;
                    style: z.ZodOptional<z.ZodEnum<{
                        normal: "normal";
                        italic: "italic";
                        oblique: "oblique";
                    }>>;
                }, z.core.$strip>>;
                placement: z.ZodOptional<z.ZodObject<{
                    anchor: z.ZodOptional<z.ZodEnum<{
                        end: "end";
                        start: "start";
                        middle: "middle";
                    }>>;
                    baseline: z.ZodOptional<z.ZodEnum<{
                        alphabetic: "alphabetic";
                        hanging: "hanging";
                        ideographic: "ideographic";
                        middle: "middle";
                    }>>;
                }, z.core.$strip>>;
                stroke: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    width: z.ZodNumber;
                    dasharray: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                }, z.core.$strip>>;
                fill: z.ZodOptional<z.ZodObject<{
                    color: z.ZodString;
                    rule: z.ZodOptional<z.ZodEnum<{
                        evenodd: "evenodd";
                        nonzero: "nonzero";
                    }>>;
                }, z.core.$strip>>;
                transform: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>], "type">>;
        }, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>], "type">>;
    }, z.core.$strip>, z.ZodObject</*elided*/ any, z.core.$strip>], "type">>;
}, z.core.$strip>], "type">;
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
export {};
