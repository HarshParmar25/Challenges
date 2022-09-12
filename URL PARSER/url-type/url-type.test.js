const { getType } = require("./url-type.js");

describe("Url types", () => {
  test(`test home page url`, () => {
    expect(getType(`https://www.realestateview.com.au/`)).toEqual(`buy-home-page`);
  });

  test("rent home page", () => {
    expect(getType(`https://www.realestateview.com.au/rental-properties/`)).toEqual(`rent-home-page`);
  });

  test(`sold home page`, () => {
    expect(getType(`https://www.realestateview.com.au/sold-properties/`)).toEqual(`sold-home-page`);
  });

  test("Buy search page", () => {
    expect(getType(`https://www.realestateview.com.au/for-sale/in-wa-city-beach-6015/`)).toEqual(`buy-search-page`);
  });

  test("rent search page", () => {
    expect(getType(`https://www.realestateview.com.au/for-rent/in-wa-city-beach-6015/`)).toEqual(`rent-search-page`);
  });

  test(`buy property details`, () => {
    expect(
      getType(`https://www.realestateview.com.au/real-estate/city-beach-wa/property-details-buy-residential-14321503/`)
    ).toEqual(`buy-property-details`);
  });

  test(`rent property details`, () => {
    expect(
      getType(
        `https://www.realestateview.com.au/rental-properties/17a-launceston-avenue-city-beach-wa/property-details-rent-residential-14304540/`
      )
    ).toEqual(`rent-property-details`);
  });

  test(`sold property details`, () => {
    expect(
      getType(
        `https://www.realestateview.com.au/real-estate/10-clovelly-road-city-beach-wa/property-details-sold-residential-14184858/`
      )
    ).toEqual(`sold-property-details`);
  });

  test(`Agency Home Page`, () => {
    expect(getType(`https://www.realestateview.com.au/find-agent/`)).toEqual(`agency-home-page`);
  });

  test(`Agency Search Page`, () => {
    expect(getType(`https://www.realestateview.com.au/find-agent/?loc=Melbourne%7CVIC`)).toEqual(`agency-search-page`);
  });

  test(`Agency details page`, () => {
    expect(getType(`https://www.realestateview.com.au/real-estate-agency/stockdale-leggo-glenroy-4723/`)).toEqual(
      "agency-details-page"
    );
  });

  test(`agent details page`, () => {
    expect(getType(`https://www.realestateview.com.au/agent-profile/daniel-imbesi-12763/`)).toEqual(
      `agent-profile-page`
    );
  });
});
