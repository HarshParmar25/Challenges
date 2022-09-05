const url0 = `https://resi.uatz.view.com.au/for-sale/in-vic-between-20-and-50/`;
const url1 = `https://resi.uatz.view.com.au/sold-properties/studios-and-townhouses-and-villas-in-vic-richmond-ahme-with-1-bedroom-between-50000-and-100000/`;
const url2 = `https://resi.uatz.view.com.au/for-rent/in-nsw-attunga-2345/`;
const url3 = "https://resi.uatz.view.com.au/for-sale/in-wa-city-beach-6015-up-to-50000/";
const url4 = "https://resi.uatz.view.com.au/for-rent/in-wa-city-beach-6015-from-1200-per-week/";
const url5 = `https://resi.uatz.view.com.au/for-rent/studios-and-townhouses-and-villas-in-vic-richmond-ahme-3121-with-1-bedroom-between-5000-and-100000-per-week/`;
const url6 = `https://resi.uatz.view.com.au/for-rent/in-nsw-attunga/`;
const url7 = `https://resi.uatz.view.com.au/for-sale/houses-and-units-and-apartments-and-studios-and-townhouses-and-land-and-villas-and-rural-in-vic-melbourne-with-3-bedrooms-between-50000-and-75000/`;

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
      postalCode = result.pop();
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
    return { minPrice, maxPrice };
  }

  static getBedrooms(url) {
    const bedroom = url.match(/-with-(.+?)-/);
    if (bedroom) return bedroom[1];
    return "";
  }

  static getDataFromUrl(url) {
    const data = url.split("/" || "/?").splice(3);
    const saleMethod = UrlService.getSaleMethod(data[0]);
    const propertyTypes = UrlService.getPropertyTypes(data[1]);
    const bedrooms = UrlService.getBedrooms(data[1]);
    const { minPrice, maxPrice } = UrlService.getPriceFilter(data[1]);
    const { state, postalCode, suburb, region } = UrlService.getArea(data[1]);
    return { saleMethod, state, suburb, postalCode, region, minPrice, maxPrice, propertyTypes, bedrooms };
  }

  static getPriceFilterUrl(data) {
    const { saleMethod, minPrice, maxPrice } = data;
    let priceFilter = "";
    if (minPrice !== "" && maxPrice !== "") {
      priceFilter = `-between-${minPrice}-and-${maxPrice}`;
    } else if (minPrice !== "" && maxPrice === "") {
      priceFilter = `-from-${minPrice}`;
    } else if (minPrice === "" && maxPrice !== "") {
      priceFilter = `-up-to-${maxPrice}`;
    }

    if (saleMethod === "rent" && priceFilter !== "") {
      return `${priceFilter}-per-week`;
    }
    return priceFilter;
  }

  static getBedroomUrl(data) {
    const { bedrooms } = data;
    if (bedrooms === "") return "";
    if (bedrooms !== "" && +bedrooms === 1) return `-with-${bedrooms}-bedroom`;
    if (bedrooms !== "" && +bedrooms > 1) return `-with-${bedrooms}-bedrooms`;
  }

  static getPropertyTypesUrl(data) {
    const { propertyTypes } = data;
    if (propertyTypes.length === 0) return "";
    return propertyTypes.reduce((previousType, currentType) => `${previousType}-and-${currentType}`) + "-";
  }

  static getAreaUrl(data) {
    const { suburb, postalCode, region } = data;
    let area = "";
    if (region === "" && postalCode === "" && suburb === "") return area;
    region !== "" ? (area = `-${region}`) : (area = `-${suburb}-${postalCode}`);
    return area;
  }

  static getSaleMethodUrl(data) {
    const { saleMethod } = data;
    if (saleMethod === "sale") return "for-sale";
    if (saleMethod === "rent") return "for-rent";
    if (saleMethod === "sold") return "sold-properties";
  }

  static getUrlFromData(data) {
    const { state } = data;
    const baseUrl = `https://resi.uatz.view.com.au/`;

    const priceFilter = this.getPriceFilterUrl(data);
    const totalBedrooms = this.getBedroomUrl(data);
    const propertyTypesUrl = this.getPropertyTypesUrl(data);
    const area = this.getAreaUrl(data);
    const saleMethodUrl = this.getSaleMethodUrl(data);

    return `${baseUrl}${saleMethodUrl}/${propertyTypesUrl}in-${state}${area}${totalBedrooms}${priceFilter}/`;
  }
}
const testUrl = url5;
const result = UrlService.getDataFromUrl(testUrl);
result;

const urlFromData = UrlService.getUrlFromData(result);
urlFromData;

module.exports = UrlService;
