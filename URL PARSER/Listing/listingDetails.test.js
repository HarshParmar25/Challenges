const Listing = require("./listingDetails.js");

describe("Get Listing Details From Url", () => {
  test(`https://www.realestateview.com.au/real-estate/13-canungra-road-city-beach-wa/property-details-buy-residential-14289642/
`, () => {
    expect(
      Listing.getListingDataFromUrl(
        `https://www.realestateview.com.au/real-estate/13-canungra-road-city-beach-wa/property-details-buy-residential-14289642/`
      )
    ).toEqual({
      saleMethod: "Buy",
      listingId: 14289642,
      slug: "13 Canungra Road City Beach Wa",
      state: "Wa",
    });
  });

  test("https://www.realestateview.com.au/real-estate/3-jubilee-crescent-city-beach-wa/property-details-sold-residential-14160030/", () => {
    expect(
      Listing.getListingDataFromUrl(
        `https://www.realestateview.com.au/real-estate/3-jubilee-crescent-city-beach-wa/property-details-sold-residential-14160030/`
      )
    ).toEqual({ saleMethod: "Sold", listingId: 14160030, slug: "3 Jubilee Crescent City Beach Wa", state: "Wa" });
  });

  test("https://www.realestateview.com.au/rental-properties/38-maloney-way-city-beach-wa/property-details-rent-residential-14202736/", () => {
    expect(
      Listing.getListingDataFromUrl(
        `https://www.realestateview.com.au/rental-properties/38-maloney-way-city-beach-wa/property-details-rent-residential-14202736/`
      )
    ).toEqual({ saleMethod: "Rent", listingId: 14202736, slug: "38 Maloney Way City Beach Wa", state: "Wa" });
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
        saleMethod: "Buy",
        listingId: 14289642,
        address: "13/12-11 Canungra Road",
        suburb: "City Beach",
        state: "Wa",
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
        saleMethod: "Rent",
        listingId: 14289682,
        address: "1312-11 Canungra Road",
        suburb: "City Beach",
        state: "Wa",
      })
    ).toEqual(
      `https://www.realestateview.com.au/rental-properties/1312-11-canungra-road-city-beach-wa/property-details-rent-residential-14289682/`
    );
  });

  test(`{
  saleMethod: "Sold",
  listingId: 32563467,
  address: "1312-11 City Road",
  suburb: "city-beach",
  state: "waz",
}`, () => {
    expect(
      Listing.getUrlFromListingData({
        saleMethod: "Sold",
        listingId: 32563467,
        address: "1312-11 City Road",
        suburb: "City Beach",
        state: "Waz",
      })
    ).toEqual(
      `https://www.realestateview.com.au/real-estate/1312-11-city-road-city-beach-waz/property-details-sold-residential-32563467/`
    );
  });
});
