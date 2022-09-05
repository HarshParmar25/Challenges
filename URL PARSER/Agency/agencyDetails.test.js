const Agency = require("./agencyDetails.js");

describe("Get Agency Data from Url", () => {
  test(`https://www.realestateview.com.au/real-estate-agency/jellis-craig-richmond-13487/`, () => {
    expect(
      Agency.getAgencyId(`https://www.realestateview.com.au/real-estate-agency/jellis-craig-richmond-13487/`)
    ).toEqual(13487);
  });
});

test(`https://www.realestateview.com.au/real-estate-agency/nine-real-estate-group-pty-ltd-truganina-26844/`, () => {
  expect(
    Agency.getAgencyId(
      `https://www.realestateview.com.au/real-estate-agency/nine-real-estate-group-pty-ltd-truganina-26844/`
    )
  ).toEqual(26844);
});

test(`https://www.realestateview.com.au/real-estate-agency/stockdale-leggo-glenroy-4723/`, () => {
  expect(
    Agency.getAgencyId(`https://www.realestateview.com.au/real-estate-agency/stockdale-leggo-glenroy-4723/`)
  ).toEqual(4723);
});

/////////////////////////////////////////////////////

describe("Get Agency Url from Data", () => {
  test(`{
      agency-name: Jellis Craig,
      suburb:Richmond,
      agencyId: 13487
}`, () => {
    expect(
      Agency.getAgencyUrl({
        agencyName: "Jellis Craig",
        suburb: "Richmond",
        agencyId: 13487,
      })
    ).toEqual(`https://www.realestateview.com.au/real-estate-agency/jellis-craig-richmond-13487/`);
  });

  test(`{
      agency-name: Stockdale Leggo,
      suburb:Glenroy,
      agencyId: 4723
}`, () => {
    expect(
      Agency.getAgencyUrl({
        agencyName: "Stockdale Leggo",
        suburb: "Glenroy",
        agencyId: 4723,
      })
    ).toEqual(`https://www.realestateview.com.au/real-estate-agency/stockdale-leggo-glenroy-4723/`);
  });
});
