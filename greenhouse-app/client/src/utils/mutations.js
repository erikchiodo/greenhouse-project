import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!, $birthdate: Date!, $shippingAddress: String!, $shippingCity: String!, $shippingState: String!, $shippingZip: String!, $billingAddress: String!, $billingCity: String!, $billingState: String!, $billingZip: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password, birthdate: $birthdate, shippingAddress: $shippingAddress, shippingCity: $shippingCity, shippingState: $shippingState, shippingZip: $shippingZip, billingAddress: $billingAddress, billingCity: $billingCity, billingState: $billingState, billingZip: $billingZip) {
      token
      user {
        _id
        firstName
        lastName
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($users: [ID]!) {
    addOrder(users: $users) {
      _id
      purchaseDate
      users
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($users: [ID]!) {
    addPost(users: $users) {
      _id
      createdAt
      users
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($firstName: String, $lastName: String, $email: String, $password: String, $birthdate: Date, $shippingAddress: String, $shippingCity: String, $shippingState: String, $shippingZip: String, $billingAddress: String, $billingCity: String, $billingState: String, $billingZip: String) {
    updateUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password, birthdate: $birthdate, shippingAddress: $shippingAddress, shippingCity: $shippingCity, shippingState: $shippingState, shippingZip: $shippingZip, billingAddress: $billingAddress, billingCity: $billingCity, billingState: $billingState, billingZip: $billingZip) {
      _id
      firstName
      lastName
      email
    }
  }
`;
