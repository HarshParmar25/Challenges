import UtilsService from "../../utils/index";
import { UrlType } from "../urlType/urlType";
import { IStateProfile, ICityProfile, IRegionProfile, ISuburbProfile, ILocationProfile } from "./profileUrl.interface";

abstract class ProfileUrlFromData {
  data: ILocationProfile;

  constructor(data: ILocationProfile) {
    this.data = data;
  }

  private static baseUrl = "/profile/";

  getUrl = (): string => {
    let state = `for-${this.data.state}`;
    state = UtilsService.slugify(state);
    let location = this.getLocation(this.data);
    return `${ProfileUrlFromData.baseUrl}${state}/${location}`;
  };

  abstract getLocation(data: ILocationProfile): string;
}

class UrlFromProfileDataWithState extends ProfileUrlFromData {
  getLocation = (): string => {
    return "";
  };
}

class UrlFromProfileDataWithCity extends ProfileUrlFromData {
  getLocation = (data: ICityProfile): string => {
    const city = UtilsService.slugify(data.city);
    return `${city}-city-${data.cityId}/`;
  };
}

class UrlFromProfileDataWithRegion extends ProfileUrlFromData {
  getLocation = (data: IRegionProfile): string => {
    const region = UtilsService.slugify(data.region);
    return `${region}-region-${data.regionId}/`;
  };
}

class UrlFromProfileDataWithSuburb extends ProfileUrlFromData {
  getLocation = (data: ISuburbProfile): string => {
    const suburb = UtilsService.slugify(data.suburb);
    return `${suburb}-${data.postalCode}/`;
  };
}

class UrlFromProfileData extends ProfileUrlFromData {
  getLocation = (data: ILocationProfile): string => {
    if (data.city && data.cityId) {
      return new UrlFromProfileDataWithCity(data).getLocation(data as ICityProfile);
    } else if (data.region && data.regionId) {
      return new UrlFromProfileDataWithRegion(data).getLocation(data as IRegionProfile);
    } else if (data.suburb && data.postalCode) {
      return new UrlFromProfileDataWithSuburb(data).getLocation(data as ISuburbProfile);
    } else {
      return new UrlFromProfileDataWithState(data).getLocation();
    }
  };
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

class Profile {
  private static baseUrl = "/profile/";

  static getBaseUrl(): string {
    return this.baseUrl;
  }

  static getUrlFromProfileDataWithState(data: IStateProfile): string {
    let state = `for-${data.state}`;
    state = UtilsService.slugify(state);
    return `${this.baseUrl}${state}/`;
  }

  static getUrlFromProfileDataWithCity(data: ICityProfile): string {
    let state = `for-${data.state}`;
    state = UtilsService.slugify(state);

    let location = `${data.city}-city-${data.cityId}`;
    location = UtilsService.slugify(location);

    return `${this.baseUrl}${state}/${location}/`;
  }

  static getUrlFromProfileDataWithRegion(data: IRegionProfile): string {
    let state = `for-${data.state}`;
    state = UtilsService.slugify(state);

    let location = `${data.region}-region-${data.regionId}`;
    location = UtilsService.slugify(location);

    return `${this.baseUrl}${state}/${location}/`;
  }

  static getUrlFromProfileDataWithSuburb(data: ISuburbProfile): string {
    let state = `for-${data.state}`;
    state = UtilsService.slugify(state);
    let location = `${data.suburb}-${data.postalCode}`;
    location = UtilsService.slugify(location);

    return `${this.baseUrl}${state}/${location}/`;
  }
  ////////////////////////////////////////////////////////////////
  private static getState(url: string): string | void {
    const state = url.match(/for-(.*?)\//);
    if (!state) {
      return;
    }
    return state[1];
  }

  static getProfileDataFromUrlWithState(url: string): string | boolean {
    if (!UrlType.isStateProfile(url)) {
      return false;
    }
    const state = Profile.getState(url);
    if (!state) {
      return false;
    }
    return state;
  }

  static getProfileDataFromUrlWithCity(url: string): ICityProfile | boolean {
    if (!UrlType.isCityProfile(url)) {
      return false;
    }
    const citySlug = url.match(/for-(.*?)\/(.*)-city-(\d+)\/$/);
    if (!citySlug) {
      return false;
    }
    const state = Profile.getState(url);
    if (!state) {
      return false;
    }
    let city = citySlug[2];
    city = UtilsService.slugToName(city);
    const cityId = parseInt(citySlug[3]);
    return { state, city, cityId };
  }

  static getProfileDataFromUrlWithRegion(url: string): IRegionProfile | boolean {
    if (!UrlType.isRegionProfile(url)) {
      return false;
    }
    const state = Profile.getState(url);
    if (!state) {
      return false;
    }
    const regionSlug = url.match(/for-(.*?)\/(.*)-region-(\d+)\/$/);
    if (!regionSlug) {
      return false;
    }
    let region = regionSlug[2];
    region = UtilsService.slugToName(region);
    const regionId = parseInt(regionSlug[3]);
    return { state, region, regionId };
  }

  static getProfileDataFromUrlWithSuburb(url: string): ISuburbProfile | boolean {
    if (!UrlType.isSuburbProfile(url)) {
      return false;
    }
    const state = Profile.getState(url);
    if (!state) {
      return false;
    }
    const suburbSlug = url.match(/for-(.*?)\/(.*)-(\d+)\/$/);
    if (!suburbSlug) {
      return false;
    }
    let suburb = suburbSlug[2];
    suburb = UtilsService.slugToName(suburb);
    const postalCode = parseInt(suburbSlug[3]);
    return { state, suburb, postalCode };
  }

  static getProfileDataFromUrl(url: string) {
    if (!url.includes(this.baseUrl)) {
      return false;
    }
    if (UrlType.isProfileLandingUrl(url)) {
      return false;
    }

    if (UrlType.isStateProfile(url)) {
      return Profile.getProfileDataFromUrlWithState(url);
    }
    if (UrlType.isCityProfile(url)) {
      return Profile.getProfileDataFromUrlWithCity(url);
    }
    if (UrlType.isRegionProfile(url)) {
      return Profile.getProfileDataFromUrlWithRegion(url);
    }
    return Profile.getProfileDataFromUrlWithSuburb(url);
  }
}

export { Profile };

//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

export default class LocationProfile {
  static getUrlFromProfileDataWithState(data: IStateProfile): string {
    return new UrlFromProfileDataWithState(data).getUrl();
  }

  static getUrlFromProfileDataWithCity(data: ICityProfile): string {
    return new UrlFromProfileDataWithCity(data).getUrl();
  }

  static getUrlFromProfileDataWithRegion(data: IRegionProfile): string {
    return new UrlFromProfileDataWithRegion(data).getUrl();
  }

  static getUrlFromProfileDataWithSuburb(data: ISuburbProfile): string {
    return new UrlFromProfileDataWithSuburb(data).getUrl();
  }

  static getUrlFromProfileData(data: ILocationProfile): string {
    return new UrlFromProfileData(data).getUrl();
  }
}
