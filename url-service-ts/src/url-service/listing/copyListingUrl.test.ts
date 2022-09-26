import { StateDataFromListingURL,
	SuburbDataFromListingURL,CityDataFromListingURL,RegionDataFromListingURL,DataFromAnyListingUrl, UrlFromAnyData,UrlFromStateData, UrlFromRegionData, UrlFromCityData,UrlFromSuburbData } from './copyListingUrl';
describe('Get Buy-rent-sold page Data from url', () => {
	test('for-sale/in-vic/', () => {
		const data = new StateDataFromListingURL(`for-sale/in-vic/`).getData()
		const result = {
			saleMethod: 'Sale',
			state: 'vic'
		};

		expect(data).toEqual(result);
	});

	test('for-sale/studios-and-townhouses-and-villas-in-vic-richmond-3121-with-1-bedroom-from-50000/', () => {
		const data = new SuburbDataFromListingURL(
			`for-sale/studios-and-townhouses-and-villas-in-vic-richmond-3121-with-1-bedroom-from-50000/`
		).getData()
		const result = {
			saleMethod: 'Sale',
			state: 'vic',
			suburb: 'Richmond',
			postalCode: 3121,
			minPrice: 50000,
			propertyTypes: ['Studios', 'Townhouses', 'Villas'],
			bedrooms: 1
		};

		expect(data).toEqual(result);
	});

	test('for-sale/studios-and-townhouses-and-villas-in-vic-richmond-3121-with-1-bedroom-up-to-75000/', () => {
		const data = new SuburbDataFromListingURL(
			`for-sale/studios-and-townhouses-and-villas-in-vic-richmond-3121-with-1-bedroom-up-to-75000/`
		).getData()
		const result = {
			saleMethod: 'Sale',
			state: 'vic',
			suburb: 'Richmond',
			postalCode: 3121,
			maxPrice: 75000,
			propertyTypes: ['Studios', 'Townhouses', 'Villas'],
			bedrooms: 1
		};

		expect(data).toEqual(result);
	});

	test('for-sale/studios-and-townhouses-and-villas-in-vic-melbourne-with-1-bedroom-up-to-75000/', () => {
		const data = new CityDataFromListingURL(
			`for-sale/studios-and-townhouses-and-villas-in-vic-melbourne-with-1-bedroom-up-to-75000/`
		).getData()
		const result = {
			saleMethod: 'Sale',
			state: 'vic',
			city: 'Melbourne',
			maxPrice: 75000,
			propertyTypes: ['Studios', 'Townhouses', 'Villas'],
			bedrooms: 1
		};

		expect(data).toEqual(result);
	});

	test('for-sale/studios-and-townhouses-and-villas-in-vic-inner-west-with-1-bedroom-up-to-75000/', () => {
		const data = new RegionDataFromListingURL(
			`for-sale/studios-and-townhouses-and-villas-in-vic-inner-west-with-1-bedroom-up-to-75000/`
		).getData()
		const result = {
			saleMethod: 'Sale',
			state: 'vic',
			region: 'Inner West',
			maxPrice: 75000,
			propertyTypes: ['Studios', 'Townhouses', 'Villas'],
			bedrooms: 1
		};

		expect(data).toEqual(result);
	});

	test('for-rent/in-wa-city-beach-6015-from-150-per-week/', () => {
		const data = new SuburbDataFromListingURL(`for-rent/in-wa-city-beach-6015-from-150-per-week/`).getData()
		const result = {
			saleMethod: 'Rent',
			state: 'wa',
			suburb: 'City Beach',
			postalCode: 6015,
			minPrice: 150
		};

		expect(data).toEqual(result);
	});

	test('for-rent/studios-and-townhouses-and-villas-in-vic-richmond-3121-with-1-bedroom-between-5000-and-100000-per-week/', () => {
		const data = new SuburbDataFromListingURL(
			`for-rent/studios-and-townhouses-and-villas-in-vic-richmond-3121-with-1-bedroom-between-5000-and-100000-per-week/`
		).getData()
		const result = {
			saleMethod: 'Rent',
			state: 'vic',
			suburb: 'Richmond',
			postalCode: 3121,
			minPrice: 5000,
			maxPrice: 100000,
			propertyTypes: ['Studios', 'Townhouses', 'Villas'],
			bedrooms: 1
		};

		expect(data).toEqual(result);
	});

	test('for-rent/in-nsw-attunga/', () => {
		const data = new RegionDataFromListingURL(`for-rent/in-nsw-attunga/`).getData()
		const result = {
			saleMethod: 'Rent',
			state: 'nsw',
			region: 'Attunga'
		};

		expect(data).toEqual(result);
	});

	test('sold-properties/houses-and-units-and-apartments-and-studios-and-townhouses-and-land-and-villas-and-rural-in-vic-melbourne-with-3-bedrooms-between-50000-and-75000/', () => {
		const data = new CityDataFromListingURL(
			`/sold-properties/houses-and-units-and-apartments-and-studios-and-townhouses-and-land-and-villas-and-rural-in-vic-melbourne-with-3-bedrooms-between-50000-and-75000/`
		).getData()
		const result = {
			saleMethod: 'Sold',
			state: 'vic',
			city: 'Melbourne',
			minPrice: 50000,
			maxPrice: 75000,
			propertyTypes: ['Houses', 'Units', 'Apartments', 'Studios', 'Townhouses', 'Land', 'Villas', 'Rural'],
			bedrooms: 3
		};

		expect(data).toEqual(result);
	});
});

