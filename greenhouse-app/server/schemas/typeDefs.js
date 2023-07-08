const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    categoryName: String
  }

  type Product {
    _id: ID
    productName: String
    description: String
    image: String
    quantity: Int
    price: Float
    plantStatus: String
    category: Category
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
    faq(_id: ID!): FAQ
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    addOrder(users: [ID]!): Order
    addPost(users: [ID]!): Post
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
  type Section {
    id: Int
    type: String
    description: String
}

type FAQ {
    _id: ID
    id: Int
    common_name: String
    description: String
    section: [Section]
}

`;

module.exports = typeDefs;
