import { gql } from "@apollo/client";

export const GET_USERS = gql`
    query GetUsers {
        users {
                id
            username
            name
        }
    }
`;

export const GET_POSTS = gql`
query GET_POSTS($userId: Int!) {
  users_by_pk(id: $userId) {
    posts {
      user {
        username
      }
      type {
        id
        name
        icon
      }
      text
    }
  }
}
`;

export const GET_TYPES = gql`
    query GetTypes {
        types {
            id
            name
            icon
        }
    }
`;

/*
export const INSERT_POST = gql`
  
`;
*/