enum EPageType {
	ProfileLandingPage = 'profile-landing-page',
	StateProfile = 'state-profile-page',
	CityProfile = 'city-profile-page',
	RegionProfile = 'region-profile-page',
	SuburbProfile = 'suburb-profile-page',
	AgentDetail = 'agent-detail-page',
	AgencyDetail = 'agency-detail-page',
	Auction = 'auction-page',
	/*
	AuctionSearchResultPage
	AuctionLandingPage
	FindAgentLandingPage

	 */
	SoldLanding = 'sold-landing-page',
	RentLanding = 'rent-landing-page',
	SoldPropertyDetail = 'sold-property-details',
	RentPropertyDetail = 'rent-property-details',
	BuyPropertyDetail = 'buy-property-details',
	SoldSearchResult = 'sold-search-result-page',
	RentSearchResult = 'rent-search-result-page',
	BuySearchResult = 'buy-search-result-page'
}
export class UrlType {
	static getType(url: string) {
		let urlType = '';
		switch (true) {
			case UrlType.isStateProfile(url):
				urlType = EPageType.StateProfile;
				break;
			case UrlType.isCityProfile(url):
				urlType = EPageType.CityProfile;
				break;
			case UrlType.isRegionProfile(url):
				urlType = EPageType.RegionProfile;
				break;
			case UrlType.isSuburbProfile(url):
				urlType = EPageType.SuburbProfile;
				break;
			case UrlType.isProfileLandingUrl(url):
				urlType = EPageType.ProfileLandingPage;
				break;
			case UrlType.isAgentUrl(url):
				urlType = EPageType.AgentDetail;
				break;
			case UrlType.isAgencyUrl(url):
				urlType = EPageType.AgencyDetail;
				break;
			case UrlType.isAuctionUrl(url):
				urlType = EPageType.Auction;
				break;
			case UrlType.isSoldHomePage(url):
				urlType = EPageType.SoldLanding;
				break;
			case UrlType.isRentHomePage(url):
				urlType = EPageType.RentLanding;
				break;
			case UrlType.isSoldPropertyDetails(url):
				urlType = EPageType.SoldPropertyDetail;
				break;
			case UrlType.isRentPropertyDetails(url):
				urlType = EPageType.RentPropertyDetail;
				break;
			case UrlType.isBuyPropertyDetails(url):
				urlType = EPageType.BuyPropertyDetail;
				break;
			case UrlType.isSoldListingPage(url):
				urlType = EPageType.SoldSearchResult;
				break;
			case UrlType.isRentListingPage(url):
				urlType = EPageType.RentSearchResult;
				break;
			case UrlType.isBuyListingPage(url):
				urlType = EPageType.BuySearchResult;
				break;
			default:
				urlType = 'unknown';
				break;
		}
		return urlType;
	}

	static isProfileLandingUrl(url: string) {
		if(url.match(/profile\/?$/)){
			return true;
		}
		return false;
	}

	static isStateProfile(url: string) {
		if (url.match(/profile\/for-\w+\/?$/)) {
			return true;
		}
		return false;
	}

	static isCityProfile(url: string) {
		if (url.includes(`profile/for-`) && url.match(/.*-city-\d+\/?$/g)) {
			return true;
		}
		return false;
	}

	static isRegionProfile(url: string) {
		if (url.includes(`profile/for-`) && url.match(/.*-region-\d+\/?$/g)) {
			return true;
		}
		return false;
	}

	static isSuburbProfile(url: string) {
		if (
			url.includes(`profile/for-`) &&
			url.match(/-\d+\/?$/g) &&
			!url.includes(`-city-`) &&
			!url.includes(`-region-`)
		) {
			return true;
		}
		return false;
	}

	static isAuctionUrl(url: string) {
		return url.includes('sales-and-auction-results');
	}

	static isAgentUrl(url: string) {
		return url.includes('agent-profile');
	}

	static isAgencyUrl(url: string) {
		return url.includes('real-estate-agency');
	}

	static isSoldPropertyDetails(url: string) {
		return url.includes('property-details-sold');
	}

	static isRentPropertyDetails(url: string) {
		return url.includes('property-details-rent');
	}

	static isBuyPropertyDetails(url: string) {
		return url.includes('property-details-buy');
	}

	static isSoldListingPage(url: string) {
		if (url.match(/sold-properties\/.*/)) {
			return true;
		}
		return false;
	}

	static isRentListingPage(url: string) {
		if (url.match(/for-rent\/.*/)) {
			return true;
		}
		return false;
	}

	static isBuyListingPage(url: string) {
		if (url.match(/for-sale\/.*/)) {
			return true;
		}
		return false;
	}

	static isSoldHomePage(url: string) {
		if (url.match(/sold-properties\/?$/)) {
			return true;
		}
		return false;
	}

	static isRentHomePage(url: string) {
		if (url.match(/rental-properties\/?$/)) {
			return true;
		}
		return false;
	}
}
