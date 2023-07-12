const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Product {
    _id: ID
    productName: String!
    description: String!
    image: String
    price: Float!
    quantity: Int!
    plantStatus: String!
    category: String!
  }
  type Order {
    _id: ID
    purchaseDate: String
    status: String
    total: String
  }

  input ProductInput {
    productName: String!
    description: String!
    image: String
    price: Float!
    quantity: Int!
    plantStatus: String!
    category: String!
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
    orders: [Order]
    products: [Product]
  }

  input UserInput {
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
    checkout(products: [ID]!): Checkout
    getAllOrders: [Order!]
    getOrderById(_id: ID!): Order
  }

  type Mutation {
    addUser(
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
    ): Auth
    addOrder(
      purchaseDate: String
      status: String
      total: String
      ): Order
    addProduct(
      productName: String!
      description: String!
      image: String
      price: Float!
      quantity: Int!
      plantStatus: String!
      category: String!
    ): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;