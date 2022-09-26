import UtilsService from '../../utils/index';
import {
	IStateData,
	ICityData,
	IRegionData,
	ISuburbData,
	IFiltersData,
	IFiltersOutput,
	IDataFromUrl,
	ILocation,
	IPropertyDetails,
	IPropertyDetailsFromUrl
} from './listingUrl.interface';

enum ESaleMethodSlug {
	sale = 'for-sale',
	rent = 'for-rent',
	sold = 'sold-properties'
}

export class Listing {
	private static baseUrl = `/`;
	private static cities = ['Melbourne', 'Hobart', 'Darwin', 'Adelaide', 'Perth', 'Brisbane', 'Canberra'];

	static getStateUrlFromData(data: IStateData): string {
		const { saleMethod, priceFilter, bedroomFilter, propertyTypesFilter } = this.getFilterSlugs(data);

		let filters = `${propertyTypesFilter}in-${data.state}${bedroomFilter}${priceFilter}`;
		filters = UtilsService.slugify(filters);

		return `${this.baseUrl}${saleMethod}/${filters}/`;
	}

	static getRegionUrlFromData(data: IRegionData): string {
		const { saleMethod, priceFilter, bedroomFilter, propertyTypesFilter } = this.getFilterSlugs(data);

		let filters = `${propertyTypesFilter}in-${data.state}-${data.region}${bedroomFilter}${priceFilter}`;
		filters = UtilsService.slugify(filters);

		return `${this.baseUrl}${saleMethod}/${filters}/`;
	}

	static getCityUrlFromData(data: ICityData): string {
		const { saleMethod, priceFilter, bedroomFilter, propertyTypesFilter } = this.getFilterSlugs(data);

		let filters = `${propertyTypesFilter}in-${data.state}-${data.city}${bedroomFilter}${priceFilter}`;
		filters = UtilsService.slugify(filters);

		return `${this.baseUrl}${saleMethod}/${filters}/`;
	}

	static getSuburbUrlFromData(data: ISuburbData): string {
		const { saleMethod, priceFilter, bedroomFilter, propertyTypesFilter } = this.getFilterSlugs(data);

		let filters = `${propertyTypesFilter}in-${data.state}-${data.suburb}-${data.postalCode}${bedroomFilter}${priceFilter}`;
		filters = UtilsService.slugify(filters);

		return `${this.baseUrl}${saleMethod}/${filters}/`;
	}

	private static getFilterSlugs(data: IFiltersData): IFiltersOutput {
		const saleMethod = this.getSaleMethodSlug(data);
		const priceFilter = this.getPriceFilterSlug(data);
		const bedroomFilter = this.getBedroomSlug(data);
		const propertyTypesFilter = this.getPropertyTypesSlug(data);
		return {
			priceFilter,
			bedroomFilter,
			propertyTypesFilter,
			saleMethod
		};
	}

	private static getSaleMethodSlug(data: IFiltersData) {
		let { saleMethod } = data;
		saleMethod = UtilsService.slugify(saleMethod);
		let saleMethodSlug = '';

		switch (saleMethod) {
			case 'sale':
				saleMethodSlug = ESaleMethodSlug.sale;
				break;
			case 'rent':
				saleMethodSlug = ESaleMethodSlug.rent;
				break;
			case 'sold':
				saleMethodSlug = ESaleMethodSlug.sold;
				break;
		}
		return saleMethodSlug;
	}

	private static getPriceFilterSlug(data: IFiltersData): string {
		const { saleMethod, minPrice, maxPrice } = data;
		let priceFilter = '';
		if (minPrice && maxPrice) {
			priceFilter = `-between-${minPrice}-and-${maxPrice}`;
		} else if (minPrice && !maxPrice) {
			priceFilter = `-from-${minPrice}`;
		} else if (!minPrice && maxPrice) {
			priceFilter = `-up-to-${maxPrice}`;
		}

		if (saleMethod.toLowerCase() === 'rent' && priceFilter) {
			return `${priceFilter}-per-week`;
		}
		return priceFilter;
	}

	private static getBedroomSlug(data: IFiltersData): string {
		const { bedrooms } = data;
		if (!bedrooms) {
			return '';
		}
		if (bedrooms === 1) {
			return `-with-${bedrooms}-bedroom`;
		}
		if (bedrooms > 1) {
			return `-with-${bedrooms}-bedrooms`;
		}
		return '';
	}

	private static getPropertyTypesSlug(data: IFiltersData): string {
		const { propertyTypes } = data;
		if (!propertyTypes || propertyTypes.length === 0) {
			return '';
		}
		const propertyTypesSlug = `${propertyTypes.reduce(
			(previousType, currentType) => `${previousType}-and-${currentType}`
		)}-`;
		return UtilsService.slugify(propertyTypesSlug);
	}

