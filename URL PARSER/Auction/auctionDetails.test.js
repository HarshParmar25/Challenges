const Auction = require('./auctionDetails.js')

describe("Get Auction Data from Url", () => {
  test(`https://www.realestateview.com.au/sales-and-auction-results/in-vic-richmond-3121/`, () => {
    expect(
      Auction.getAuctionDataFromUrl(`https://www.realestateview.com.au/sales-and-auction-results/in-vic-richmond-3121/`)
    ).toEqual({
      state: "Vic",
      suburb: "Richmond",
      postalCode: 3121,
    });
  });

  test(`https://www.realestateview.com.au/sales-and-auction-results/in-vic-melbourne-3000/`, () => {
    expect(
      Auction.getAuctionDataFromUrl(
        `https://www.realestateview.com.au/sales-and-auction-results/in-vic-melbourne-3000/`
      )
    ).toEqual({
      state: "Vic",
      suburb: "Melbourne",
      postalCode: 3000,
    });
  });

  test(`https://www.realestateview.com.au/sales-and-auction-results/in-vic-ascot%20vale-3032/`, () => {
    expect(
      Auction.getAuctionDataFromUrl(
        `https://www.realestateview.com.au/sales-and-auction-results/in-vic-ascot%20vale-3032/`
      )
    ).toEqual({
      state: "Vic",
      suburb: "Ascot Vale",
      postalCode: 3032,
    });
  });

  test(`https://www.realestateview.com.au/sales-and-auction-results/in-vic-dumbalk%20north-3956/`, () => {
    expect(
      Auction.getAuctionDataFromUrl(
        `https://www.realestateview.com.au/sales-and-auction-results/in-vic-dumbalk%20north-3956/`
      )
    ).toEqual({
      state: "Vic",
      suburb: "Dumbalk North",
      postalCode: 3956,
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
      Auction.getAuctionUrlFromData({
        state: "Vic",
        suburb: "Richmond",
        postalCode: 3121,
      })
    ).toEqual(`https://www.realestateview.com.au/sales-and-auction-results/in-vic-richmond-3121/`);
  });

  test(`{
      state: "Vic",
      suburb: "Melbourne",
      postalCode: 3000,
    }`, () => {
    expect(
      Auction.getAuctionUrlFromData({
        state: "Vic",
        suburb: "Melbourne",
        postalCode: 3000,
      })
    ).toEqual(`https://www.realestateview.com.au/sales-and-auction-results/in-vic-melbourne-3000/`);
  });

  test(`{
        state: "vic",
        suburb: "Ascot Vale",
        postalCode: 3032,
      }`, () => {
    expect(
      Auction.getAuctionUrlFromData({
        state: "Vic",
        suburb: "Ascot Vale",
        postalCode: 3032,
      })
    ).toEqual(`https://www.realestateview.com.au/sales-and-auction-results/in-vic-ascot%20vale-3032/`);
  });

  test(`{
        state: "Vic",
        suburb: "Dumbalk North",
        postalCode: 3956,
      }`, () => {
    expect(
      Auction.getAuctionUrlFromData({
        state: "Vic",
        suburb: "Dumbalk North",
        postalCode: 3956,
      })
    ).toEqual(`https://www.realestateview.com.au/sales-and-auction-results/in-vic-dumbalk%20north-3956/`);
  });
});
