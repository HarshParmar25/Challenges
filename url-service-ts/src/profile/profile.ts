import { slugify } from "../utils/slugify";
import { IState, ICity, IRegion, ISuburb } from "./profile.interface";

class Profile {
  private static baseUrl: string = "https://revo.uatz.view.com.au/profile/";

  static getStateUrl(data: IState): string {
    let state = `for-${data.state}`;
    state = slugify(state);
    return `${this.baseUrl}${state}/`;
  }

  static getCityUrl(data: ICity): string {
    let state = `for-${data.state}`;
    state = slugify(state);

    let area = `${data.city}-city-${data.cityId}`;
    area = slugify(area);

    return `${this.baseUrl}${state}/${area}/`;
  }

  static getRegionUrl(data: IRegion): string {
    let state = `for-${data.state}`;
    state = slugify(state);

    let area = `${data.region}-region-${data.regionId}`;
    area = slugify(area);

    return `${this.baseUrl}${state}/${area}/`;
  }

  static getSuburbUrl(data: ISuburb): string {
    let state = `for-${data.state}`;
    state = slugify(state);
    let area = `${data.suburb}-${data.postalCode}`;
    area = slugify(area);

    return `${this.baseUrl}${state}/${area}/`;
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