	//////////////////////////////////////////////////////////////
	// data from Url
	//////////////////////////////////////////////////////////////
	static getDataFromUrl(url: string): IDataFromUrl {
		const data = Listing.removeFirstSlashAndSplitOnSlash(url);
		const { saleMethod, propertyTypes, bedrooms, minPrice, maxPrice } =
			Listing.getSalePropertyBedroomAndPriceHelper(data);

		const { state, postalCode, suburb, region, city } = Listing.getLocationData(data[1]);

		const result = {
			saleMethod,
			state,
			suburb,
			postalCode,
			region,
			city,
			minPrice,
			maxPrice,
			propertyTypes,
			bedrooms
		};
		return UtilsService.removeEmptyValues<IDataFromUrl>(result);
	}

	static getDataFromStateUrl(url: string): IStateData {
		const data = Listing.removeFirstSlashAndSplitOnSlash(url);
		const { saleMethod, propertyTypes, bedrooms, minPrice, maxPrice } =
			Listing.getSalePropertyBedroomAndPriceHelper(data);

		const state = Listing.getStateData(data[1]);

		const result = {
			saleMethod,
			state,
			minPrice,
			maxPrice,
			propertyTypes,
			bedrooms
		};
		return UtilsService.removeEmptyValues<IStateData>(result);
	}

	static getDataFromSuburbUrl(url: string): ISuburbData {
		const data = Listing.removeFirstSlashAndSplitOnSlash(url);
		const { saleMethod, propertyTypes, bedrooms, minPrice, maxPrice } =
			Listing.getSalePropertyBedroomAndPriceHelper(data);

		const state = Listing.getStateData(data[1]);
		const { suburb, postalCode } = Listing.getSuburbData(data[1]);

		const result = {
			saleMethod,
			state,
			suburb,
			postalCode,
			minPrice,
			maxPrice,
			propertyTypes,
			bedrooms
		};
		return UtilsService.removeEmptyValues<ISuburbData>(result);
	}

	static getDataFromCityUrl(url: string): ICityData {
		const data = Listing.removeFirstSlashAndSplitOnSlash(url);
		const { saleMethod, propertyTypes, bedrooms, minPrice, maxPrice } =
			Listing.getSalePropertyBedroomAndPriceHelper(data);

		const state = Listing.getStateData(data[1]);
		const city = Listing.getCityData(data[1]);

		const result = {
			saleMethod,
			state,
			city,
			minPrice,
			maxPrice,
			propertyTypes,
			bedrooms
		};
		return UtilsService.removeEmptyValues<ICityData>(result);
	}

	static getDataFromRegionUrl(url: string): ICityData {
		const data = Listing.removeFirstSlashAndSplitOnSlash(url);
		const { saleMethod, propertyTypes, bedrooms, minPrice, maxPrice } =
			Listing.getSalePropertyBedroomAndPriceHelper(data);

		const state = Listing.getStateData(data[1]);
		const region = Listing.getRegionData(data[1]);

		const result = {
			saleMethod,
			state,
			region,
			minPrice,
			maxPrice,
			propertyTypes,
			bedrooms
		};
		return UtilsService.removeEmptyValues<ICityData>(result);
	}

	private static getSaleMethod(url: string): string {
		let saleMethod = '';
		if (url === ESaleMethodSlug.sale) {
			saleMethod = 'sale';
		}
		if (url === ESaleMethodSlug.rent) {
			saleMethod = 'rent';
		}
		if (url === ESaleMethodSlug.sold) {
			saleMethod = 'sold';
		}
		return UtilsService.slugToName(saleMethod);
	}

	private static getLocationData(url: string): ILocation {
		const state = this.getStateData(url);
		let region = this.getRegionData(url);
		let city = this.getCityData(url);
		const { suburb, postalCode } = this.getSuburbData(url);
		if (postalCode) {
			city = '';
			region = '';
		}
		return {
			state,
			region,
			city,
			suburb,
			postalCode
		};
	}

	private static getPropertyTypes(url: string): string[] {
		const propertyTypes: string[] = [];
		if (url.indexOf('in-') === 0) {
			return propertyTypes;
		}

		const propertyTypesSlug = url.match(/.+?(?=-in-)/);
		if (propertyTypesSlug) {
			propertyTypesSlug[0].split('-and-').forEach((propertyType) => {
				propertyTypes.push(UtilsService.slugToName(propertyType));
			});
		}
		return propertyTypes;
	}

	private static getMinPrice(url: string) {
		const price = url.match(/-from-(.*)/);
		if (price) {
			const minPrice = price[1].split('-').slice(0, 1).join('');
			return parseInt(minPrice);
		}
		return '';
	}

	private static getMaxPrice(url: string) {
		const price = url.match(/-up-to-(.*)/);
		if (price) {
			const maxPrice = price[1].split('-').slice(0, 1).join('');
			return parseInt(maxPrice);
		}
		return '';
	}

