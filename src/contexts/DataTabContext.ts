import { createContext } from "react";

type dataTabContextType = {
  activeIndex: number,
  header: string[],
  data: string[][]
}

export const DataTabContext = createContext<dataTabContextType>({
  activeIndex: -1,
  header: [],
  data:[]
})
