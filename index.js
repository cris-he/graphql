const { ApolloServer } = require("apollo-server");

const typeDefs = require("./src/schema");

const resolvers = require("./src/resolvers");

const { createStore } = require("./src/utils/store");
const store = createStore();

const ListingAPI = require("./src/dataSources/listing");
const UserAPI = require("./src/dataSources/user");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    listingAPI: new ListingAPI(),
    userAPI: new UserAPI({ store }),
  }),
});

server.listen().then(() => {
  console.log(`
      Server is running!
      Listening on port 4000
    `);
});
