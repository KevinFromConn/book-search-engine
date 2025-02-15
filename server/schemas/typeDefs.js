const { gql } = require("apollo-server-express");

const typeDefs = gql`
  
  type User {
      _id: ID
      username: String!
      email: String!
      password: String!
      savedBooks: [Book]
  }
  
  type Book {
      bookId: String!
      authors: [String!]
      description: String!
      title: String!
      image: String
      link: String
  }

  type Query {
      me: User
  }

  input SaveBookInput {
      bookId: String!
      authors: [String]
      description: String!
      title: String!
      image: String
      link: String
  }

  type Mutation {
      login(email: String!, password: String!): Auth
      addUser(username: String!, email: String!, password: String!): Auth
      saveBook(input: SaveBookInput): User
      removeBook(bookId: String!): User
  }

  type Auth {
      token: ID!
      user: User
  }
`;

module.exports = typeDefs;