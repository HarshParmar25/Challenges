const Profile = require("./profile.js");

test("get state from Url", () => {
  expect(Profile.getStateDataFormUrl(`https://revo.uatz.view.com.au/profile/for-vic/`)).toEqual("vic");
});

test("get state suburb and postalcode", () => {
  expect(Profile.getSuburbDataFromUrl(`https://revo.uatz.view.com.au/profile/for-vic/melbourne-3000/`)).toEqual({
    state: "vic",
    suburb: "melbourne",
    postalCode: 3000,
  });
});

test("get state and region", () => {
  expect(Profile.getRegionDataFromUrl(`https://revo.uatz.view.com.au/profile/for-vic/melbourne-region-1234/`)).toEqual({
    state: "vic",
    region: "melbourne",
    regionId: 1234,
  });
});

test("get state and city", () => {
  expect(Profile.getCityDataFromUrl(`https://revo.uatz.view.com.au/profile/for-vic/melbourne-city-1234/`)).toEqual({
    state: "vic",
    city: "melbourne",
    cityId: 1234,
  });
});

test("get state from Url", () => {
  expect(Profile.getData(`https://revo.uatz.view.com.au/profile/for-vic/`)).toEqual("vic");
});

test("get state suburb and postalcode", () => {
  expect(Profile.getData(`https://revo.uatz.view.com.au/profile/for-vic/melbourne-3000/`)).toEqual({
    state: "vic",
    suburb: "melbourne",
    postalCode: 3000,
  });
});

test("get state and region", () => {
  expect(Profile.getData(`https://revo.uatz.view.com.au/profile/for-vic/melbourne-region-1234/`)).toEqual({
    state: "vic",
    region: "melbourne",
    regionId: 1234,
  });
});

test("get state and city", () => {
  expect(Profile.getData(`https://revo.uatz.view.com.au/profile/for-vic/melbourne-city-1234/`)).toEqual({
    state: "vic",
    city: "melbourne",
    cityId: 1234,
  });
});

test(`get state Url`, () => {
  expect(Profile.getStateUrl({ state: "vic" })).toEqual(`https://revo.uatz.view.com.au/profile/for-vic/`);
});

test(`get suburb Url`, () => {
  expect(Profile.getSuburbUrl({ state: "vic", suburb: "melbourne", postalCode: 3000 })).toEqual(
    `https://revo.uatz.view.com.au/profile/for-vic/melbourne-3000/`
  );
});

test(`get city Url`, () => {
  expect(Profile.getCityUrl({ state: "vic", city: "melbourne", cityId: 3000 })).toEqual(
    `https://revo.uatz.view.com.au/profile/for-vic/melbourne-city-3000/`
  );
});

test(`get region Url`, () => {
  expect(Profile.getRegionUrl({ state: "vic", region: "melbourne", regionId: 3000 })).toEqual(
    `https://revo.uatz.view.com.au/profile/for-vic/melbourne-region-3000/`
  );
});

test(`get City url from unknowndata`, () => {
  expect(Profile.getUrl({ state: "vic", city: "melbourne", cityId: 3000 })).toEqual(
    `https://revo.uatz.view.com.au/profile/for-vic/melbourne-city-3000/`
  );
});

test(`get Region url from unknowndata`, () => {
  expect(Profile.getUrl({ state: "vic", region: "melbourne", regionId: 3000 })).toEqual(
    `https://revo.uatz.view.com.au/profile/for-vic/melbourne-region-3000/`
  );
});

test(`get Suburb url from unknowndata`, () => {
  expect(Profile.getUrl({ state: "vic", suburb: "melbourne", postalCode: 3000 })).toEqual(
    `https://revo.uatz.view.com.au/profile/for-vic/melbourne-3000/`
  );
});

test(`get State url from unknowndata`, () => {
  expect(Profile.getUrl({ state: "vic" })).toEqual(`https://revo.uatz.view.com.au/profile/for-vic/`);
});
