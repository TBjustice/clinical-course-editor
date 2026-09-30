var CliCPlotPlugin = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/scripts/plugin/main.ts
  var main_exports = {};
  __export(main_exports, {
    addGraphType: () => addGraphType,
    getGraphTypes: () => getGraphTypes,
    removeGraphType: () => removeGraphType,
    renderGraph: () => renderGraph
  });
  var graphTypeList = {};
  function getGraphTypes() {
    return Object.keys(graphTypeList);
  }
  function renderGraph(name, arg) {
    if (name in graphTypeList) {
      const graphType = graphTypeList[name];
      return graphType.render(arg);
    } else {
      return [];
    }
  }
  function addGraphType(graphType) {
    graphTypeList[graphType.name] = graphType;
  }
  function removeGraphType(name) {
    delete graphTypeList[name];
  }
  return __toCommonJS(main_exports);
})();
