import CaseChange from "../utils/CaseChange";
import { IState, ICity, IRegion, ISuburb } from "./profile.interface";

class Profile {
  private static baseUrl: string = "https://revo.uatz.view.com.au/profile/";

  static getStateUrl(data: IState): string {
    data = CaseChange.slugify<IState>(data);
    return `${Profile.baseUrl}for-${data.state}/`;
  }

  static getCityUrl(data: ICity): string {
    data = CaseChange.slugify<ICity>(data);
    return `${Profile.baseUrl}for-${data.state}/${data.city}-city-${data.cityId}/`;
  }

  static getRegionUrl(data: IRegion): string {
    data = CaseChange.slugify<IRegion>(data);
    return `${Profile.baseUrl}for-${data.state}/${data.region}-region-${data.regionId}/`;
  }

  static getSuburbUrl(data: ISuburb): string {
    data = CaseChange.slugify<ISuburb>(data);
    return `${Profile.baseUrl}for-${data.state}/${data.suburb}-${data.postalCode}/`;
  }

  static getStateDataFormUrl(url: string): string | void {
    const state = url.match(/for-(.*?)\//);
    if (!state) return;
    return state[1];
  }

  static getCityDataFromUrl(url: string): ICity | void {
    const citySlug = url.match(/for-(.*?)\/(.*)-city-(\d+)\/$/);
    if (!citySlug) return;
    const state = Profile.getStateDataFormUrl(url);
    if (!state) return;
    const city = citySlug[2];
    const cityId = +citySlug[3];
    return { state, city, cityId };
  }

  static getRegionDataFromUrl(url: string): IRegion | void {
    const state = Profile.getStateDataFormUrl(url);
    if (!state) return;
    const regionSlug = url.match(/for-(.*?)\/(.*)-region-(\d+)\/$/);
    if (!regionSlug) return;
    const region = regionSlug[2];
    const regionId = +regionSlug[3];
    return { state, region, regionId };
  }

  static getSuburbDataFromUrl(url: string): ISuburb | void {
    const state = Profile.getStateDataFormUrl(url);
    if (!state) return;
    if (url.match(/city-(\d+)\/$/) || url.match(/region-(\d+)\/$/)) return;
    let suburbSlug = url.match(/for-(.*?)\/(.*)-(\d+)\/$/);
    if (!suburbSlug) return;
    const suburb = suburbSlug[2];
    const postalCode = +suburbSlug[3];
    return { state, suburb, postalCode };
  }
}

export { Profile };
