import type { CCPlotFigureArg, CCPlotGraphArg, CCPlotGraphType } from "./common";
import type { TvgElement } from '../tiny-vector-graphics/TvgType'

const graphTypeList: Record<string, CCPlotGraphType> = {}

export function getGraphTypes(): string[] {
  return Object.keys(graphTypeList);
}

export function renderGraph(name: string, graphArg: CCPlotGraphArg, figureArg: CCPlotFigureArg): TvgElement[] {
  if (name in graphTypeList) {
    const graphType = graphTypeList[name];
    return graphType.render(graphArg, figureArg);
  }
  else{
    return [];
  }
}

export function addGraphType(graphType: CCPlotGraphType): void {
  graphTypeList[graphType.name] = graphType;
}

export function removeGraphType(name: string): void {
  delete graphTypeList[name];
}
