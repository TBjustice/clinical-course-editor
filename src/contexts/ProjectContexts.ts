import { createContext, type Dispatch, type SetStateAction } from "react"
import type { CliCTable } from "../types/CliCTypes"

type ProjectDataContextType = {
  value: CliCTable[],
  setValue: Dispatch<SetStateAction<CliCTable[]>>
}

export const ProjectDataContext = createContext<ProjectDataContextType | null>(null);

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