////////////////////////////////////////////////////////////
describe('Get Buy-rent-sold page Data from any listing url', () => {
	test('for-sale/in-vic/', () => {
		const data = new DataFromAnyListingUrl(`for-sale/in-vic/`).getData()
		const result = {
			saleMethod: 'Sale',
			state: 'vic'
		};

		expect(data).toEqual(result);
	});

	test('for-sale/studios-and-townhouses-and-villas-in-vic-richmond-3121-with-1-bedroom-from-50000/', () => {
		const data = new DataFromAnyListingUrl(
			`for-sale/studios-and-townhouses-and-villas-in-vic-richmond-3121-with-1-bedroom-from-50000/`
		).getData()
		const result = {
			saleMethod: 'Sale',
			state: 'vic',
			suburb: 'Richmond',
			postalCode: 3121,
			minPrice: 50000,
			propertyTypes: ['Studios', 'Townhouses', 'Villas'],
			bedrooms: 1
		};

		expect(data).toEqual(result);
	});

	test('for-sale/studios-and-townhouses-and-villas-in-vic-richmond-3121-with-1-bedroom-up-to-75000/', () => {
		const data = new DataFromAnyListingUrl(
			`for-sale/studios-and-townhouses-and-villas-in-vic-richmond-3121-with-1-bedroom-up-to-75000/`
		).getData()
		const result = {
			saleMethod: 'Sale',
			state: 'vic',
			suburb: 'Richmond',
			postalCode: 3121,
			maxPrice: 75000,
			propertyTypes: ['Studios', 'Townhouses', 'Villas'],
			bedrooms: 1
		};

		expect(data).toEqual(result);
	});

	test('for-sale/studios-and-townhouses-and-villas-in-vic-melbourne-with-1-bedroom-up-to-75000/', () => {
		const data = new DataFromAnyListingUrl(
			`for-sale/studios-and-townhouses-and-villas-in-vic-melbourne-with-1-bedroom-up-to-75000/`
		).getData()
		const result = {
			saleMethod: 'Sale',
			state: 'vic',
			city: 'Melbourne',
			maxPrice: 75000,
			propertyTypes: ['Studios', 'Townhouses', 'Villas'],
			bedrooms: 1
		};

		expect(data).toEqual(result);
	});

	test('for-sale/studios-and-townhouses-and-villas-in-vic-inner-west-with-1-bedroom-up-to-75000/', () => {
		const data = new DataFromAnyListingUrl(
			`for-sale/studios-and-townhouses-and-villas-in-vic-inner-west-with-1-bedroom-up-to-75000/`
		).getData()
		const result = {
			saleMethod: 'Sale',
			state: 'vic',
			region: 'Inner West',
			maxPrice: 75000,
			propertyTypes: ['Studios', 'Townhouses', 'Villas'],
			bedrooms: 1
		};

		expect(data).toEqual(result);
	});

	test('for-rent/in-wa-city-beach-6015-from-150-per-week/', () => {
		const data = new DataFromAnyListingUrl(`for-rent/in-wa-city-beach-6015-from-150-per-week/`).getData()
		const result = {
			saleMethod: 'Rent',
			state: 'wa',
			suburb: 'City Beach',
			postalCode: 6015,
			minPrice: 150
		};

		expect(data).toEqual(result);
	});

	test('for-rent/studios-and-townhouses-and-villas-in-vic-richmond-3121-with-1-bedroom-between-5000-and-100000-per-week/', () => {
		const data = new DataFromAnyListingUrl(
			`for-rent/studios-and-townhouses-and-villas-in-vic-richmond-3121-with-1-bedroom-between-5000-and-100000-per-week/`
		).getData()
		const result = {
			saleMethod: 'Rent',
			state: 'vic',
			suburb: 'Richmond',
			postalCode: 3121,
			minPrice: 5000,
			maxPrice: 100000,
			propertyTypes: ['Studios', 'Townhouses', 'Villas'],
			bedrooms: 1
		};

		expect(data).toEqual(result);
	});

	test('for-rent/in-nsw-attunga/', () => {
		const data = new DataFromAnyListingUrl(`for-rent/in-nsw-attunga/`).getData()
		const result = {
			saleMethod: 'Rent',
			state: 'nsw',
			region: 'Attunga'
		};

		expect(data).toEqual(result);
	});

	test('sold-properties/houses-and-units-and-apartments-and-studios-and-townhouses-and-land-and-villas-and-rural-in-vic-melbourne-with-3-bedrooms-between-50000-and-75000/', () => {
		const data = new DataFromAnyListingUrl(
			`/sold-properties/houses-and-units-and-apartments-and-studios-and-townhouses-and-land-and-villas-and-rural-in-vic-melbourne-with-3-bedrooms-between-50000-and-75000/`
		).getData()
		const result = {
			saleMethod: 'Sold',
			state: 'vic',
			city: 'Melbourne',
			minPrice: 50000,
			maxPrice: 75000,
			propertyTypes: ['Houses', 'Units', 'Apartments', 'Studios', 'Townhouses', 'Land', 'Villas', 'Rural'],
			bedrooms: 3
		};

		expect(data).toEqual(result);
	});
});

