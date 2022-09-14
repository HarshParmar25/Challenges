interface City {
  state: string;
  city: string;
  cityId: number;
}
interface Region {
  state: string;
  region: string;
  regionId: number;
}
interface Suburb {
  state: string;
  suburb: string;
  postalCode: number;
}

class Profile {
  private static baseUrl: string = "https://revo.uatz.view.com.au/profile/";

  static getStateUrl({ state }: { state: string }): string {
    return `${Profile.baseUrl}for-${state}/`;
  }

  static getCityUrl({ state, city, cityId }: City): string {
    return `${Profile.baseUrl}for-${state}/${city}-city-${cityId}/`;
  }

  static getRegionUrl({ state, region, regionId }: Region): string {
    return `${Profile.baseUrl}for-${state}/${region}-region-${regionId}/`;
  }

  static getSuburbUrl({ state, suburb, postalCode }: Suburb): string {
    return `${Profile.baseUrl}for-${state}/${suburb}-${postalCode}/`;
  }

  static getStateDataFormUrl(url: string): string | void {
    const state = url.match(/for-(.*?)\//);
    if (!state) return;
    return state[1];
  }

  static getCityDataFromUrl(url: string): City | void {
    const citySlug = url.match(/for-(.*?)\/(.*)-city-(\d+)\/$/);
    if (!citySlug) return;
    const state = Profile.getStateDataFormUrl(url);
    if (!state) return;
    const city = citySlug[2];
    const cityId = +citySlug[3];
    return { state, city, cityId };
  }

  static getRegionDataFromUrl(url: string): Region | void {
    const state = Profile.getStateDataFormUrl(url);
    if (!state) return;
    const regionSlug = url.match(/for-(.*?)\/(.*)-region-(\d+)\/$/);
    if (!regionSlug) return;
    const region = regionSlug[2];
    const regionId = +regionSlug[3];
    return { state, region, regionId };
  }

  static getSuburbDataFromUrl(url: string): Suburb | void {
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
const res1 = Profile.getRegionUrl({ state: "NSW", region: "Sydney", regionId: 1111 });
res1;
