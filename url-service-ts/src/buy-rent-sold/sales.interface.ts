interface IOptionalProperties {
  minPrice?: number;
  maxPrice?: number;
  propertyTypes?: string[];
  bedrooms?: number;
}

interface IStateData extends IOptionalProperties {
  saleMethod: string;
  state: string;
}

interface IRegionData extends IOptionalProperties {
  saleMethod: string;
  state: string;
  region: string;
}

interface ICityData extends IOptionalProperties {
  saleMethod: string;
  state: string;
  city: string;
}

interface ISuburbData extends IOptionalProperties {
  saleMethod: string;
  state: string;
  suburb: string;
  postalCode: number;
}

interface IFiltersData extends IOptionalProperties {
  saleMethod: string;
}

interface IFiltersOutput {
  priceFilter: string;
  bedroomFilter: string;
  propertyTypesFilter: string;
  saleMethod: string;
}

export { IStateData, IRegionData, ICityData, ISuburbData, IFiltersData, IFiltersOutput };
