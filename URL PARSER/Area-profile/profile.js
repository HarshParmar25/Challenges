class Profile {
  static baseUrl = `https://revo.uatz.view.com.au/profile/`;
  static getData(url) {
    if (url.match(/for-(.*?)\/(.*)-city-(\d+)\/$/)) return Profile.getCityDataFromUrl(url);

    if (url.match(/for-(.*?)\/(.*)-region-(\d+)\/$/)) return Profile.getRegionDataFromUrl(url);

    if (url.match(/for-(.*?)\/(.*)-(\d+)\/$/)) return Profile.getSuburbDataFromUrl(url);

    if (url.match(/for-(.*?)\/$/)) return Profile.getStateDataFormUrl(url);

    return `Unhandled Url`;
  }

  static getStateDataFormUrl(url) {
    return url.match(/for-(.*?)\//)[1];
  }

  static getCityDataFromUrl(url) {
    const citySlug = url.match(/for-(.*?)\/(.*)-city-(\d+)\/$/);
    const state = Profile.getStateDataFormUrl(url);
    const city = citySlug[2];
    const cityId = +citySlug[3];
    return { state, city, cityId };
  }

  static getRegionDataFromUrl(url) {
    const state = Profile.getStateDataFormUrl(url);
    const regionSlug = url.match(/for-(.*?)\/(.*)-region-(\d+)\/$/);
    const region = regionSlug[2];
    const regionId = +regionSlug[3];
    return { state, region, regionId };
  }

  static getSuburbDataFromUrl(url) {
    const state = Profile.getStateDataFormUrl(url);
    let suburbSlug = url.match(/for-(.*?)\/(.*)-(\d+)\/$/);
    const suburb = suburbSlug[2];
    const postalCode = +suburbSlug[3];
    return { state, suburb, postalCode };
  }

  static getUrl(data) {
    if (data.state && !data.suburb && !data.city && !data.region) {
      return Profile.getStateUrl(data);
    }

    if (data.state && data.suburb && data.postalCode) {
      return Profile.getSuburbUrl(data);
    }

    if (data.state && data.city && data.cityId) {
      return Profile.getCityUrl(data);
    }

    if (data.state && data.region && data.regionId) {
      return Profile.getRegionUrl(data);
    }

    return `Unhandled Data`;
  }

  static getStateUrl({ state }) {
    return `${Profile.baseUrl}for-${state}/`;
  }

  static getCityUrl({ state, city, cityId }) {
    return `${Profile.baseUrl}for-${state}/${city}-city-${cityId}/`;
  }

  static getRegionUrl({ state, region, regionId }) {
    return `${Profile.baseUrl}for-${state}/${region}-region-${regionId}/`;
  }

  static getSuburbUrl({ state, suburb, postalCode }) {
    return `${Profile.baseUrl}for-${state}/${suburb}-${postalCode}/`;
  }
}

module.exports = Profile;

console.log(Profile.getUrl({ state: "vic", region: "melbourne", regionId: 3000 }));
