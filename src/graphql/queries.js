// src/graphql/queries.js
import { gql } from '@apollo/client';

export const GET_PRODUCT_DETAILS = gql`
  query GetProductDetails($productId: ID!) {
    product(id: $productId) {
      ... on SimpleProduct {
        id
        name
        seller
        image
        price
        inventory
      }
      ... on RentableProduct {
        id
        name
        seller
        image
        price
        rentalType
        availability
      }
      ... on Space {
        id
        name
        seller
        image
        price
        rentalType
        availability
        location
      }
    }
  }
`;
