const graphql = require('graphql')
const axios = require('axios')
// const _ = require('lodash')
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema
} = graphql

// const users = [{id: '25', firstName: 'Mark', age: 20}, {id: '2', firstName: 'Yesenia', age: 21}]

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: {type: GraphQLString},
    firstName: {type: GraphQLString},
    age: {type: GraphQLInt}
  }
});
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
    type: UserType,
    args: {id: {type: GraphQLString}},
    async resolve(parentValue, args) {

      const {data} = await axios.get(`http://localhost:3000/users/${args.id}`)
  return data
      // return _.find(users, {id: args.id})

    }
   }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
