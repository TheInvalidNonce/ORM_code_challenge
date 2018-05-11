const graphql = require('graphql')
const data = require('./data/data')

// This is used to create required fields and arguments
const {
  // This is the class we need to create the schema
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
} = require('graphql')

// Here we define the BookType GraphQL object schema
const BookType = new GraphQLObjectType({
  name: 'Book',
  description: 'This is a book.',
  fields: () => ({
    _id: {type: GraphQLID},
    title: {type: GraphQLString},
    price: {type: GraphQLString},
    image: {type: GraphQLString}

  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    books: {
      type: new GraphQLList(BookType),
      args: { page: { type: GraphQLInt} },
      resolve(parent, args) {
        return data
          .map(book => Object.assign({}, book, { _id: book._id.$oid}))
          .slice(args.page - 1 * 10, args.page * 10)
      }
    },
    book: {
      type: BookType,
      args: { _id: { type: GraphQLString}},
      resolve(parent, args) {
        const book = data.find(book => book._id.$oid === args._id)
        const modifiedBook = Object.assign({}, book, { _id: book._id.$oid})
        return modifiedBook
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})


