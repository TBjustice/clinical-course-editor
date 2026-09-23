import { create } from "zustand";
import type { CliCLayer, CliCTable } from "../types/CliCTypes";
import { arrayMoveImmutable } from "array-move";

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
  deleteActiveTable: () => void;
  moveLayer: (oldIndex: number, newIndex: number) => void;
  addLayer: (uuid: string) => void;
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
    activeTableIndex: state.tableList.length,
    tableList: [...state.tableList, {
      name: 'Untitled Table',
      header: [],
      datetime: [],
      data: []
    }]
  })),
  deleteActiveTable: () => set((state) => ({
    activeTableIndex: -1,
    tableList: state.tableList.filter(
      (_item, index) => index != state.activeTableIndex)
  })),
  addLayer: (uuid: string) => set((state) => {
    const newLayerList = { ...state.layerList };
    newLayerList[uuid] = {
      name: 'Untitled Graph',
      height: 30,
      plotList: []
    };
    return {
      activeLayerUuid: uuid,
      layerList: newLayerList,
      layerUuid: [...state.layerUuid, uuid]
    }
  }),
  moveLayer: (oldIndex: number, newIndex: number) => set((state) => ({
    layerUuid: arrayMoveImmutable(state.layerUuid, oldIndex, newIndex)
  }))
}));