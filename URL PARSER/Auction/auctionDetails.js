const CaseChange = require("../utils/caseChange.js");

class Auction {
  static getAuctionDataFromUrl(url) {
    const decodedUrl = decodeURI(url);
    const area = decodedUrl.match(/in-(.*?)-(.*)-(\d+)/);
    let state = area[1];
    let suburb = area[2];
    state = CaseChange.toUpperCase(state);
    suburb = CaseChange.toUpperCase(suburb);
    const postalCode = +area[3];
    return { state, suburb, postalCode };
  }

  static getAuctionUrlFromData({ state, suburb, postalCode }) {
    state = state.toLowerCase();
    suburb = suburb.toLowerCase();
    const baseUrl = `https://www.realestateview.com.au/sales-and-auction-results/`;
    const generatedUrl = `${baseUrl}in-${state}-${suburb}-${postalCode}/`;
    return encodeURI(generatedUrl);
  }
}

module.exports = Auction;
