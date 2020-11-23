module.exports.getUsers = async (_, __, { dataSources }) =>
  dataSources.userAPI.getUsers();

module.exports.getUserById = async (_, { id }, { dataSources }) =>
  dataSources.userAPI.getUserById(id);