	private static getPriceFilter(url: string) {
		const maxPrice = this.getMaxPrice(url);
		const minPrice = this.getMinPrice(url);
		if (maxPrice === '' && minPrice === '') {
			const price = url.match(/-between-(.*)/);
			if (price) {
				return {
					minPrice: parseInt(price[1].split('-and-')[0]),
					maxPrice: parseInt(price[1].split('-and-')[1])
				};
			}
			return { minPrice: '', maxPrice: '' };
		}
		return { minPrice, maxPrice };
	}

	private static getBedrooms(url: string) {
		const bedroom = url.match(/-with-(.+?)-/);
		if (bedroom) {
			return parseInt(bedroom[1]);
		}
		return '';
	}

	private static getSalePropertyBedroomAndPriceHelper(data: string[]) {
		const saleMethod = Listing.getSaleMethod(data[0]);
		const propertyTypes = Listing.getPropertyTypes(data[1]);
		const bedrooms = Listing.getBedrooms(data[1]);
		const { minPrice, maxPrice } = Listing.getPriceFilter(data[1]);
		return { saleMethod, propertyTypes, bedrooms, minPrice, maxPrice };
	}

	private static removeFirstSlashAndSplitOnSlash(url: string) {
		const data = url.split('/' || '/?');
		if (!data[0]) {
			data.shift();
		}
		return data;
	}

	private static getStateData(url: string): string {
		const stateSlug = url.match(/in-(\w+)/);
		if (stateSlug) {
			return stateSlug[1];
		}
		return '';
	}

	private static getSuburbData(url: string) {
		const trimUrl = this.getRawLocationData(url);
		const postalCode = parseInt(trimUrl[trimUrl.length - 1]);

		if (!postalCode) {
			return { suburb: '', postalCode: '' };
		}

		let suburb = trimUrl.slice(0, trimUrl.length - 1).join('-');

		suburb = UtilsService.slugToName(suburb);

		return { suburb, postalCode };
	}

	private static getRegionData(url: string) {
		const trimUrl = this.getRawLocationData(url);
		const region = trimUrl.join(' ');
		if (!this.cities.find((c) => c.toLowerCase() === region.toLowerCase())) {
			return UtilsService.slugToName(region);
		}
		return '';
	}

	private static getCityData(url: string) {
		const trimUrl = this.getRawLocationData(url);
		const city = trimUrl.join(' ');
		if (this.cities.find((c) => c.toLowerCase() === city.toLowerCase())) {
			return UtilsService.slugToName(city);
		}
		return '';
	}

	private static getRawLocationData(url: string) {
		return url
			.split(/in-|-with-|-from-|-up-to-|-between-/)[1]
			.split('-')
			.splice(1);
	}

	/////////////////////////////////////////////////////////////////////
	//Listing details
	/////////////////////////////////////////////////////////////////////

	static getPropertyDetailsFromUrl(url: string): IPropertyDetailsFromUrl | void {
		const data = url.split('/' || '/?');
		if (!data[0]) {
			data.shift();
		}
		const saleMethod = this.getSaleMethodForPropertyDetails(data[1]);
		const listingId = this.getlistingId(data[1]);
		const { address, state } = this.getLocationForPropertyDetails(data[0]);
		if (saleMethod && listingId) {
			return { saleMethod, listingId, address, state };
		}
	}

	static getUrlFromPropertyDetails({ saleMethod, listingId, address, suburb, state }: IPropertyDetails): string {
		saleMethod = UtilsService.slugify(saleMethod);
		let propertyTypeUrl = `real-estate/`;
		if (saleMethod.toLowerCase() === 'rent') {
			propertyTypeUrl = `rental-properties/`;
		}
		let slug = `${address}-${suburb}-${state}`;
		slug = UtilsService.slugify(slug);
		return `${this.baseUrl}${propertyTypeUrl}${slug}/property-details-${saleMethod}-residential-${listingId}/`;
	}

	private static getLocationForPropertyDetails(url: string): { address: string; state: string } {
		let address = url;
		const stateSlug = url.match(/(\w+)$/g);
		let state = stateSlug ? stateSlug[0] : '';
		address = UtilsService.slugToName(address);
		state = UtilsService.slugToName(state);
		return { address, state };
	}

	private static getSaleMethodForPropertyDetails(url: string): string | void {
		if (url.includes('-buy-')) {
			return 'Buy';
		}
		if (url.includes('-rent-')) {
			return 'Rent';
		}
		if (url.includes('-sold-')) {
			return 'Sold';
		}
	}

	private static getlistingId(url: string): number | void {
		let listingId: number;
		const listingIdslug = url.match(/(\d+)/g);
		if (listingIdslug) {
			listingId = parseInt(listingIdslug[0]);
			return listingId;
		}
	}
}
