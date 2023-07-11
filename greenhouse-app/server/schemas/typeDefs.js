const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Product {
    _id: ID
    productName: String
    category: String
    description: String
    image: String
    quantity: Int
    price: Float
    plantStatus: String
  }

  type Order {
    _id: ID
    purchaseDate: String
  }

  type Post {
    _id: ID
    createdAt: String
    plantName: String
    category: String
    price: String
    image: String
    description: String
    productDetails: String
  }

  type User {
    _id: ID
    socialTitle: String
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    birthDate: String!
    shippingAddress: String!
    shippingCity: String!
    shippingState: String!
    shippingZip: String!
    billingAddress: String!
    billingCity: String!
    billingState: String!
    billingZip: String!
    orders: Order
    posts: Post
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    getAllProducts: [Product!]
    getProductById(_id: ID!): Product
    getProductsByCategory(category: String!): [Product!]!
    getUserById(_id: ID!): User
    order(_id: ID!): Order
    orders: [Order]
    post(_id: ID!): Post
    posts: [Post]
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
      birthDate: String!
      shippingAddress: String!
      shippingCity: String!
      shippingState: String!
      shippingZip: String!
      billingAddress: String!
      billingCity: String!
      billingState: String!
      billingZip: String!
    ): Auth
    addOrder(purchaseDate: String!): Order
    addPost(
      plantName: String!
      category: String!
      price: String!
      image: String!
      description: String!
      productDetails: String!
    ): Post
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;