const CaseChange = require("../modules/caseChange.js");

class UrlService {
  static getSaleMethod(url) {
    if (url.includes("sale")) return "sale";
    if (url.includes("rent")) return "rent";
    if (url.includes("sold")) return "sold";
  }

  static getArea(url) {
    const trimUrl = url.split(/in-|-with-|-from-|-up-to-|-between-/)[1];
    let result = trimUrl.split("-");
    // result will conatin array of state suburb postalCode or region
    let state = result.shift();
    let postalCode = "";
    let suburb = "";
    let region = "";
    if (+result[result.length - 1]) {
      postalCode = +result.pop();
      suburb = result.join("-");
    } else {
      region = result.join("-");
    }

    return { state, postalCode, suburb, region };
  }

  static getPropertyTypes(url) {
    if (url.indexOf("in-") === 0) return [];
    return url.match(/.+?(?=-in)/)[0].split("-and-");
  }

  static getMinPrice(url) {
    const price = url.match(/-from-(.*)/);
    if (price) return price[1].split("-").slice(0, 1).join("");
    return "";
  }

  static getMaxPrice(url) {
    const price = url.match(/-up-to-(.*)/);
    if (price) return price[1].split("-").slice(0, 1).join("");
    return "";
  }

  static getPriceFilter(url) {
    let maxPrice = this.getMaxPrice(url);
    let minPrice = this.getMinPrice(url);
    if (maxPrice === "" && minPrice === "") {
      const price = url.match(/-between-(.*)/);
      if (price)
        return {
          minPrice: parseFloat(price[1].split("-and-")[0]).toString(),
          maxPrice: parseFloat(price[1].split("-and-")[1]).toString(),
        };
      return { minPrice: "", maxPrice: "" };
    }
    maxPrice;
    return { minPrice, maxPrice };
  }

  static getBedrooms(url) {
    const bedroom = url.match(/-with-(.+?)-/);
    if (bedroom) return +bedroom[1];
    return "";
  }

  static getDataFromUrl(url) {
    const data = url.split("/" || "/?").splice(3);
    let saleMethod = UrlService.getSaleMethod(data[0]);
    let propertyTypes = UrlService.getPropertyTypes(data[1]);
    const bedrooms = UrlService.getBedrooms(data[1]);
    let { minPrice, maxPrice } = UrlService.getPriceFilter(data[1]);
    let { state, postalCode, suburb, region } = UrlService.getArea(data[1]);
    if (minPrice) minPrice = parseFloat(minPrice);
    if (maxPrice) maxPrice = parseFloat(maxPrice);

    saleMethod = CaseChange.toUpperCase(saleMethod);
    propertyTypes = CaseChange.toUpperCaseDataset(propertyTypes);
    state = CaseChange.toUpperCase(state);
    suburb = CaseChange.toUpperCase(suburb);
    region = CaseChange.toUpperCase(region);
    return { saleMethod, state, suburb, postalCode, region, minPrice, maxPrice, propertyTypes, bedrooms };
  }

  static getPriceFilterUrl(data) {
    const { saleMethod, minPrice, maxPrice } = data;
    let priceFilter = "";
    if (minPrice && maxPrice) {
      priceFilter = `-between-${minPrice}-and-${maxPrice}`;
    } else if (minPrice && !maxPrice) {
      priceFilter = `-from-${minPrice}`;
    } else if (!minPrice && maxPrice) {
      priceFilter = `-up-to-${maxPrice}`;
    }

    if (saleMethod.toLowerCase() === "rent" && priceFilter) {
      return `${priceFilter}-per-week`;
    }
    return priceFilter;
  }

  static getBedroomUrl(data) {
    const { bedrooms } = data;
    if (!bedrooms) return "";
    if (bedrooms && +bedrooms === 1) return `-with-${bedrooms}-bedroom`;
    if (bedrooms && +bedrooms > 1) return `-with-${bedrooms}-bedrooms`;
  }

  static getPropertyTypesUrl(data) {
    let { propertyTypes } = data;
    propertyTypes = CaseChange.toLowerCaseDataset(propertyTypes);
    if (propertyTypes.length === 0) return "";
    return propertyTypes.reduce((previousType, currentType) => `${previousType}-and-${currentType}`) + "-";
  }

  static getAreaUrl(data) {
    let { suburb, postalCode, region } = data;
    suburb = CaseChange.toLowerCase(suburb);
    region = CaseChange.toLowerCase(region);
    let area = "";
    if (!region && !postalCode && !suburb) return area;
    region !== "" ? (area = `-${region}`) : (area = `-${suburb}-${postalCode}`);
    return area;
  }

  static getSaleMethodUrl(data) {
    let { saleMethod } = data;
    saleMethod = CaseChange.toLowerCase(saleMethod);
    if (saleMethod === "sale") return "for-sale";
    if (saleMethod === "rent") return "for-rent";
    if (saleMethod === "sold") return "sold-properties";
  }

  static getUrlFromData(data) {
    let { state } = data;
    state = CaseChange.toLowerCase(state);
    const baseUrl = `https://resi.uatz.view.com.au/`;

    const priceFilter = this.getPriceFilterUrl(data);
    const totalBedrooms = this.getBedroomUrl(data);
    const propertyTypesUrl = this.getPropertyTypesUrl(data);
    const area = this.getAreaUrl(data);
    const saleMethodUrl = this.getSaleMethodUrl(data);

    return `${baseUrl}${saleMethodUrl}/${propertyTypesUrl}in-${state}${area}${totalBedrooms}${priceFilter}/`;
  }
}

module.exports = UrlService;
