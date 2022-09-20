"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sale = void 0;
const slugify_1 = require("../utils/slugify");
class Sale {
    static getStateUrl(data) {
        let { saleMethod, priceFilter, bedroomFilter, propertyTypesFilter } = this.getFiltersUrl(data);
        saleMethod = (0, slugify_1.slugify)(saleMethod);
        let filters = `${propertyTypesFilter}in-${data.state}${bedroomFilter}${priceFilter}`;
        filters = (0, slugify_1.slugify)(filters);
        return `${this.baseUrl}${saleMethod}/${filters}/`;
    }
    static getRegionUrl(data) {
        let { saleMethod, priceFilter, bedroomFilter, propertyTypesFilter } = this.getFiltersUrl(data);
        saleMethod = (0, slugify_1.slugify)(saleMethod);
        let filters = `${propertyTypesFilter}in-${data.state}-${data.region}${bedroomFilter}${priceFilter}`;
        filters = (0, slugify_1.slugify)(filters);
        return `${this.baseUrl}${saleMethod}/${filters}/`;
    }
    static getCityUrl(data) {
        let { saleMethod, priceFilter, bedroomFilter, propertyTypesFilter } = this.getFiltersUrl(data);
        saleMethod = (0, slugify_1.slugify)(saleMethod);
        let filters = `${propertyTypesFilter}in-${data.state}-${data.city}${bedroomFilter}${priceFilter}`;
        filters = (0, slugify_1.slugify)(filters);
        return `${this.baseUrl}${saleMethod}/${filters}/`;
    }
    static getSuburbUrl(data) {
        let { saleMethod, priceFilter, bedroomFilter, propertyTypesFilter } = this.getFiltersUrl(data);
        saleMethod = (0, slugify_1.slugify)(saleMethod);
        let filters = `${propertyTypesFilter}in-${data.state}-${data.suburb}-${data.postalCode}${bedroomFilter}${priceFilter}`;
        filters = (0, slugify_1.slugify)(filters);
        return `${this.baseUrl}${saleMethod}/${filters}/`;
    }
    static getFiltersUrl(data) {
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
    static getSaleMethodUrl(data) {
        let { saleMethod } = data;
        saleMethod = saleMethod.toLowerCase();
        if (saleMethod === "sale")
            return "for-sale";
        if (saleMethod === "rent")
            return "for-rent";
        if (saleMethod === "sold")
            return "sold-properties";
        throw new Error("Invalid sale method");
    }
    static getPriceFilterUrl(data) {
        const { saleMethod, minPrice, maxPrice } = data;
        let priceFilter = "";
        if (minPrice && maxPrice) {
            priceFilter = `-between-${minPrice}-and-${maxPrice}`;
        }
        else if (minPrice && !maxPrice) {
            priceFilter = `-from-${minPrice}`;
        }
        else if (!minPrice && maxPrice) {
            priceFilter = `-up-to-${maxPrice}`;
        }
        if (saleMethod.toLowerCase() === "rent" && priceFilter) {
            return `${priceFilter}-per-week`;
        }
        return priceFilter;
    }
    static getBedroomUrl(data) {
        const { bedrooms } = data;
        if (bedrooms && bedrooms === 1)
            return `-with-${bedrooms}-bedroom`;
        if (bedrooms && bedrooms > 1)
            return `-with-${bedrooms}-bedrooms`;
        return "";
    }
    static getPropertyTypesUrl(data) {
        let { propertyTypes } = data;
        if (!propertyTypes || propertyTypes.length === 0)
            return "";
        return propertyTypes.reduce((previousType, currentType) => `${previousType}-and-${currentType}`) + "-";
    }
}
exports.Sale = Sale;
Sale.baseUrl = `https://www.realestateview.com.au/`;
