export type CCGraphItem = {
  name: string,
  type: string,
  height: number,
  data: string
};

export type CCGraph = {
  uuidList: string[],
  width: number,
  ccgraphItems: Record<string, CCGraphItem>
};

