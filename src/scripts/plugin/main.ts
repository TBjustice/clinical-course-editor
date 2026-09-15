import type { CCPlotGraphType } from "./common";
import type { TvgElement } from '../tiny-vector-graphics/TvgType'

const graphTypeList: Record<string, CCPlotGraphType> = {}

export function renderGraph(name: string, value: any): TvgElement[] {
  if (name in graphTypeList) {
    const graphType = graphTypeList[name];
    return graphType.render(value);
  }
  else{
    return [];
  }
}

export function addGraphType(graphType: CCPlotGraphType): void {
  graphTypeList[graphType.name] = graphType;
}
