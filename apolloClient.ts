import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_HASURA_URI,
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-access-key": process.env.NEXT_PUBLIC_HASURA_SECRET ?? "",
  },
});
