const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');


const typeDefs = `
  type Category {
    id: ID!                
    name: String
    keywords:[String]
 }

 type Keyword {   
   name:String
 }

 type Query {
  categories: [Category]    # "[]" means this is a list of channels
}

# The mutation root type, used to define all mutations.
type Mutation {
  # A mutation to add a new category to the list of channels

  addCategory(name: String!): Category

  deleteCategory(name:String!):Category

  addKeyWordToCategory(categoryName:String!,keyword:String!):[Category]
  
  deleteKeyWordFromCatgory(categoryName:String!,keyword:String!):[Category]
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
module.exports = schema;