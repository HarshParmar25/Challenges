import { UrlType } from './urlType';
describe('UrlType', () => {
	test('should return agency page', () => {
		const data = `https://www.realestateview.com.au/real-estate-agency/rt-edgar-mt-eliza-mount-eliza-26758/`;
		const result = 'agency-detail-page';
		expect(UrlType.getType(data)).toBe(result);
	});

	test('should return agent page', () => {
		const data = `https://www.realestateview.com.au/agent-profile/vicki-sayers-41300/`;
		const result = 'agent-detail-page';
		expect(UrlType.getType(data)).toBe(result);
	});

	test('should return auction page', () => {
		const data = `https://www.realestateview.com.au/sales-and-auction-results/in-vic-barongarook%20west-3249/`;
		const result = 'auction-page';
		expect(UrlType.getType(data)).toBe(result);
	});

	test('should return profile page', () => {
		const data = `https://resi.uatz.view.com.au/lancer-rnd/profile/`;
		const result = 'profile-landing-page';
		expect(UrlType.getType(data)).toBe(result);
	});

	test('rent home page', () => {
		const data = UrlType.getType(`https://www.realestateview.com.au/rental-properties/`);
		const result = `rent-landing-page`;
		expect(data).toEqual(result);
	});

	test(`sold home page`, () => {
		const data = UrlType.getType(`https://www.realestateview.com.au/sold-properties/`);
		const result = `sold-landing-page`;
		expect(data).toEqual(result);
	});

	test('Buy listing page', () => {
		const data = UrlType.getType(`https://www.realestateview.com.au/for-sale/in-wa-city-beach-6015/`);
		const result = `buy-search-result-page`;
		expect(data).toEqual(result);
	});

	test('rent listing page', () => {
		const data = UrlType.getType(`https://www.realestateview.com.au/for-rent/in-wa-city-beach-6015/`);
		const newLocal = `rent-search-result-page`;
		expect(data).toEqual(newLocal);
	});

	test('sold listing page', () => {
		const data = UrlType.getType(`https://www.realestateview.com.au/sold-properties/in-vic-richmond-3121/`);
		const result = `sold-search-result-page`;
		expect(data).toEqual(result);
	});

	test(`buy property details`, () => {
		const data = UrlType.getType(
			`https://www.realestateview.com.au/real-estate/city-beach-wa/property-details-buy-residential-14321503/`
		);
		const newLocal = `buy-property-details`;
		expect(data).toEqual(newLocal);
	});

	test(`rent property details`, () => {
		const data = UrlType.getType(
			`https://www.realestateview.com.au/rental-properties/17a-launceston-avenue-city-beach-wa/property-details-rent-residential-14304540/`
		);
		const result = `rent-property-details`;
		expect(data).toEqual(result);
	});

	test(`sold property details`, () => {
		const data = UrlType.getType(
			`https://www.realestateview.com.au/real-estate/10-clovelly-road-city-beach-wa/property-details-sold-residential-14184858/`
		);
		const result = `sold-property-details`;
		expect(data).toEqual(result);
	});

	test('state profile page', () => {
		const data = UrlType.getType(`https://resi.uatz.view.com.au/lancer-rnd/profile/for-vic/`);
		const result = `state-profile-page`;
		expect(data).toEqual(result);
	});

	test('suburb profile page', () => {
		const data = UrlType.getType(`https://resi.uatz.view.com.au/lancer-rnd/profile/for-vic/melbourne-3000/`);
		const result = `suburb-profile-page`;
		expect(data).toEqual(result);
	});

	test('should return undefined', () => {
		const data = `https://www.realestateview.com.au/`;
		const result = 'unknown';
		expect(UrlType.getType(data)).toBe(result);
	});

	test('city profile page', () => {
		const data = UrlType.getType(`https://resi.uatz.view.com.au/lancer-rnd/profile/for-vic/melbourne-city-1243/`);
		const result = `city-profile-page`;
		expect(data).toEqual(result);
	});

	test('region profile page', () => {
		const data = UrlType.getType(`https://revo.uatz.view.com.au/profile/for-vic/melbourne-region-1234/`);
		const result = `region-profile-page`;
		expect(data).toEqual(result);
	});
});
