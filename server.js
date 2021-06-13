const express = require('express')
const app = express()
// const expressGraphQL = require('express-graphql')
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema')

//graphiql is a server that allows us to make queries against our development server. Only intended to be used in dev environment
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(4000, () => {
  console.log('Listening on Port 4000')
})
