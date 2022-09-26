// const CaseChange = require("../utils/caseChange.js");

class Listing {
  /*  static getArea(url) {
    let slug = url;
    let state = url.match(/(\w+)$/g);
    state
    return { slug, state };
  }

  static getSaleMethod(url) {
    if (url.includes("-buy-")) return "buy";
    if (url.includes("-rent-")) return "rent";
    if (url.includes("-sold-")) return "sold";
  }

  static getlistingId(url) {
    const r = url.match(/(\d+)/g);
    r
    return +url.match(/(\d+)/g);
  }

  static getListingDataFromUrl(url) {
    const data = url.split("/" || "/?");
    if (!data[0]) data.shift();
    let saleMethod = this.getSaleMethod(data[1]);
    const listingId = this.getlistingId(data[1]);
    let { slug, state } = this.getArea(data[0]);
    return { saleMethod, listingId, slug, state };
  }

  static getUrlFromListingData({ saleMethod, listingId, address, suburb, state }) {
    saleMethod = CaseChange.toLowerCase(saleMethod);
    address = CaseChange.toLowerCase(address);
    suburb = CaseChange.toLowerCase(suburb);
    state = CaseChange.toLowerCase(state);
    let baseUrl = `https://www.realestateview.com.au/real-estate/`;
    if (saleMethod === "rent") baseUrl = `https://www.realestateview.com.au/rental-properties/`;
    let slug = `${address}-${suburb}-${state}`.replace(/\/|\s/g, "-");
    return `${baseUrl}${slug}/property-details-${saleMethod}-residential-${listingId}/`;
  } */

  // static getAreaForPropertyDetails(url) {
  //   const slug = url;
  //   const stateSlug = url.match(/(\w+)$/g);
  //   const state = stateSlug ? stateSlug[0] : "";
  //   return { slug, state };
  // }

  // static getSaleMethodForPropertyDetails(url) {
  //   if (url.includes("-buy-")) return "buy";
  //   if (url.includes("-rent-")) return "rent";
  //   if (url.includes("-sold-")) return "sold";
  //   throw new Error("Invalid sale method");
  // }

  // static getlistingId(url) {
  //   const listingIdslug = url.match(/(\d+)/g);
  //   const listingId = listingIdslug ? Number(listingIdslug[0]) : "";
  //   return listingId;
  // }

  // static getPropertyDetailsFromUrl(url) {
  //   const data = url.split("/" || "/?");
  //   if (!data[0]) data.shift();
  //   const saleMethod = this.getSaleMethodForPropertyDetails(data[1]);
  //   const listingId = this.getlistingId(data[1]);
  //   const { slug, state } = this.getAreaForPropertyDetails(data[0]);
  //   return { saleMethod, listingId, slug, state };
  // }

  // static getUrlFromPropertyDetails({ saleMethod, listingId, address, suburb, state }) {
  //   let baseUrl = `https://www.realestateview.com.au/real-estate/`;
  //   if (saleMethod.toLowerCase() === "rent") baseUrl = `https://www.realestateview.com.au/rental-properties/`;
  //   const slug = `${address}-${suburb}-${state}`.replace(/\/|\s/g, "-");
  //   return `${baseUrl}${slug}/property-details-${saleMethod}-residential-${listingId}/`;
  // }

  static getStateData(url) {
    // const data = url.split("/" || "/?");
    // data
    // let state = url.split(/in-|-with-|-from-|-up-to-|-between-/)[1];
    // state = state.match(/(\w+)/g).join("");
    // state;
    // if (state) return state[1];
    // state;
    // return "";

    const state = url.match(/in-(\w+)/);
    state
  }

  static getSurburbData(url) {
    const trimUrl = url
      .split(/in-|-with-|-from-|-up-to-|-between-/)[1]
      .split("-")
      .splice(1);
    const postalCode = trimUrl[trimUrl.length - 1];
    const suburb = trimUrl.slice(0, trimUrl.length - 1).join("-");
    return { suburb, postalCode };
  }

  static cities = ["Melbourne", "Hobart", "Darwin", "Adelaide", "Perth", "Brisbane", "Canberra"];
  static getRegionData(url) {
    const trimUrl = url
      .split(/in-|-with-|-from-|-up-to-|-between-/)[1]
      .split("-")
      .splice(1);
    const region = trimUrl.join(" ");
    if (!this.cities.find((c) => c.toLowerCase() === region.toLowerCase())) return region;
    return "";
  }

  static getCityData(url) {
    const trimUrl = url
      .split(/in-|-with-|-from-|-up-to-|-between-/)[1]
      .split("-")
      .splice(1);
    const city = trimUrl.join(" ");
    if (this.cities.find((c) => c.toLowerCase() === city.toLowerCase())) return city;
    return "";
  }
}

// module.exports = Listing;

const r = Listing.getStateData(`for-sale/in-vic/`);
r;

/* const trimUrl = url.split(/in-|-with-|-from-|-up-to-|-between-/)[1];
		const result = trimUrl.split('-');
		// result will conatin array of state ,suburb-postalCode or region/city
		let postalCode: string | number = '';
		let suburb = '';
		let region = '';
		let city = '';
		const state = result.shift() || '';
		if (parseInt(result[result.length - 1])) {
			const postCode = result.pop() as string;
			postalCode = parseInt(postCode);
			suburb = result.join('-');
			suburb = UtilsService.slugToName(suburb);
		} else {
			const slug = result.join('-');
			if (this.cities.find((city) => city.toLowerCase() === slug)) {
				city = UtilsService.slugToName(slug);
			} else {
				region = UtilsService.slugToName(slug);
			}
		}

		return { state, postalCode, suburb, region, city }; */
