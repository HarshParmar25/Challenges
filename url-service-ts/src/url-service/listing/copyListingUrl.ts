import UtilsService from "../../utils/index";
import { IStateData,
	IRegionData,
	ICityData,
	ISuburbData,
	IFiltersData,
	IFiltersOutput,
	IDataFromUrl,
	ILocation,
	IPropertyDetails,
	IPropertyDetailsFromUrl } from "./listingUrl.interface";

enum ESaleMethodSlug {
  sale = "for-sale",
  rent = "for-rent",
  sold = "sold-properties",
}

abstract class DataFromListingURL {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  getData = () => {
    const data = this.removeFirstSlashAndSplitOnSlash(this.url);
    const filters = this.getSalePropertyBedroomAndPriceHelper(data);

    const locationData = this.getLocation(data[1]);

    const result = {
      ...filters,
      ...locationData
    };

    return UtilsService.removeEmptyValues<ICityData>(result);
  };

  private cities = ["Melbourne", "Hobart", "Darwin", "Adelaide", "Perth", "Brisbane", "Canberra"];

  private getSaleMethod(url: string): string {
    let saleMethod = "";
    if (url === ESaleMethodSlug.sale) {
      saleMethod = "sale";
    }
    if (url === ESaleMethodSlug.rent) {
      saleMethod = "rent";
    }
    if (url === ESaleMethodSlug.sold) {
      saleMethod = "sold";
    }
    return UtilsService.slugToName(saleMethod);
  }

  protected getLocationData(url: string): ILocation {
    const state = this.getStateData(url);
    let region = this.getRegionData(url);
    let city = this.getCityData(url);
    const { suburb, postalCode } = this.getSuburbData(url);
    if (postalCode) {
      city = "";
      region = "";
    }
    return {
      state,
      region,
      city,
      suburb,
      postalCode,
    };
  }

  private getPropertyTypes(url: string): string[] {
    const propertyTypes: string[] = [];
    if (url.indexOf("in-") === 0) {
      return propertyTypes;
    }

    const propertyTypesSlug = url.match(/.+?(?=-in-)/);
    if (propertyTypesSlug) {
      propertyTypesSlug[0].split("-and-").forEach((propertyType) => {
        propertyTypes.push(UtilsService.slugToName(propertyType));
      });
    }
    return propertyTypes;
  }

  private getMinPrice(url: string) {
    const price = url.match(/-from-(.*)/);
    if (price) {
      const minPrice = price[1].split("-").slice(0, 1).join("");
      return parseInt(minPrice);
    }
    return "";
  }

  private getMaxPrice(url: string) {
    const price = url.match(/-up-to-(.*)/);
    if (price) {
      const maxPrice = price[1].split("-").slice(0, 1).join("");
      return parseInt(maxPrice);
    }
    return "";
  }

  private getPriceFilter(url: string) {
    const maxPrice = this.getMaxPrice(url);
    const minPrice = this.getMinPrice(url);
    if (maxPrice === "" && minPrice === "") {
      const price = url.match(/-between-(.*)/);
      if (price) {
        return {
          minPrice: parseInt(price[1].split("-and-")[0]),
          maxPrice: parseInt(price[1].split("-and-")[1]),
        };
      }
      return { minPrice: "", maxPrice: "" };
    }
    return { minPrice, maxPrice };
  }

  private getBedrooms(url: string) {
    const bedroom = url.match(/-with-(.+?)-/);
    if (bedroom) {
      return parseInt(bedroom[1]);
    }
    return "";
  }

  private getSalePropertyBedroomAndPriceHelper(data: string[]) {
    const saleMethod = this.getSaleMethod(data[0]);
    const propertyTypes = this.getPropertyTypes(data[1]);
    const bedrooms = this.getBedrooms(data[1]);
    const { minPrice, maxPrice } = this.getPriceFilter(data[1]);
    return { saleMethod, propertyTypes, bedrooms, minPrice, maxPrice };
  }

  private removeFirstSlashAndSplitOnSlash(url: string) {
    const data = url.split("/" || "/?");
    if (!data[0]) {
      data.shift();
    }
    return data;
  }

  protected getStateData(url: string): string {
    const stateSlug = url.match(/in-(\w+)/);
    if (stateSlug) {
      return stateSlug[1];
    }
    return "";
  }

  protected getSuburbData(url: string) {
    const trimUrl = this.getRawLocationData(url);
    const postalCode = parseInt(trimUrl[trimUrl.length - 1]);

    if (!postalCode) {
      return { suburb: "", postalCode: "" };
    }

    let suburb = trimUrl.slice(0, trimUrl.length - 1).join("-");

    suburb = UtilsService.slugToName(suburb);

    return { suburb, postalCode };
  }

  protected getRegionData(url: string) {
    const trimUrl = this.getRawLocationData(url);
    const region = trimUrl.join(" ");
    if (!this.cities.find((c) => c.toLowerCase() === region.toLowerCase())) {
      return UtilsService.slugToName(region);
    }
    return "";
  }

  protected getCityData(url: string) {
    const trimUrl = this.getRawLocationData(url);
    const city = trimUrl.join(" ");
    if (this.cities.find((c) => c.toLowerCase() === city.toLowerCase())) {
      return UtilsService.slugToName(city);
    }
    return "";
  }

