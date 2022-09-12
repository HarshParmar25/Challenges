const Suburb = require("./suburb-profile.js");

describe("Get Auction Data from Url", () => {
  test(`https://www.realestateview.com.au/suburb-profile/for-vic-richmond-3121/`, () => {
    expect(
      Suburb.getDataFromUrl(`https://www.realestateview.com.au/suburb-profile/for-vic-richmond-3121/`)
    ).toEqual({
      state: "Vic",
      suburb: "Richmond",
      postalCode: 3121,
    });
  });

  test(`https://www.realestateview.com.au/suburb-profile/forvic-barongarook-west-3249/`, () => {
    expect(
      Suburb.getDataFromUrl(`https://www.realestateview.com.au/suburb-profile/for-vic-barongarook-west-3249/`)
    ).toEqual({
      state: "Vic",
      suburb: "Barongarook West",
      postalCode: 3249,
    });
  });
});

///////////////////////////////////////////////////////////////////////////////////////////////////
describe("Get Auction Url from Data", () => {
  test(`{
      state: "Vic",
      suburb: "Richmond",
      postalCode: 3121,
    }`, () => {
    expect(
      Suburb.getUrlFromData({
        state: "Vic",
        suburb: "Richmond",
        postalCode: 3121,
      })
    ).toEqual(`https://www.realestateview.com.au/suburb-profile/for-vic-richmond-3121/`);
  });

  test(`{
      state: "Vic",
      suburb: "Barongarook West",
      postalCode: 3249,
    }`, () => {
    expect(
      Suburb.getUrlFromData({
        state: "Vic",
        suburb: "Barongarook West",
        postalCode: 3249,
      })
    ).toEqual(`https://www.realestateview.com.au/suburb-profile/for-vic-barongarook-west-3249/`);
  });
});
