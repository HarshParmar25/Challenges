import CaseChange from "../utils/CaseChange";
import { IStateData, ICityData, IRegionData, ISuburbData, IFiltersData, IFiltersOutput } from "./sales.interface";

export class Sale {
  private static baseUrl = `https://www.realestateview.com.au/`;

  static getStateUrl(data: IStateData): string {
    data = CaseChange.slugify<IStateData>(data);
    const { saleMethodSlug, priceFilter, bedroomFilter, propertyTypesFilter } = this.getFiltersUrl(data);
    return `${this.baseUrl}${saleMethodSlug}/${propertyTypesFilter}in-${data.state}${bedroomFilter}${priceFilter}/`;
  }

  static getRegionUrl(data: IRegionData): string {
    data = CaseChange.slugify<IRegionData>(data);
    const { saleMethodSlug, priceFilter, bedroomFilter, propertyTypesFilter } = this.getFiltersUrl(data);
    return `${this.baseUrl}${saleMethodSlug}/${propertyTypesFilter}in-${data.state}-${data.region}${bedroomFilter}${priceFilter}/`;
  }

  static getCityUrl(data: ICityData): string {
    data = CaseChange.slugify<ICityData>(data);
    const { saleMethodSlug, priceFilter, bedroomFilter, propertyTypesFilter } = this.getFiltersUrl(data);
    return `${this.baseUrl}${saleMethodSlug}/${propertyTypesFilter}in-${data.state}-${data.city}${bedroomFilter}${priceFilter}/`;
  }

  static getSuburbUrl(data: ISuburbData): string {
    data = CaseChange.slugify<ISuburbData>(data);
    const { saleMethodSlug, priceFilter, bedroomFilter, propertyTypesFilter } = this.getFiltersUrl(data);
    return `${this.baseUrl}${saleMethodSlug}/${propertyTypesFilter}in-${data.state}-${data.suburb}-${data.postalCode}${bedroomFilter}${priceFilter}/`;
  }

  private static getFiltersUrl(data: IFiltersData): IFiltersOutput {
    const saleMethodSlug = this.getSaleMethodUrl(data);
    const priceFilter = this.getPriceFilterUrl(data);
    const bedroomFilter = this.getBedroomUrl(data);
    const propertyTypesFilter = this.getPropertyTypesUrl(data);
    return {
      priceFilter,
      bedroomFilter,
      propertyTypesFilter,
      saleMethodSlug,
    };
  }

  static getSaleMethodUrl(data: IFiltersData) {
    let { saleMethod } = data;
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
