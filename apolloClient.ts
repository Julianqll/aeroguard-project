import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.HASURA_URI,
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-access-key": process.env.HASURA_SECRET ?? "",
  },
});
