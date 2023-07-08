import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query getUser($id: ID!) {
    user(_id: $id) {
      socialTitle
      firstName
      lastName
      email
      birthdate
      shippingAddress
      shippingCity
      shippingState
      shippingZip
      billingAddress
      billingCity
      billingState
      billingZip
      orders {
        _id
        purchaseDate
      }
      posts {
        _id
        createdAt
      }
    }
  }
`;

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      plantStatus
      faqs {
        _id
        common_name
      }
      category {
        _id
      }
    }
  }
`;

export const QUERY_ORDERS = gql`
  query getUserOrders($userId: ID!) {
    user(_id: $userId) {
      orders {
        _id
        purchaseDate
      }
    }
  }
`;

export const QUERY_POSTS = gql`
  query getUserPosts($userId: ID!) {
    user(_id: $userId) {
      posts {
        _id
        createdAt
      }
    }
  }
`;

export const QUERY_FAQS = gql`
  {
    faqs {
      _id
      common_name
      section {
        _id
      }
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      quantity
      image
      plantStatus
      category {
        _id
      }
    }
  }
`;
