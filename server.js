import express from 'express';
const https = require('https');
const fs = require('fs');
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import schema from './data/schema';
import Mocks from './data/mocks';
import cors from 'cors';

const PORT = 4000;
const server = express();
server.use('*', cors());
server.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({
    schema
  })
);

server.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql'
  })
);
https
  .createServer(
    {
      key: fs.readFileSync('key.pem'),
      cert: fs.readFileSync('cert.pem')
    },
    server
  )
  .listen(55555);
server.listen(PORT, () =>
  console.log(`GraphQL Server is now running on http://localhost:${PORT}`)
);
