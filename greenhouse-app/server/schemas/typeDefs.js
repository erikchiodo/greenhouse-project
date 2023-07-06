const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    plantStatus: String
    category: Category
    faqs: FAQ
  }

  type Order {
    _id: ID
    purchaseDate: Date
    users: [User]
  }

  type Post {
    _id: ID
    createdAt: Date
    users: [User]
  }

  type SocialTitle = "Mr." | "Mrs.";

  type ShippingAddress = {
  address: string;
  city: string;
  state: string;
  zip: string;
  };

  type BillingAddress = {
  address: string;
  city: string;
  state: string;
  zip: string;
  };

  type User {
    _id: ID
    socialTitle: SocialTitle
    firstName: String
    lastName: String
    email: String
    password: String
    birthDate: Date
    shippingAddress: ShippingAddress
    billingAddress: BillingAddress
    orders: [Order]
    posts: [Post]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    orders: [Order]
    posts: [Post]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    post(_id: ID!): Post
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(users: [ID]!): Order
    addPost(users: [ID]!): Post
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
