const { gql } = require('apollo-server-express');

const typeDefs = gql`
<<<<<<< Updated upstream
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
  }

  type Post {
    _id: ID
    createdAt: String
    plantName: String
    category: Category
    price: String
    image: String
    description: String
    productDetails: String
  }

=======
>>>>>>> Stashed changes
  type User {
    _id: ID!
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

  type Product {
    _id: ID!
    productName: String
    description: String
    image: String
    quantity: Int
    price: Float
    plantStatus: String
    category: Category
    faqs: [FAQ]
  }

  type Category {
    _id: ID!
    name: String
  }

  type Order {
    _id: ID!
    purchaseDate: String
    products: [Product]
  }

  type Post {
    _id: ID!
    createdAt: String
    users: [User]
  }

  type FAQ {
    _id: ID!
    common_name: String
    section: Section
    product: Product
  }

  type Section {
    _id: ID!
    sectionTitle: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(_id: ID!): User
    categories: [Category]
<<<<<<< Updated upstream
    category(_id: ID!): Category
    products(category: ID, name: String): [Product]
=======
    products(category: String, name: String): [Product]
>>>>>>> Stashed changes
    product(_id: ID!): Product
    orders: [Order]
    order(_id: ID!): Order
<<<<<<< Updated upstream
    orders: [Order]
    post(_id: ID!): Post
    posts: [Post]
    checkout(products: [ID]!): Checkout
=======
    posts: [Post]
    post(_id: ID!): Post
    faqs: [FAQ]
    checkout(products: [ID!]!): Order
>>>>>>> Stashed changes
  }

  type Mutation {
    addUser(
      socialTitle: String
      firstName: String!
      lastName: String!
      email: String!
      password: String!
<<<<<<< Updated upstream
      birthDate: String!
      shippingAddress: String!
      shippingCity: String!
      shippingState: String!
      shippingZip: String!
      billingAddress: String!
      billingCity: String!
      billingState: String!
      billingZip: String!
=======
      birthDate: String
      shippingAddress: String
      shippingCity: String
      shippingState: String
      shippingZip: String
      billingAddress: String
      billingCity: String
      billingState: String
      billingZip: String
>>>>>>> Stashed changes
    ): Auth
    addOrder(users: [ID]!): Order
    addPost(users: [ID]!): Post
    updateUser(
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
    ): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
<<<<<<< Updated upstream
=======
  
>>>>>>> Stashed changes
`;

module.exports = typeDefs;
