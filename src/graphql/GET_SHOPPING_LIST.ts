import { gql } from "@apollo/client";

export const GET_SHOPPING_LIST = gql`
  query GetShoppingList($id: String!) {
    shoppingList(id: $id) {
      id
      name
      user {
        id
        firstName
        lastName
      }
      sharedUsers {
        id
        firstName
        lastName
      }
      listProducts {
        id
        name
        quantity
        price
        brand
        market
        purchased
        shoppingList {
          id
        }
      }
    }
  }
`;
