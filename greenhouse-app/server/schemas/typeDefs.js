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
    purchaseDate: String
    users: [User]
  }

  type Post {
    _id: ID
    createdAt: String
    users: [User]
  }

  type User {
    _id: ID
    socialTitle: String
    firstName: String
    lastName: String
    email: String
    password: String
    birthDate: String
    shippingAddress: String
    shippingCity: String
    shippingState: String
    shippingZip: String
    billingAddress: String
    billingCity: String
    billingState: String
    billingZip: String
    orders: [Order]
    posts: [Post]
  }

  type FAQ {
    _id: ID
    id: String
    type: String
    description: String
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
    faqs: [FAQ]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    faq: FAQ
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
