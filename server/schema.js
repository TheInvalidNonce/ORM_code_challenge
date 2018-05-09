import './data/books-test-collection' // Make available the books JSON file

let {
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  // This is used to create required fields and arguments
  GraphQLNonNull,
  // This is the class we need to create the schema
  GraphQLSchema,
} = require('graphql')

