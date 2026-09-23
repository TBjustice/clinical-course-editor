import { create } from "zustand";
import type { CliCLayer, CliCTable } from "../types/CliCTypes";

type ProjectState = {
  tableList: CliCTable[];
  layerList: Record<string, CliCLayer>;
  layerUuid: string[];
  activeTableIndex: number;
  activeLayerUuid: string;
  setTableList: (value: CliCTable[]) => void;
  setLayerList: (value: Record<string, CliCLayer>) => void;
  setLayerUuid: (value: string[]) => void;
  setActiveTableIndex: (index: number) => void;
  setActiveLayerUuid: (uuid: string) => void;
  updateActiveTable: (value: CliCTable) => void;
  addTable: () => void;
};

export const useProjectDataStore = create<ProjectState>((set) => ({
  tableList: [],
  layerList: {},
  layerUuid: [],
  activeTableIndex: -1,
  activeLayerUuid: '',
  setTableList: (value: CliCTable[]) => set({ tableList: value }),
  setLayerList: (value: Record<string, CliCLayer>) => set({ layerList: value }),
  setLayerUuid: (value: string[]) => set({ layerUuid: value }),
  setActiveTableIndex: (index) => set({ activeTableIndex: index }),
  setActiveLayerUuid: (uuid) => set({ activeLayerUuid: uuid }),
  updateActiveTable: (value: CliCTable) => set((state) => ({
    tableList: state.tableList.map((item, index) => {
      if (index == state.activeTableIndex) {
        return value;
      }
      return item;
    })
  })),
  addTable: () => set((state) => ({
    tableList: [...state.tableList, {
      name: 'Untitled Table',
      header: [],
      datetime: [],
      data: []
    }]
  }))
}));