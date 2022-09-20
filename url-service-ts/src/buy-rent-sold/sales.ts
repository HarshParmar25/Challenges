import { slugify } from "../utils/slugify";
import { IStateData, ICityData, IRegionData, ISuburbData, IFiltersData, IFiltersOutput } from "./sales.interface";

export class Sale {
  private static baseUrl = `https://www.realestateview.com.au/`;

  static getStateUrl(data: IStateData): string {
    let { saleMethod, priceFilter, bedroomFilter, propertyTypesFilter } = this.getFiltersUrl(data);

    saleMethod = slugify(saleMethod);

    let filters = `${propertyTypesFilter}in-${data.state}${bedroomFilter}${priceFilter}`;
    filters = slugify(filters);

    return `${this.baseUrl}${saleMethod}/${filters}/`;
  }

  static getRegionUrl(data: IRegionData): string {
    let { saleMethod, priceFilter, bedroomFilter, propertyTypesFilter } = this.getFiltersUrl(data);

    saleMethod = slugify(saleMethod);

    let filters = `${propertyTypesFilter}in-${data.state}-${data.region}${bedroomFilter}${priceFilter}`;
    filters = slugify(filters);

    return `${this.baseUrl}${saleMethod}/${filters}/`;
  }

  static getCityUrl(data: ICityData): string {
    let { saleMethod, priceFilter, bedroomFilter, propertyTypesFilter } = this.getFiltersUrl(data);

    saleMethod = slugify(saleMethod);

    let filters = `${propertyTypesFilter}in-${data.state}-${data.city}${bedroomFilter}${priceFilter}`;
    filters = slugify(filters);

    return `${this.baseUrl}${saleMethod}/${filters}/`;
  }

  static getSuburbUrl(data: ISuburbData): string {
    let { saleMethod, priceFilter, bedroomFilter, propertyTypesFilter } = this.getFiltersUrl(data);

    saleMethod = slugify(saleMethod);

    let filters = `${propertyTypesFilter}in-${data.state}-${data.suburb}-${data.postalCode}${bedroomFilter}${priceFilter}`;
    filters = slugify(filters);

    return `${this.baseUrl}${saleMethod}/${filters}/`;
  }

  private static getFiltersUrl(data: IFiltersData): IFiltersOutput {
    const saleMethod = this.getSaleMethodUrl(data);
    const priceFilter = this.getPriceFilterUrl(data);
    const bedroomFilter = this.getBedroomUrl(data);
    const propertyTypesFilter = this.getPropertyTypesUrl(data);
    return {
      priceFilter,
      bedroomFilter,
      propertyTypesFilter,
      saleMethod,
    };
  }

  static getSaleMethodUrl(data: IFiltersData) {
    let { saleMethod } = data;
    saleMethod = saleMethod.toLowerCase();
    if (saleMethod === "sale") return "for-sale";
    if (saleMethod === "rent") return "for-rent";
    if (saleMethod === "sold") return "sold-properties";
    throw new Error("Invalid sale method");
  }

  private static getPriceFilterUrl(data: IFiltersData): string {
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

  private static getBedroomUrl(data: IFiltersData): string {
    const { bedrooms } = data;
    if (bedrooms && bedrooms === 1) return `-with-${bedrooms}-bedroom`;
    if (bedrooms && bedrooms > 1) return `-with-${bedrooms}-bedrooms`;
    return "";
  }

  private static getPropertyTypesUrl(data: IFiltersData): string {
    let { propertyTypes } = data;
    if (!propertyTypes || propertyTypes.length === 0) return "";
    return propertyTypes.reduce((previousType, currentType) => `${previousType}-and-${currentType}`) + "-";
  }
}
