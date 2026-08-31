export type CCGraphItem = {
  name: string,
  type: string,
  data: any
};

export type CCGraph = {
  uuidList: string[],
  ccgraphItems: Record<string, CCGraphItem>
};

