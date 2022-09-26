interface IOptionalProperties {
	saleMethod: string;
	minPrice?: number;
	maxPrice?: number;
	propertyTypes?: string[];
	bedrooms?: number;
}

interface IStateData extends IOptionalProperties {
	state: string;
}

interface IRegionData extends IOptionalProperties {
	state: string;
	region: string;
}

interface ICityData extends IOptionalProperties {
	state: string;
	city: string;
}

interface ISuburbData extends IOptionalProperties {
	state: string;
	suburb: string;
	postalCode: number;
}

interface IFiltersData extends IOptionalProperties {
}

interface IFiltersOutput {
	priceFilter: string;
	bedroomFilter: string;
	propertyTypesFilter: string;
	saleMethod: string;
}

interface IDataFromUrl {
	saleMethod: string;
	state: string;
	suburb?: string;
	postalCode?: number | string;
	region?: string;
	city?: string;
	minPrice?: number;
	maxPrice?: number;
	propertyTypes?: string[];
	bedrooms?: number;
}

interface ILocation {
	state: string;
	region?: string;
	city?: string;
	suburb?: string;
	postalCode?: number | string;
}

interface IPropertyDetails {
	saleMethod: string;
	listingId: number;
	address: string;
	suburb: string;
	state: string;
}

interface IPropertyDetailsFromUrl {
	saleMethod: string;
	listingId: number;
	address: string;
	state: string;
}

export {
	IStateData,
	IRegionData,
	ICityData,
	ISuburbData,
	IFiltersData,
	IFiltersOutput,
	IDataFromUrl,
	ILocation,
	IPropertyDetails,
	IPropertyDetailsFromUrl
};
