const express = require('express');
const {
  graphqlExpress,
  graphiqlExpress,
} = require('graphql-server-express');
const bodyParser = require('body-parser');
const schema = require('./api/schema');
const cors = require('cors')

const PORT = 4000;
const server = express();


server.use('*', cors({ origin: 'http://localhost:3000' }));
// Serve the static files from the React app
server.use(express.static(path.join(__dirname, 'frontend/build')));

server.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}));

server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

server.listen(PORT);
console.log('GraphQL API Server up and running at localhost:' + PORT);

