import { defineConfig as defineGatewayConfig } from '@graphql-hive/gateway';
import resolvers from './src/resolvers';

export const gatewayConfig = defineGatewayConfig({
  supergraph: './supergraph.graphql',

  // TODO: Configure Redis cache properly for response caching
  // Response caching is currently disabled to allow endpoint testing
  
  // Custom resolvers for extended fields
  additionalResolvers: resolvers,

  // Enable playground
  graphiql: true,
});