  private getRawLocationData(url: string) {
    return url
      .split(/in-|-with-|-from-|-up-to-|-between-/)[1]
      .split("-")
      .splice(1);
  }

  abstract getLocation(url: string): {
    state?: string;
    city?: string;
    region?: string;
    suburb?: string;
    postalCode?: number | string;
  };
}


export class StateDataFromListingURL extends DataFromListingURL {
  getLocation(url: string) {
    const state = this.getStateData(url);
    return { state };
  }
}

export class SuburbDataFromListingURL extends DataFromListingURL {
 getLocation(url: string) {
    const state = this.getStateData(url);
    const { suburb, postalCode } = this.getSuburbData(url);
    return { state, suburb, postalCode };
  }
}

export class CityDataFromListingURL extends DataFromListingURL {
  getLocation(url: string) {
    const state = this.getStateData(url);
    const city = this.getCityData(url);
    return { state, city };
  }
}

export class RegionDataFromListingURL extends DataFromListingURL {
  getLocation(url: string) {
    const state = this.getStateData(url);
    const region = this.getRegionData(url);
    return { state, region };
  }
}

export class DataFromAnyListingUrl extends DataFromListingURL {
  getLocation(url: string) {
    const data = this.getLocationData(url)
    return data;
  }
}


abstract class UrlFromListingData{
  private baseUrl = `/`;

  data:IDataFromUrl;

  constructor(data:IDataFromUrl) {
    this.data = data;
  }

	getUrl= () => {
		const { saleMethod, priceFilter, bedroomFilter, propertyTypesFilter } = this.getFilterSlugs(this.data);
    const location = this.getLocationSlug(this.data);
		let filters = `${propertyTypesFilter}in-${location}${bedroomFilter}${priceFilter}`;
		filters = UtilsService.slugify(filters);

		return `${this.baseUrl}${saleMethod}/${filters}/`;
	}                 

  	private getFilterSlugs(data: IFiltersData): IFiltersOutput {
		const saleMethod = this.getSaleMethodSlug(data);
		const priceFilter = this.getPriceFilterSlug(data);
		const bedroomFilter = this.getBedroomSlug(data);
		const propertyTypesFilter = this.getPropertyTypesSlug(data);
		return {
			priceFilter,
			bedroomFilter,
			propertyTypesFilter,
			saleMethod
		};
	}

	private getSaleMethodSlug(data: IFiltersData) {
		let { saleMethod } = data;
		saleMethod = UtilsService.slugify(saleMethod);
		let saleMethodSlug = '';

		switch (saleMethod) {
			case 'sale':
				saleMethodSlug = ESaleMethodSlug.sale;
				break;
			case 'rent':
				saleMethodSlug = ESaleMethodSlug.rent;
				break;
			case 'sold':
				saleMethodSlug = ESaleMethodSlug.sold;
				break;
		}
		return saleMethodSlug;
	}

	private getPriceFilterSlug(data: IFiltersData): string {
		const { saleMethod, minPrice, maxPrice } = data;
		let priceFilter = '';
		if (minPrice && maxPrice) {
			priceFilter = `-between-${minPrice}-and-${maxPrice}`;
		} else if (minPrice && !maxPrice) {
			priceFilter = `-from-${minPrice}`;
		} else if (!minPrice && maxPrice) {
			priceFilter = `-up-to-${maxPrice}`;
		}

		if (saleMethod.toLowerCase() === 'rent' && priceFilter) {
			return `${priceFilter}-per-week`;
		}
		return priceFilter;
	}

	private getBedroomSlug(data: IFiltersData): string {
		const { bedrooms } = data;
		if (!bedrooms) {
			return '';
		}
		if (bedrooms === 1) {
			return `-with-${bedrooms}-bedroom`;
		}
		if (bedrooms > 1) {
			return `-with-${bedrooms}-bedrooms`;
		}
		return '';
	}

	private getPropertyTypesSlug(data: IFiltersData): string {
		const { propertyTypes } = data;
		if (!propertyTypes || propertyTypes.length === 0) {
			return '';
		}
		const propertyTypesSlug = `${propertyTypes.reduce(
			(previousType, currentType) => `${previousType}-and-${currentType}`
		)}-`;
		return UtilsService.slugify(propertyTypesSlug);
	}

  abstract getLocationSlug(data:ILocation): string;
}

export class UrlFromSuburbData extends UrlFromListingData {
  getLocationSlug(data:ISuburbData) {
    const { suburb, state, postalCode } = data;
    return `${state}-${suburb}-${postalCode}`;
  }
}

export class UrlFromCityData extends UrlFromListingData {
  getLocationSlug(data:ICityData) {
    const { city, state } = data;
    return `${state}-${city}`;
  }
}

export class UrlFromRegionData extends UrlFromListingData {
  getLocationSlug(data:IRegionData) {
    const { region, state } = data;
    return `${state}-${region}`;
  }
}

export class UrlFromStateData extends UrlFromListingData {
  getLocationSlug(data:IStateData) {
    const { state } = data;
    return `${state}`;
  }
}

export class UrlFromAnyData extends UrlFromListingData {
  getLocationSlug(data:ILocation) {
    const { state, city, region, suburb, postalCode } = data;
    if (suburb) {
      return `${state}-${suburb}-${postalCode}`;
    }
    if (city) {
      return `${state}-${city}`;
    }
    if (region) {
      return `${state}-${region}`;
    }
    return `${state}`;
  }
}
