import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://summary-pony-95.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-access-key": "QL7PDnWyc4LguG0QaXwZwFMfXjF8KYcF7nHuM01nvY5w5LH3RUcA6362BFVa36E3",
  },
});
