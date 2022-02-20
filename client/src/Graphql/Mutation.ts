import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUser($name: String!, $username: String!, $password: String!) {
    CreateUser(name: $name, username: $username, password: $password) {
      id
      name
      username
    }
  }
`;
export const UPDATE_PASSWORD = gql`
  mutation UpdatePassword(
    $username: String!
    $oldPassword: String!
    $newPassword: String!
  ) {
    UpdatePassword(
      username: $username
      oldPassword: $oldPassword
      newPassword: $newPassword
    ) {
      message
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    DeleteUser(id: $id) {
      message
    }
  }
`;
