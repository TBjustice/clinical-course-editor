import { createContext, type Dispatch, type SetStateAction } from "react";

type SidebarOpenContextType = {
  value: boolean,
  setValue: Dispatch<SetStateAction<boolean>>
}

export const SidebarOpenContext = createContext<SidebarOpenContextType | null>(null);
