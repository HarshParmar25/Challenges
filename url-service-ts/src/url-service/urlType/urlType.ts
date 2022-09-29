export enum EPageType {
  BuyLanding = "buy-landing-page",
  SoldLanding = "sold-landing-page",
  RentLanding = "rent-landing-page",
  SoldSearchResult = "sold-search-result-page",
  RentSearchResult = "rent-search-result-page",
  BuySearchResult = "buy-search-result-page",
  SoldPropertyDetail = "sold-property-details",
  RentPropertyDetail = "rent-property-details",
  BuyPropertyDetail = "buy-property-details",
  ProfileLandingPage = "profile-landing-page",
  StateProfile = "state-profile-page",
  CityProfile = "city-profile-page",
  RegionProfile = "region-profile-page",
  SuburbProfile = "suburb-profile-page",
  FindAgentLanding = "find-agent-landing-page",
  AgentDetail = "agent-detail-page",
  AgencySearchResult = "agency-search-result-page",
  AgencyDetail = "agency-detail-page",
  AuctionLanding = "auction-landing-page",
  AuctionSearchResult = "auction-search-result-page",
  PriceEstimatorLanding = "price-estimator-landing-page",
  PriceEstimatorResult = "price-estimator-result-page",
}
export class UrlType {
  static getType(url: string) {
    let urlType = "";
    switch (true) {
      case UrlType.isRentLandingPage(url):
        urlType = EPageType.RentLanding;
        break;
      case UrlType.isSoldLandingPage(url):
        urlType = EPageType.SoldLanding;
        break;
      case UrlType.isBuySearchResultPage(url):
        urlType = EPageType.BuySearchResult;
        break;
      case UrlType.isRentSearchResultPage(url):
        urlType = EPageType.RentSearchResult;
        break;
      case UrlType.isSoldSearchResultPage(url):
        urlType = EPageType.SoldSearchResult;
        break;
      case UrlType.isBuyPropertyDetails(url):
        urlType = EPageType.BuyPropertyDetail;
        break;
      case UrlType.isRentPropertyDetails(url):
        urlType = EPageType.RentPropertyDetail;
        break;
      case UrlType.isSoldPropertyDetails(url):
        urlType = EPageType.SoldPropertyDetail;
        break;

      ///////////////////////////////////////////
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
      case UrlType.isAuctionSearchResultUrl(url):
        urlType = EPageType.AuctionSearchResult;
        break;
      default:
        urlType = "unknown";
        break;
    }
    return urlType;
  }

  static isBuyLandingPage(url: string) {
    return url === `https://www.realestateview.com.au/`;
  }

  static isRentLandingPage(url: string) {
    if (url.match(/rental-properties\/?$/)) {
      return true;
    }
    return false;
  }

  static isSoldLandingPage(url: string) {
    if (url.match(/sold-properties\/?$/)) {
      return true;
    }
    return false;
  }

  static isBuySearchResultPage(url: string) {
    if (url.match(/for-sale\/.*/)) {
      return true;
    }
    return false;
  }

  static isRentSearchResultPage(url: string) {
    if (url.match(/for-rent\/.*/)) {
      return true;
    }
    return false;
  }

  static isSoldSearchResultPage(url: string) {
    if (url.match(/sold-properties\/.*/)) {
      return true;
    }
    return false;
  }

  static isBuyPropertyDetails(url: string) {
    return url.includes("property-details-buy");
  }

  static isRentPropertyDetails(url: string) {
    return url.includes("property-details-rent");
  }

  static isSoldPropertyDetails(url: string) {
    return url.includes("property-details-sold");
  }

  //////////////////////////////////////////////////////
  static isProfileLandingUrl(url: string) {
    if (url.match(/profile\/?$/)) {
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

  static isAuctionSearchResultUrl(url: string) {
    return url.includes("sales-and-auction-results/in-");
  }

  static isAgentUrl(url: string) {
    return url.includes("agent-profile");
  }

  static isAgencyUrl(url: string) {
    return url.includes("real-estate-agency");
  }
}
