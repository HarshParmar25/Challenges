class UrlType {
  static getType(url) {
    if (UrlType.isBuyHomePage(url)) return `buy-home-page`;
    if (UrlType.isRentHomePage(url)) return `rent-home-page`;
    if (UrlType.isSoldHomePage(url)) return `sold-home-page`;
    if (UrlType.isBuySearchPage(url)) return `buy-search-page`;
    if (UrlType.isRentSearchPage(url)) return `rent-search-page`;
    if (UrlType.isSoldSearchPage(url)) return `sold-search-page`;
    if (UrlType.isBuyDetails(url)) return `buy-property-details`;
    if (UrlType.isRentDetails(url)) return `rent-property-details`;
    if (UrlType.isSoldDetails(url)) return `sold-property-details`;
    if (UrlType.isAgencyHomePage(url)) return `agency-home-page`;
    if (UrlType.isAgencySearchPage(url)) return `agency-search-page`;
    if (UrlType.isAgencyDetailsPage(url)) return `agency-details-page`;
    if (UrlType.isAgentProfilePage(url)) return `agent-profile-page`;
    if (UrlType.isAuctionHomePage(url)) return `auction-home-page`;
    if (UrlType.isAuctionSearchPage(url)) return `auction-search-page`;
    if(UrlType.isSuburbProfilePage(url)) return `suburb-profile-page`;
    return `Unhandled Url!!!`;
  }

  static isSuburbProfilePage(url) {
    return url.includes(`suburb-profile`);
  }

  static isAuctionSearchPage(url) {
    return url.includes(`sales-and-auction-results/in-`);
  }

  static isAuctionHomePage(url) {
    return url.includes(`/sales-and-auction-results`) && !url.includes(`sales-and-auction-results/in-`);
  }

  static isAgentProfilePage(url) {
    return url.includes(`agent-profile`);
  }

  static isAgencyDetailsPage(url) {
    return url.includes(`real-estate-agency`);
  }

  static isAgencyHomePage(url) {
    return url === `https://www.realestateview.com.au/find-agent/`;
  }

  static isAgencySearchPage(url) {
    return url.match(/\/find-agent\/+.*/);
  }

  static isSoldDetails(url) {
    return url.includes("property-details-sold");
  }
  static isRentDetails(url) {
    return url.includes("property-details-rent");
  }
  static isBuyDetails(url) {
    return url.includes("property-details-buy");
  }

  static isSoldSearchPage(url) {
    return url.match(/sold-properties\/.*/);
  }

  static isRentSearchPage(url) {
    return url.match(/for-rent\/.*/);
  }

  static isBuySearchPage(url) {
    return url.match(/for-sale\/.*/);
  }

  static isSoldHomePage(url) {
    return url.match(/sold-properties\/$/);
  }

  static isRentHomePage(url) {
    return url.includes(/rental-properties\/$/);
  }

  static isBuyHomePage(url) {
    return url === `https://www.realestateview.com.au/`;
  }
}

module.exports = UrlType;
