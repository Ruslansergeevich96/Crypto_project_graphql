const { gql } = require("apollo-server-express");

const typeDefs = gql(`

    type Portfolio {
        id: ID!
        name: String 
        assets: [Asset]
    }

type User {
        id: ID
        username: String
        age: Int
        posts: [Post]
    }
    type Post {
        id: ID
        title: String 
        content: String
    }

    input UserInput {
        id: ID
        username: String
        age: Int
        posts: [PostInput]
    }
    input PostInput {
        id: ID
        title: String
        content: String
    }

    # Queries 
    type Query {
        getAllUsers: [User!]!
        getUser(id: ID): User
    }

    # Mutations
    type Mutation {
        register(email: String!, password: String!, name: String): User
    }
    type Mutation {
        login (email: String!, password: String!): String 
    }
    type Mutation {
        createPortfolio(name: String): Portfolio
    }
`);

module.exports = { typeDefs };
