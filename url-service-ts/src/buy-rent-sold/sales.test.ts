import { Sale } from "./sales";

describe("Test for Get Url From Data", () => {
  test("Get sale state url", () => {
    expect(Sale.getStateUrl({ saleMethod: "Sale", state: "vic" })).toEqual(
      `https://www.realestateview.com.au/for-sale/in-vic/`
    );
  });

  test("Get sale city url", () => {
    expect(Sale.getCityUrl({ saleMethod: "Sale", state: "vic", city: "melborn" })).toEqual(
      `https://www.realestateview.com.au/for-sale/in-vic-melborn/`
    );
  });

  test("Get sale region url", () => {
    expect(Sale.getRegionUrl({ saleMethod: "Sale", state: "vic", region: "melborn" })).toEqual(
      `https://www.realestateview.com.au/for-sale/in-vic-melborn/`
    );
  });

  test("Get sale suburb url", () => {
    expect(Sale.getSuburbUrl({ saleMethod: "Sale", state: "vic", suburb: "richmond", postalCode: 1234 })).toEqual(
      `https://www.realestateview.com.au/for-sale/in-vic-richmond-1234/`
    );
  });

  test("Get rent state url", () => {
    expect(Sale.getStateUrl({ saleMethod: "rent", state: "vic" })).toEqual(
      `https://www.realestateview.com.au/for-rent/in-vic/`
    );
  });

  test("Get rent city url", () => {
    expect(Sale.getCityUrl({ saleMethod: "rent", state: "vic", city: "melborn" })).toEqual(
      `https://www.realestateview.com.au/for-rent/in-vic-melborn/`
    );
  });

  test("Get rent region url", () => {
    expect(Sale.getRegionUrl({ saleMethod: "rent", state: "vic", region: "melborn" })).toEqual(
      `https://www.realestateview.com.au/for-rent/in-vic-melborn/`
    );
  });

  test("Get rent suburb url", () => {
    expect(Sale.getSuburbUrl({ saleMethod: "rent", state: "vic", suburb: "richmond", postalCode: 1234 })).toEqual(
      `https://www.realestateview.com.au/for-rent/in-vic-richmond-1234/`
    );
  });

  test("Get sold state url", () => {
    expect(Sale.getStateUrl({ saleMethod: "sold", state: "vic" })).toEqual(
      `https://www.realestateview.com.au/sold-properties/in-vic/`
    );
  });

  test("Get sold city url", () => {
    expect(Sale.getCityUrl({ saleMethod: "sold", state: "vic", city: "melborn" })).toEqual(
      `https://www.realestateview.com.au/sold-properties/in-vic-melborn/`
    );
  });

  test("Get sold region url", () => {
    expect(Sale.getRegionUrl({ saleMethod: "sold", state: "vic", region: "melborn" })).toEqual(
      `https://www.realestateview.com.au/sold-properties/in-vic-melborn/`
    );
  });

  test("Get sale filtered suburb url", () => {
    expect(Sale.getSuburbUrl({ saleMethod: "sold", state: "vic", suburb: "richmond", postalCode: 1234 })).toEqual(
      `https://www.realestateview.com.au/sold-properties/in-vic-richmond-1234/`
    );
  });

  test("Get sale suburb url", () => {
    expect(
      Sale.getSuburbUrl({
        saleMethod: "Sale",
        state: "Vic",
        suburb: "Richmond",
        postalCode: 3121,
        minPrice: 50000,
        propertyTypes: ["Studios", "Townhouses", "Villas"],
        bedrooms: 1,
      })
    ).toEqual(
      `https://www.realestateview.com.au/for-sale/studios-and-townhouses-and-villas-in-vic-richmond-3121-with-1-bedroom-from-50000/`
    );
  });

  test("Get rent region url", () => {
    expect(
      Sale.getRegionUrl({
        saleMethod: "Rent",
        state: "Nsw",
        region: "Attunga",
      })
    ).toEqual(`https://www.realestateview.com.au/for-rent/in-nsw-attunga/`);
  });

  test("Get sold region url", () => {
    expect(
      Sale.getRegionUrl({
        saleMethod: "Sold",
        state: "Vic",
        region: "Melbourne",
        minPrice: 50000,
        maxPrice: 75000,
        propertyTypes: ["Houses", "Units", "Apartments", "Studios", "Townhouses", "Land", "Villas", "Rural"],
        bedrooms: 3,
      })
    ).toEqual(
      `https://www.realestateview.com.au/sold-properties/houses-and-units-and-apartments-and-studios-and-townhouses-and-land-and-villas-and-rural-in-vic-melbourne-with-3-bedrooms-between-50000-and-75000/`
    );
  });

  test("Get sold city url", () => {
    expect(
      Sale.getCityUrl({
        saleMethod: "Sold",
        state: "Vic",
        city: "Melbourne",
        minPrice: 50000,
        maxPrice: 75000,
        propertyTypes: ["Houses", "Units", "Apartments", "Studios", "Townhouses", "Land", "Villas", "Rural"],
        bedrooms: 3,
      })
    ).toEqual(
      `https://www.realestateview.com.au/sold-properties/houses-and-units-and-apartments-and-studios-and-townhouses-and-land-and-villas-and-rural-in-vic-melbourne-with-3-bedrooms-between-50000-and-75000/`
    );
  });
});
