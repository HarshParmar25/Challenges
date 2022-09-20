"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const profile_1 = require("./profile");
test("get state from Url", () => {
    expect(profile_1.Profile.getStateDataFormUrl(`https://revo.uatz.view.com.au/profile/for-vic/`)).toEqual("vic");
});
test("get state suburb and postalcode", () => {
    expect(profile_1.Profile.getSuburbDataFromUrl(`https://revo.uatz.view.com.au/profile/for-vic/melbourne-3000/`)).toEqual({
        state: "vic",
        suburb: "melbourne",
        postalCode: 3000,
    });
});
test("get state and region", () => {
    expect(profile_1.Profile.getRegionDataFromUrl(`https://revo.uatz.view.com.au/profile/for-vic/melbourne-region-1234/`)).toEqual({
        state: "vic",
        region: "melbourne",
        regionId: 1234,
    });
});
test("get state and city", () => {
    expect(profile_1.Profile.getCityDataFromUrl(`https://revo.uatz.view.com.au/profile/for-vic/melbourne-city-1234/`)).toEqual({
        state: "vic",
        city: "melbourne",
        cityId: 1234,
    });
});
test(`get state Url`, () => {
    expect(profile_1.Profile.getStateUrl({ state: "vic" })).toEqual(`https://revo.uatz.view.com.au/profile/for-vic/`);
});
test(`get suburb Url`, () => {
    expect(profile_1.Profile.getSuburbUrl({ state: "vic", suburb: "melbourne", postalCode: 3000 })).toEqual(`https://revo.uatz.view.com.au/profile/for-vic/melbourne-3000/`);
});
test(`get city Url`, () => {
    expect(profile_1.Profile.getCityUrl({ state: "vic", city: "MelBo/urne", cityId: 3000 })).toEqual(`https://revo.uatz.view.com.au/profile/for-vic/melbo-urne-city-3000/`);
});
test(`get region Url`, () => {
    expect(profile_1.Profile.getRegionUrl({ state: "vic", region: "melbourne", regionId: 3000 })).toEqual(`https://revo.uatz.view.com.au/profile/for-vic/melbourne-region-3000/`);
});
