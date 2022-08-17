require('dotenv').config()
const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const cors = require('cors')
const { ApolloServer } = require('apollo-server-express')
const schema = require('./schema')
const { typeDefs } = require('./Schema/TypeDefs')

const PORT = process.env.PORT || 5000

const app = express()

const server = new ApolloServer({ typeDefs, resolvers })

server.applyMiddleware({app})

app.use(cors())
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema
}))

app.listen(PORT,  function(err){

    if (!err)
      console.log (`Crypto Server (cryptoforest) started on PORT = ${PORT}`);
    else console.log(err)
  
  });