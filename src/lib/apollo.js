import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  // uri: "https://democontenthub.wpengine.com/graphql",
  uri: "http://localhost:8080/graphql",
  cache: new InMemoryCache()
});

export default client;
