module.exports.getAgents = async (_, __, { dataSources }) =>
  dataSources.agentAPI.getAgents();

module.exports.getAgentById = async (_, { id }, { dataSources }) =>
  dataSources.agentAPI.getAgentById(id);
