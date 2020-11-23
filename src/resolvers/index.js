const userResolvers = require("./user");
const agentResolvers = require("./agent");
const listingResolvers = require("./listing");

module.exports = {
  Query: {
    listings: listingResolvers.getListings,
    listing: listingResolvers.getListingById,
    agents: agentResolvers.getAgents,
    agent: agentResolvers.getAgentById,
    users: userResolvers.getUsers,
    user: userResolvers.getUserById,
  },

  Agent: {
    // listings: listingResolvers.getListings,
  },
};
