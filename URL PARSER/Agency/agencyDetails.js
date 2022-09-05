const CaseChange = require("../modules/caseChange.js");

class Agency {
  static getAgencyId(url) {
    return parseInt(url.match(/-(\d+)\//)[1]);
  }

  static getAgencyUrl({ agencyName, suburb, agencyId }) {
    agencyName = CaseChange.toLowerCase(agencyName);
    suburb = CaseChange.toLowerCase(suburb);
    const baseUrl = `https://www.realestateview.com.au/real-estate-agency/`;
    return `${baseUrl}${agencyName}-${suburb}-${agencyId}/`;
  }
}

module.exports = Agency;