//////////////////////////////////////////////////////////////////////////////
describe('Get Buy-rent-sold page Url From any listing data', () => {
	test('Get sale state url', () => {
		const data = new UrlFromAnyData({ saleMethod: 'Sale', state: 'vic' }).getUrl()
		const result = `/for-sale/in-vic/`;

		expect(data).toEqual(result);
	});

	test('Get sale city url', () => {
		const data = new UrlFromAnyData({ saleMethod: 'Sale', state: 'VIC', city: 'Mel/born' }).getUrl()
		const result = `/for-sale/in-vic-mel-born/`;

		expect(data).toEqual(result);
	});

	test('Get sale region url', () => {
		const data = new UrlFromAnyData({ saleMethod: 'Sale', state: 'vic', region: 'melborn' }).getUrl()
		const result = `/for-sale/in-vic-melborn/`;

		expect(data).toEqual(result);
	});

	test('Get sale suburb url', () => {
		const data = new UrlFromAnyData({
			saleMethod: 'Sale',
			state: 'vic',
			suburb: 'richmond',
			postalCode: 1234
		}).getUrl()
		const result = `/for-sale/in-vic-richmond-1234/`;

		expect(data).toEqual(result);
	});

	test('Get rent state url', () => {
		const data = new UrlFromAnyData({ saleMethod: 'rent', state: 'vic' }).getUrl()
		const result = `/for-rent/in-vic/`;

		expect(data).toEqual(result);
	});

	test('Get rent city url', () => {
		const data = new UrlFromAnyData({ saleMethod: 'rent', state: 'vic', city: 'melborn' }).getUrl()
		const result = `/for-rent/in-vic-melborn/`;

		expect(data).toEqual(result);
	});

	test('Get rent region url', () => {
		const data = new UrlFromAnyData({ saleMethod: 'rent', state: 'vic', region: 'melborn' }).getUrl()
		const result = `/for-rent/in-vic-melborn/`;

		expect(data).toEqual(result);
	});

	test('Get rent suburb url', () => {
		const data = new UrlFromAnyData({
			saleMethod: 'rent',
			state: 'vic',
			suburb: 'richmond',
			postalCode: 1234
		}).getUrl()
		const result = `/for-rent/in-vic-richmond-1234/`;

		expect(data).toEqual(result);
	});

	test('Get sold state url', () => {
		const data = new UrlFromAnyData({ saleMethod: 'sold', state: 'vic' }).getUrl()
		const result = `/sold-properties/in-vic/`;

		expect(data).toEqual(result);
	});

	test('Get sold city url', () => {
		const data = new UrlFromAnyData({ saleMethod: 'sold', state: 'vic', city: 'melborn' }).getUrl()
		const result = `/sold-properties/in-vic-melborn/`;

		expect(data).toEqual(result);
	});

	test('Get sold region url', () => {
		const data = new UrlFromAnyData({ saleMethod: 'sold', state: 'vic', region: 'melborn' }).getUrl()
		const result = `/sold-properties/in-vic-melborn/`;

		expect(data).toEqual(result);
	});

	test('Get sale filtered suburb url', () => {
		const data = new UrlFromAnyData({
			saleMethod: 'sold',
			state: 'vic',
			suburb: 'richmond',
			postalCode: 1234
		}).getUrl()
		const result = `/sold-properties/in-vic-richmond-1234/`;

		expect(data).toEqual(result);
	});

	test('Get sale suburb url', () => {
		const data = new UrlFromAnyData({
			saleMethod: 'Sale',
			state: 'Vic',
			suburb: 'Richmond',
			postalCode: 3121,
			minPrice: 50000,
			propertyTypes: ['Studios', 'Townhouses', 'Villas'],
			bedrooms: 1
		}).getUrl()
		const result = `/for-sale/studios-and-townhouses-and-villas-in-vic-richmond-3121-with-1-bedroom-from-50000/`;

		expect(data).toEqual(result);
	});

	test('Get rent region url', () => {
		const data = new UrlFromAnyData({
			saleMethod: 'Rent',
			state: 'Nsw',
			region: 'Attunga'
		}).getUrl()
		const result = `/for-rent/in-nsw-attunga/`;

		expect(data).toEqual(result);
	});

	test('Get sold region url', () => {
		const data = new UrlFromAnyData({
			saleMethod: 'Sold',
			state: 'Vic',
			region: 'Melbourne',
			minPrice: 50000,
			maxPrice: 75000,
			propertyTypes: ['Houses', 'Units', 'Apartments', 'Studios', 'Townhouses', 'Land', 'Villas', 'Rural'],
			bedrooms: 3
		}).getUrl()
		const result = `/sold-properties/houses-and-units-and-apartments-and-studios-and-townhouses-and-land-and-villas-and-rural-in-vic-melbourne-with-3-bedrooms-between-50000-and-75000/`;

		expect(data).toEqual(result);
	});

	test('Get sold city url', () => {
		const data = new UrlFromAnyData({
			saleMethod: 'Sold',
			state: 'Vic',
			city: 'Melbourne',
			minPrice: 50000,
			maxPrice: 75000,
			propertyTypes: ['Houses', 'Units', 'Apartments', 'Studios', 'Townhouses', 'Land', 'Villas', 'Rural'],
			bedrooms: 3
		}).getUrl()
		const result = `/sold-properties/houses-and-units-and-apartments-and-studios-and-townhouses-and-land-and-villas-and-rural-in-vic-melbourne-with-3-bedrooms-between-50000-and-75000/`;

		expect(data).toEqual(result);
	});

	test('Get sale with special case city url', () => {
		const data = new UrlFromAnyData({
			saleMethod: 'Sale',
			state: 'Vic',
			region: 'Geelong & Coast'
		}).getUrl()
		const result = `/for-sale/in-vic-geelong-coast/`;

		expect(data).toEqual(result);
	});
});


