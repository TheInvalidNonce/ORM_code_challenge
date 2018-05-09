const graphql = require('graphql')
const data = require('./data/data')

let {
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  // This is used to create required fields and arguments
  GraphQLNonNull,
  // This is the class we need to create the schema
  GraphQLSchema,
} = require('graphql')

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  description: 'This is an author.',
  fields: () => ({
    
  })
})

const BookType = new GraphQLObjectType({
  name: 'Book',
  description: 'This is a book.',
  fields: () => ({
    '_id': {type: GraphQLString},
    'primary_isbn': {type: GraphQLString},
    'title': {type: GraphQLString}
  })
})