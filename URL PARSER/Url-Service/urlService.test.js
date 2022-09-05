const UrlService = require("./urlService.js");

const url0 = `https://resi.uatz.view.com.au/for-sale/in-vic/`;
const url0Data = {
  saleMethod: "Sale",
  state: "Vic",
  suburb: "",
  postalCode: "",
  region: "",
  minPrice: "",
  maxPrice: "",
  propertyTypes: [],
  bedrooms: "",
};

const url1 = `https://resi.uatz.view.com.au/for-sale/studios-and-townhouses-and-villas-in-vic-richmond-3121-with-1-bedroom-from-50000/`;
const url1Data = {
  saleMethod: "Sale",
  state: "Vic",
  suburb: "Richmond",
  postalCode: 3121,
  region: "",
  minPrice: 50000,
  maxPrice: "",
  propertyTypes: ["Studios", "Townhouses", "Villas"],
  bedrooms:1,
};

const url2 = `https://resi.uatz.view.com.au/for-sale/studios-and-townhouses-and-villas-in-vic-richmond-3121-with-1-bedroom-up-to-75000/`;
const url2Data = {
  saleMethod: "Sale",
  state: "Vic",
  suburb: "Richmond",
  postalCode: 3121,
  region: "",
  minPrice: "",
  maxPrice: 75000,
  propertyTypes: ["Studios", "Townhouses", "Villas"],
  bedrooms: 1,
};

const url3 = "https://resi.uatz.view.com.au/for-sale/in-wa-city-beach-6015-up-to-50000/";
const url3Data = {
  saleMethod: "Sale",
  state: "Wa",
  suburb: "City Beach",
  postalCode: 6015,
  region: "",
  minPrice: "",
  maxPrice: 50000,
  propertyTypes: [],
  bedrooms: "",
};

const url4 = "https://resi.uatz.view.com.au/for-rent/in-wa-city-beach-6015-from-150-per-week/";
const url4Data = {
  saleMethod: "Rent",
  state: "Wa",
  suburb: "City Beach",
  postalCode: 6015,
  region: "",
  minPrice: 150,
  maxPrice: "",
  propertyTypes: [],
  bedrooms: "",
};

const url5 = `https://resi.uatz.view.com.au/for-rent/studios-and-townhouses-and-villas-in-vic-richmond-3121-with-1-bedroom-between-5000-and-100000-per-week/`;
const url5Data = {
  saleMethod: "Rent",
  state: "Vic",
  suburb: "Richmond",
  postalCode: 3121,
  region: "",
  minPrice: 5000,
  maxPrice: 100000,
  propertyTypes: ["Studios", "Townhouses", "Villas"],
  bedrooms: 1,
};

const url6 = `https://resi.uatz.view.com.au/for-rent/in-nsw-attunga/`;
const url6Data = {
  saleMethod: "Rent",
  state: "Nsw",
  suburb: "",
  postalCode: "",
  region: "Attunga",
  minPrice: "",
  maxPrice: "",
  propertyTypes: [],
  bedrooms: "",
};

const url7 = `https://resi.uatz.view.com.au/sold-properties/houses-and-units-and-apartments-and-studios-and-townhouses-and-land-and-villas-and-rural-in-vic-melbourne-with-3-bedrooms-between-50000-and-75000/`;
const url7Data = {
  saleMethod: "Sold",
  state: "Vic",
  suburb: "",
  postalCode: "",
  region: "Melbourne",
  minPrice: 50000,
  maxPrice: 75000,
  propertyTypes: ["Houses", "Units", "Apartments", "Studios", "Townhouses", "Land", "Villas", "Rural"],
  bedrooms: 3,
};

// /////////////////////////////////////
describe("Test for get data from Url", () => {
  test("Get Data object from Url-0", () => {
    expect(UrlService.getDataFromUrl(url0)).toEqual(url0Data);
  });

  test("Get Data object from Url-1", () => {
    expect(UrlService.getDataFromUrl(url1)).toEqual(url1Data);
  });

  test("Get Data object from Url-2", () => {
    expect(UrlService.getDataFromUrl(url2)).toEqual(url2Data);
  });

  test("Get Data object from Url-3", () => {
    expect(UrlService.getDataFromUrl(url3)).toEqual(url3Data);
  });

  test("Get Data object from Url-4", () => {
    expect(UrlService.getDataFromUrl(url4)).toEqual(url4Data);
  });

  test("Get Data object from Url-5", () => {
    expect(UrlService.getDataFromUrl(url5)).toEqual(url5Data);
  });

  test("Get Data object from Url-6", () => {
    expect(UrlService.getDataFromUrl(url6)).toEqual(url6Data);
  });

  test("Get Data object from Url-7", () => {
    expect(UrlService.getDataFromUrl(url7)).toEqual(url7Data);
  });
});

describe("Test for Get Url From Data", () => {
  test("Create a Url From data-0", () => {
    expect(UrlService.getUrlFromData(url0Data)).toEqual(url0);
  });

  test ("Create a Url From data-1", () => {
    expect(UrlService.getUrlFromData(url1Data)).toEqual(url1);
  });

  test("Create a Url From data-2", () => {
    expect(UrlService.getUrlFromData(url2Data)).toEqual(url2);
  });

  test("Create a Url From data-3", () => {
    expect(UrlService.getUrlFromData(url3Data)).toEqual(url3);
  });

  test("Create a Url From data-4", () => {
    expect(UrlService.getUrlFromData(url4Data)).toEqual(url4);
  });

  test("Create a Url From data-5", () => {
    expect(UrlService.getUrlFromData(url5Data)).toEqual(url5);
  });

  test("Create a Url From data-6", () => {
    expect(UrlService.getUrlFromData(url6Data)).toEqual(url6);
  });

  test("Create a Url From data-7", () => {
    expect(UrlService.getUrlFromData(url7Data)).toEqual(url7);
  });
});
