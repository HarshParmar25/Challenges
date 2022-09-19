"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = void 0;
class Profile {
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
    static getStateDataFormUrl(url) {
        const state = url.match(/for-(.*?)\//);
        if (!state)
            return;
        return state[1];
    }
    static getCityDataFromUrl(url) {
        const citySlug = url.match(/for-(.*?)\/(.*)-city-(\d+)\/$/);
        if (!citySlug)
            return;
        const state = Profile.getStateDataFormUrl(url);
        if (!state)
            return;
        const city = citySlug[2];
        const cityId = +citySlug[3];
        return { state, city, cityId };
    }
    static getRegionDataFromUrl(url) {
        const state = Profile.getStateDataFormUrl(url);
        if (!state)
            return;
        const regionSlug = url.match(/for-(.*?)\/(.*)-region-(\d+)\/$/);
        if (!regionSlug)
            return;
        const region = regionSlug[2];
        const regionId = +regionSlug[3];
        return { state, region, regionId };
    }
    static getSuburbDataFromUrl(url) {
        const state = Profile.getStateDataFormUrl(url);
        if (!state)
            return;
        if (url.match(/city-(\d+)\/$/) || url.match(/region-(\d+)\/$/))
            return;
        let suburbSlug = url.match(/for-(.*?)\/(.*)-(\d+)\/$/);
        if (!suburbSlug)
            return;
        const suburb = suburbSlug[2];
        const postalCode = +suburbSlug[3];
        return { state, suburb, postalCode };
    }
}
exports.Profile = Profile;
Profile.baseUrl = "https://revo.uatz.view.com.au/profile/";
