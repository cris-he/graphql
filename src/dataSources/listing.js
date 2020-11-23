const { RESTDataSource } = require("apollo-datasource-rest");

class ListingAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3001";
  }

  // leaving this inside the class to make the class easier to test
  listingReducer(listing) {
    return {
      id: listing.id,
      address: listing.address,
    };
  }

  async getAllListings() {
    // will get from http://localhost:3001/listings
    const response = await this.get("listings");

    // transform the raw launches to a more friendly
    return Array.isArray(response)
      ? response.map((listing) => this.listingReducer(listing))
      : [];
  }

  async getAllListingById(listingId) {
    // will get from http://localhost:3001/listings/${listingId}
    const response = await this.get(`listings/${listingId}`);

    // transform the raw launches to a more friendly
    return this.listingReducer(response);
  }
}

module.exports = ListingAPI;
