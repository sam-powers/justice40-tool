declare namespace MapModuleScssNamespace {
  export interface IMapModuleScss {
    areaDetailContainer: string;
    categorization:string;
    communityOfFocus:string;
    communityOfFocusCircle:string;
    censusRow:string;
    censusLabel:string;
    censusText: string;
    divider:string;
    indicatorBoxMain:string;
    indicatorBoxAdditional:string;
    indicatorRow:string;
    indicatorName:string;
    indicatorValue:string;
    indicatorSuperscript:string;
    indicatorDesc:string;
  }
}

declare const MapModuleScssModule: MapModuleScssNamespace.IMapModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: MapModuleScssNamespace.IMapModuleScss;
};

export = MapModuleScssModule;
