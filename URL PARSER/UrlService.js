const UrlType = require("./url-type/url-type.js");
const Sales = require("./Sales/sales.js");
const Listing = require("./Listing/listingDetails.js");
const Agency = require("./Agency/agencyDetails.js");
const Agent = require("./Agent/agentDetails.js");
const Auction = require("./Auction/auctionDetails.js");
const Suburb = require("./Suburb-profile/suburb-profile.js");

class UrlService {
  static pageType(url) {
    return UrlType.getType(url);
  }

  static getDataFromUrl(url) {
    if (UrlService.isSaleSearch(url)) return Sales.getDataFromUrl(url);

    if (UrlService.isSaleDetails(url)) return Listing.getDataFromUrl(url);

    if (UrlType.isAgencyDetailsPage(url)) return Agency.getAgencyId(url);

    if (UrlType.isAgentProfilePage(url)) return Agent.getAgentData(url);

    if (UrlType.isAuctionSearchPage(url)) return Auction.getAuctionDataFromUrl(url);

    if (UrlType.isSuburbProfilePage(url)) return Suburb.getDataFromUrl(url);

    return `Unhandled Url!!!`;
  }

  static isSaleDetails(url) {
    return UrlType.isBuyDetails(url) || UrlType.isRentDetails(url) || UrlType.isSoldDetails(url);
  }

  static isSaleSearch(url) {
    return UrlType.isBuySearchPage(url) || UrlType.isRentSearchPage(url) || UrlType.isSoldSearchPage(url);
  }

  // data = {saleMethod,state,suburb,postalCode,region,minPrice,maxPrice,propertyTypes,  bedrooms,}
  static getSaleSearchUrl(data) {
    return Sales.getUrlFromData(data);
  }

  // data = { saleMethod, listingId, address, suburb, state };
  static getUrlForListingDetails(data) {
    return Listing.getUrlFromListingData(data);
  }

  // data = { agencyName, suburb, agencyId }
  static getAgencyUrl(data) {
    return Agency.getAgencyUrl(data);
  }

  // data = { agentName, agentId };
  static getAgentUrl(data) {
    return Agent.getAgentUrl(data);
  }

  // data = { state, suburb, postalCode };
  static getAgentUrl(data) {
    return Agent.getAgentUrl(data);
  }

  // data = { state, suburb, postalCode };
  static getSuburbProfileUrl(data) {
    return Suburb.getUrlFromData(data);
  }
}

console.log(
  UrlService.getSaleSearchUrl({
    saleMethod: "Sale",
    state: "Vic",
    suburb: "",
    postalCode: "",
    region: "",
    minPrice: "",
    maxPrice: 5000,
    propertyTypes: [],
    bedrooms: "",
  })
);
