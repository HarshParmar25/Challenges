"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = void 0;
const slugify_1 = require("../utils/slugify");
class Profile {
    static getStateUrl(data) {
        let state = `for-${data.state}`;
        state = (0, slugify_1.slugify)(state);
        return `${this.baseUrl}${state}/`;
    }
    static getCityUrl(data) {
        let state = `for-${data.state}`;
        state = (0, slugify_1.slugify)(state);
        let area = `${data.city}-city-${data.cityId}`;
        area = (0, slugify_1.slugify)(area);
        return `${this.baseUrl}${state}/${area}/`;
    }
    static getRegionUrl(data) {
        let state = `for-${data.state}`;
        state = (0, slugify_1.slugify)(state);
        let area = `${data.region}-region-${data.regionId}`;
        area = (0, slugify_1.slugify)(area);
        return `${this.baseUrl}${state}/${area}/`;
    }
    static getSuburbUrl(data) {
        let state = `for-${data.state}`;
        state = (0, slugify_1.slugify)(state);
        let area = `${data.suburb}-${data.postalCode}`;
        area = (0, slugify_1.slugify)(area);
        return `${this.baseUrl}${state}/${area}/`;
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
