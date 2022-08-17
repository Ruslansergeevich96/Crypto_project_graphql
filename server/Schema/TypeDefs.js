const {gql} = require ('apollo-server-express')

const typeDefs = gql(`

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
        username: String!
        age: Int!
        posts: [PostInput]
    }
    input PostInput {
        id: ID
        title: String!
        content: String!
    }

    # Queries 
    type Query {
        getAllUsers: [User!]!
    }

    # Mutations

`); 

module.exports = { typeDefs };