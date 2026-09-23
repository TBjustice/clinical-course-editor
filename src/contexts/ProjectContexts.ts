import { createContext, type Dispatch, type SetStateAction } from "react"
import type { CliCLayer, CliCTable } from "../types/CliCTypes"

type ProjectDataContextType = {
  value: CliCTable[],
  setValue: Dispatch<SetStateAction<CliCTable[]>>
}

export const ProjectDataContext = createContext<ProjectDataContextType | null>(null);

type ProjectCliCLayerContextType = {
  uuidList: string[],
  layerList: Record<string, CliCLayer>,
  activeUuid: string,
  dispatch: CallableFunction
}

export const ProjectCliCLayerContext = createContext<ProjectCliCLayerContextType | null>(null);

/*
type ProjectFigureContextType = {
  width: number,
  date: {
    base: string,
    min: string,
    max: string
  }
}
*/
