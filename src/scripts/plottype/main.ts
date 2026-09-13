import type { TvgElement } from "../tiny-vector-graphics/TvgType";
import type { PlotType } from "./types";

export const plotTypeList: Record<string, PlotType> = {}

export function addPlotType(plotType: PlotType) {
  plotTypeList[crypto.randomUUID()] = plotType;
}

export function myTest(a: number, b: number): TvgElement {
  return {
    type: 'rect',
    x: a,
    y: b,
    width: a + 60,
    height: 60,
    stroke: { color: 'black', width: 1 }
  }
}