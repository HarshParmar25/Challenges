class UrlType {
  static getType(url) {
    if (UrlType.isBuyHomePage(url)) return `buy-home-page`;
    if (UrlType.isRentHomePage(url)) return `rent-home-page`;
    if (UrlType.isSoldHomePage(url)) return `sold-home-page`;
    if (UrlType.isBuySearchPage(url)) return `buy-search-page`;
    if (UrlType.isRentSearchPage(url)) return `rent-search-page`;
    if (UrlType.isBuyDetails(url)) return `buy-property-details`;
    if (UrlType.isRentDetails(url)) return `rent-property-details`;
    if (UrlType.isSoldDetails(url)) return `sold-property-details`;
    if (UrlType.isAgencyHomePage(url)) return `agency-home-page`;
    if (UrlType.isAgencySearchPage(url)) return `agency-search-page`;
    if (UrlType.isAgencyDetailsPage(url)) return `agency-details-page`;
    if (UrlType.isAgentProfilePage(url)) return `agent-profile-page`;
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
    return url.includes("property-details-rent") && url.includes("rental-properties");
  }
  static isBuyDetails(url) {
    return url.includes("property-details-buy");
  }

  static isRentSearchPage(url) {
    return url.match(/for-rent\/.*/);
  }

  static isBuySearchPage(url) {
    return url.match(/for-sale\/.*/);
  }

  static isSoldHomePage(url) {
    return url.includes("sold-properties");
  }

  static isRentHomePage(url) {
    return url.includes(`rental-properties`) && !url.includes("property-details-rent");
  }

  static isBuyHomePage(url) {
    return url === `https://www.realestateview.com.au/`;
  }
}

module.exports = UrlType;
