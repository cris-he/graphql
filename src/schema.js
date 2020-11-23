const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    listings: [Listing]
    listing(id: ID!): Listing
    agents: Agent
    agent(id: ID!): Agent
  }

  type Mutation {
    addListing(listingId: ID!): Listing!
    removeListing(listingId: ID!): Listing!
  }

  type Listing {
    id: ID!
    address: String
    agent: agent
  }

  type Agent {
    id: ID!
    name: String
    listings: [Listing]
  }
`;

module.exports = typeDefs;
