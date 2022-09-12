const CaseChange = require("../utils/caseChange.js");

class Suburb {
  static getDataFromUrl(url) {
    const area = url.match(/for-(.*?)-(.*)-(\d+)/);
    let state = area[1];
    let suburb = area[2];
    state = CaseChange.toUpperCase(state);
    suburb = CaseChange.toUpperCase(suburb);
    const postalCode = +area[3];
    return { state, suburb, postalCode };
  }

  static getUrlFromData({ state, suburb, postalCode }) {
    state = CaseChange.toLowerCase(state);
    suburb = CaseChange.toLowerCase(suburb);
    const baseUrl = `https://www.realestateview.com.au/suburb-profile/`;
    const generatedUrl = `${baseUrl}for-${state}-${suburb}-${postalCode}/`;
    return generatedUrl;
  }
}

module.exports = Suburb;
