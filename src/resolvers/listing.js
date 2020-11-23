module.exports.getListings = async (_, __, { dataSources }) =>
  dataSources.listingAPI.getListings();

module.exports.getListingById = async (_, { id }, { dataSources }) =>
  dataSources.listingAPI.getListingById(id);
