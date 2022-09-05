class Listing {
  static getArea(url) {
    let slug = url.split("/").splice(4, 1).join();
    let state = slug.split("-").splice(-1).join();
    return { slug, state };
  }

  static getSaleMethod(url) {
    let slug = url.split("/").splice(5, 1).join();
    if (slug.includes("buy")) return "buy";
    if (slug.includes("rent")) return "rent";
    if (slug.includes("sold")) return "sold";
  }

  static getlistingId(url) {
    let slug = url.split("/").splice(5, 1).join();
    return slug.split("-").splice(-1).join().toString();
  }

  static getListingDataFromUrl(url) {
    const saleMethod = this.getSaleMethod(url);
    const listingId = this.getlistingId(url);
    const { slug, state } = this.getArea(url);
    return { saleMethod, listingId, slug, state };
  }

  static getUrlFromListingData({ saleMethod, listingId, address, suburb, state }) {
    let baseUrl = `https://www.realestateview.com.au/real-estate/`;
    if (saleMethod === "rent") baseUrl = `https://www.realestateview.com.au/rental-properties/`;
    let slug = `${address}-${suburb}-${state}`.replace(/\/|\s/g, "-");
    return `${baseUrl}${slug}/property-details-${saleMethod}-residential-${listingId}/`;
  }
}


module.exports = Listing;
