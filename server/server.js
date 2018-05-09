const express = require('express')
const expressGraphql = require('express-graphql')
const schema = require('./schema/schema')
const cors = require('cors')

// Create the express server
const app = express()

// This is to allow Cross Origin Resource Sharing for the purposes of this example app
app.use(cors())

// Create the GraphQL endpoint of the Express server
app.use(
  '/graphql',
  expressGraphql({
    schema,
    graphiql: true
  })
)
// Listen on port 4000, the 2nd argument is what you want to console.log out when Express starts
app.listen(4000, () => console.log('Express GraphQL Server Now Running on localhost:4000/graphql'))