describe('Buy-rent-sold page Url From listing data', () => {
	test('Get sale state url', () => {
		const data = new UrlFromStateData({ saleMethod: 'Sale', state: 'vic' }).getUrl()
		const result = `/for-sale/in-vic/`;

		expect(data).toEqual(result);
	});

	test('Get sale city url', () => {
		const data = new UrlFromCityData({ saleMethod: 'Sale', state: 'VIC', city: 'Mel/born' }).getUrl()
		const result = `/for-sale/in-vic-mel-born/`;

		expect(data).toEqual(result);
	});

	test('Get sale region url', () => {
		const data = new UrlFromRegionData({ saleMethod: 'Sale', state: 'vic', region: 'melborn' }).getUrl()
		const result = `/for-sale/in-vic-melborn/`;

		expect(data).toEqual(result);
	});

	test('Get sale suburb url', () => {
		const data = new UrlFromSuburbData({
			saleMethod: 'Sale',
			state: 'vic',
			suburb: 'richmond',
			postalCode: 1234
		}).getUrl()
		const result = `/for-sale/in-vic-richmond-1234/`;

		expect(data).toEqual(result);
	});

	test('Get rent state url', () => {
		const data = new UrlFromStateData({ saleMethod: 'rent', state: 'vic' }).getUrl()
		const result = `/for-rent/in-vic/`;

		expect(data).toEqual(result);
	});

	test('Get rent city url', () => {
		const data = new UrlFromCityData({ saleMethod: 'rent', state: 'vic', city: 'melborn' }).getUrl()
		const result = `/for-rent/in-vic-melborn/`;

		expect(data).toEqual(result);
	});

	test('Get rent region url', () => {
		const data = new UrlFromRegionData({ saleMethod: 'rent', state: 'vic', region: 'melborn' }).getUrl()
		const result = `/for-rent/in-vic-melborn/`;

		expect(data).toEqual(result);
	});

	test('Get rent suburb url', () => {
		const data = new UrlFromSuburbData({
			saleMethod: 'rent',
			state: 'vic',
			suburb: 'richmond',
			postalCode: 1234
		}).getUrl()
		const result = `/for-rent/in-vic-richmond-1234/`;

		expect(data).toEqual(result);
	});

	test('Get sold state url', () => {
		const data = new UrlFromStateData({ saleMethod: 'sold', state: 'vic' }).getUrl()
		const result = `/sold-properties/in-vic/`;

		expect(data).toEqual(result);
	});

	test('Get sold city url', () => {
		const data = new UrlFromCityData({ saleMethod: 'sold', state: 'vic', city: 'melborn' }).getUrl()
		const result = `/sold-properties/in-vic-melborn/`;

		expect(data).toEqual(result);
	});

	test('Get sold region url', () => {
		const data = new UrlFromRegionData({ saleMethod: 'sold', state: 'vic', region: 'melborn' }).getUrl()
		const result = `/sold-properties/in-vic-melborn/`;

		expect(data).toEqual(result);
	});

	test('Get sale filtered suburb url', () => {
		const data = new UrlFromSuburbData({
			saleMethod: 'sold',
			state: 'vic',
			suburb: 'richmond',
			postalCode: 1234
		}).getUrl()
		const result = `/sold-properties/in-vic-richmond-1234/`;

		expect(data).toEqual(result);
	});

	test('Get sale suburb url', () => {
		const data = new UrlFromSuburbData({
			saleMethod: 'Sale',
			state: 'Vic',
			suburb: 'Richmond',
			postalCode: 3121,
			minPrice: 50000,
			propertyTypes: ['Studios', 'Townhouses', 'Villas'],
			bedrooms: 1
		}).getUrl()
		const result = `/for-sale/studios-and-townhouses-and-villas-in-vic-richmond-3121-with-1-bedroom-from-50000/`;

		expect(data).toEqual(result);
	});

	test('Get rent region url', () => {
		const data = new UrlFromRegionData({
			saleMethod: 'Rent',
			state: 'Nsw',
			region: 'Attunga'
		}).getUrl()
		const result = `/for-rent/in-nsw-attunga/`;

		expect(data).toEqual(result);
	});

	test('Get sold region url', () => {
		const data = new UrlFromRegionData({
			saleMethod: 'Sold',
			state: 'Vic',
			region: 'Melbourne',
			minPrice: 50000,
			maxPrice: 75000,
			propertyTypes: ['Houses', 'Units', 'Apartments', 'Studios', 'Townhouses', 'Land', 'Villas', 'Rural'],
			bedrooms: 3
		}).getUrl()
		const result = `/sold-properties/houses-and-units-and-apartments-and-studios-and-townhouses-and-land-and-villas-and-rural-in-vic-melbourne-with-3-bedrooms-between-50000-and-75000/`;

		expect(data).toEqual(result);
	});

	test('Get sold city url', () => {
		const data = new UrlFromCityData({
			saleMethod: 'Sold',
			state: 'Vic',
			city: 'Melbourne',
			minPrice: 50000,
			maxPrice: 75000,
			propertyTypes: ['Houses', 'Units', 'Apartments', 'Studios', 'Townhouses', 'Land', 'Villas', 'Rural'],
			bedrooms: 3
		}).getUrl()
		const result = `/sold-properties/houses-and-units-and-apartments-and-studios-and-townhouses-and-land-and-villas-and-rural-in-vic-melbourne-with-3-bedrooms-between-50000-and-75000/`;

		expect(data).toEqual(result);
	});

	test('Get sale with special case city url', () => {
		const data = new UrlFromRegionData({
			saleMethod: 'Sale',
			state: 'Vic',
			region: 'Geelong & Coast'
		}).getUrl()
		const result = `/for-sale/in-vic-geelong-coast/`;

		expect(data).toEqual(result);
	});
});