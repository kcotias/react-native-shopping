import { gql } from '@apollo/client';

export const POC_QUERY = gql`
  query pocSearchMethod($now: DateTime!, $algorithm: String!, $lat: String!, $long: String!) {
    pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {
      id
    }
  }
`;
