import UtilsService from "../../utils/index";
import { UrlType } from "../urlType/urlType";
import {
  IState,
  ICityProfileWithState,
  IRegionProfileWithState,
  ISuburbProfileWithState,
  ILocationProfile,
} from "./profileUrl.interface";

abstract class ProfileUrlFromData {
  constructor(public data: ILocationProfile) {
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
  getLocation = (data: ICityProfileWithState): string => {
    const city = UtilsService.slugify(data.city);
    return `${city}-city-${data.cityId}/`;
  };
}

class UrlFromProfileDataWithRegion extends ProfileUrlFromData {
  getLocation = (data: IRegionProfileWithState): string => {
    const region = UtilsService.slugify(data.region);
    return `${region}-region-${data.regionId}/`;
  };
}

class UrlFromProfileDataWithSuburb extends ProfileUrlFromData {
  getLocation = (data: ISuburbProfileWithState): string => {
    const suburb = UtilsService.slugify(data.suburb);
    return `${suburb}-${data.postalCode}/`;
  };
}

class UrlFromProfileData extends ProfileUrlFromData {
  getLocation = (data: ILocationProfile): string => {
    if (data.city && data.cityId) {
      return new UrlFromProfileDataWithCity(data).getLocation(data as ICityProfileWithState);
    } else if (data.region && data.regionId) {
      return new UrlFromProfileDataWithRegion(data).getLocation(data as IRegionProfileWithState);
    } else if (data.suburb && data.postalCode) {
      return new UrlFromProfileDataWithSuburb(data).getLocation(data as ISuburbProfileWithState);
    } else {
      return new UrlFromProfileDataWithState(data).getLocation();
    }
  };
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

class ProfileDataFromUrl {
  private static baseUrl = "/profile/";

  private static getState(url: string): string | void {
    const state = url.match(/for-(.*?)\//);
    if (!state) {
      return;
    }
    return state[1];
  }

  static getProfileDataFromUrlWithState(url: string): IState | boolean {
    if (!UrlType.isStateProfile(url)) {
      return false;
    }
    const state = ProfileDataFromUrl.getState(url);
    if (!state) {
      return false;
    }
    return { state };
  }

  static getProfileDataFromUrlWithCity(url: string): ICityProfileWithState | boolean {
    if (!UrlType.isCityProfile(url)) {
      return false;
    }
    const citySlug = url.match(/for-(.*?)\/(.*)-city-(\d+)\/$/);
    if (!citySlug) {
      return false;
    }
    const state = ProfileDataFromUrl.getState(url);
    if (!state) {
      return false;
    }
    let city = citySlug[2];
    city = UtilsService.slugToName(city);
    const cityId = parseInt(citySlug[3]);
    return { state, city, cityId };
  }

  static getProfileDataFromUrlWithRegion(url: string): IRegionProfileWithState | boolean {
    if (!UrlType.isRegionProfile(url)) {
      return false;
    }
    const state = ProfileDataFromUrl.getState(url);
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

  static getProfileDataFromUrlWithSuburb(url: string): ISuburbProfileWithState | boolean {
    if (!UrlType.isSuburbProfile(url)) {
      return false;
    }
    const state = ProfileDataFromUrl.getState(url);
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
      return ProfileDataFromUrl.getProfileDataFromUrlWithState(url);
    }
    if (UrlType.isCityProfile(url)) {
      return ProfileDataFromUrl.getProfileDataFromUrlWithCity(url);
    }
    if (UrlType.isRegionProfile(url)) {
      return ProfileDataFromUrl.getProfileDataFromUrlWithRegion(url);
    }
    return ProfileDataFromUrl.getProfileDataFromUrlWithSuburb(url);
  }
}

export { ProfileDataFromUrl as Profile };

//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

export default class LocationProfile {
  static getUrlFromProfileDataWithState(data: IState): string {
    return new UrlFromProfileDataWithState(data).getUrl();
  }

  static getUrlFromProfileDataWithCity(data: ICityProfileWithState): string {
    return new UrlFromProfileDataWithCity(data).getUrl();
  }

  static getUrlFromProfileDataWithRegion(data: IRegionProfileWithState): string {
    return new UrlFromProfileDataWithRegion(data).getUrl();
  }

  static getUrlFromProfileDataWithSuburb(data: ISuburbProfileWithState): string {
    return new UrlFromProfileDataWithSuburb(data).getUrl();
  }

  static getUrlFromProfileData(data: ILocationProfile): string {
    return new UrlFromProfileData(data).getUrl();
  }

  static getProfileDataFromUrl(url: string): ILocationProfile | boolean {
    return ProfileDataFromUrl.getProfileDataFromUrl(url);
  }

  static getProfileDataFromUrlWithState(url: string): IState | boolean {
    return ProfileDataFromUrl.getProfileDataFromUrlWithState(url);
  }

  static getProfileDataFromUrlWithCity(url: string): ICityProfileWithState | boolean {
    return ProfileDataFromUrl.getProfileDataFromUrlWithCity(url);
  }

  static getProfileDataFromUrlWithRegion(url: string): IRegionProfileWithState | boolean {
    return ProfileDataFromUrl.getProfileDataFromUrlWithRegion(url);
  }

  static getProfileDataFromUrlWithSuburb(url: string): ISuburbProfileWithState | boolean {
    return ProfileDataFromUrl.getProfileDataFromUrlWithSuburb(url);
  }
}
