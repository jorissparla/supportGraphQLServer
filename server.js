import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress  } from 'graphql-server-express';
import Schema from './data/schema';
import Mocks from './data/mocks';
import { printSchema } from 'graphql/utilities/schemaPrinter';

const GRAPHQL_PORT = 3003;

var graphQLServer = express();

graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress({
  schema: Schema
}));

graphQLServer.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

graphQLServer.listen(GRAPHQL_PORT, () =>
  console.log(`GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`)
);
