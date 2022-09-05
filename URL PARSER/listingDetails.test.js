const Listing = require("./listingDetails.js");

describe("Get Listing Details From Url", () => {
  test(`https://www.realestateview.com.au/real-estate/13-canungra-road-city-beach-wa/property-details-buy-residential-14289642/
`, () => {
    expect(
      Listing.getListingDataFromUrl(
        `https://www.realestateview.com.au/real-estate/13-canungra-road-city-beach-wa/property-details-buy-residential-14289642/`
      )
    ).toEqual({
      saleMethod: "buy",
      listingId: 14289642,
      slug: "13-canungra-road-city-beach-wa",
      state: "wa",
    });
  });

  test("https://www.realestateview.com.au/real-estate/3-jubilee-crescent-city-beach-wa/property-details-sold-residential-14160030/", () => {
    expect(
      Listing.getListingDataFromUrl(
        `https://www.realestateview.com.au/real-estate/3-jubilee-crescent-city-beach-wa/property-details-sold-residential-14160030/`
      )
    ).toEqual({ saleMethod: "sold", listingId: 14160030, slug: "3-jubilee-crescent-city-beach-wa", state: "wa" });
  });

  test("https://www.realestateview.com.au/rental-properties/38-maloney-way-city-beach-wa/property-details-rent-residential-14202736/", () => {
    expect(
      Listing.getListingDataFromUrl(
        `https://www.realestateview.com.au/rental-properties/38-maloney-way-city-beach-wa/property-details-rent-residential-14202736/`
      )
    ).toEqual({ saleMethod: "rent", listingId: 14202736, slug: "38-maloney-way-city-beach-wa", state: "wa" });
  });
});

describe("Get Url From Listing Details", () => {
  test(`{
  saleMethod: "buy",
  listingId: 14289642,
  address: "13/12-11 canungra road",
  suburb: "city-beach",
  state: "wa",
}`, () => {
    expect(
      Listing.getUrlFromListingData({
        saleMethod: "buy",
        listingId: 14289642,
        address: "13/12-11 canungra road",
        suburb: "city-beach",
        state: "wa",
      })
    ).toEqual(
      `https://www.realestateview.com.au/real-estate/13-12-11-canungra-road-city-beach-wa/property-details-buy-residential-14289642/`
    );
  });


  test(`{
  saleMethod: "rent",
  listingId: 14289682,
  address: "1312-11 canungra road",
  suburb: "city-beach",
  state: "wa",
}`, () => {
    expect(
      Listing.getUrlFromListingData({
        saleMethod: "rent",
        listingId: 14289682,
        address: "1312-11 canungra road",
        suburb: "city-beach",
        state: "wa",
      })
    ).toEqual(
      `https://www.realestateview.com.au/rental-properties/1312-11-canungra-road-city-beach-wa/property-details-rent-residential-14289682/`
    );
  });

  test(`{
  saleMethod: "sold",
  listingId: 32563467,
  address: "1312-11 city road",
  suburb: "city-beach",
  state: "waz",
}`, () => {
    expect(
      Listing.getUrlFromListingData({
        saleMethod: "sold",
        listingId: 32563467,
        address: "1312-11 city road",
        suburb: "city-beach",
        state: "waz",
      })
    ).toEqual(
      `https://www.realestateview.com.au/real-estate/1312-11-city-road-city-beach-waz/property-details-sold-residential-32563467/`
    );
  });
});
