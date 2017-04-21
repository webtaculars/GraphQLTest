// koa - node.js framework on basis of which the server is launched
// koa-router - routing on the server
// graphql-server-koa bridge module for Koa and GraphQL
import koa from 'koa'; // koa@2
import koaRouter from 'koa-router'; // koa-router@next
import koaBody from 'koa-bodyparser'; // koa-bodyparser@next
import {graphqlKoa, graphiqlKoa} from 'graphql-server-koa';
// acquaintance with schema is waiting ahead
// db.js - file responsible for connecting to MongoDB
import schema from './data/schema'
import './db'
const app = new koa();
const router = new koaRouter();
const PORT = 3000;
// koaBody is needed just for POST.
app.use(koaBody());
// POST and GET requests will be redirected to GraphQL schema
router.post('/graphql', graphqlKoa({schema: schema}));
router.get('/graphql', graphqlKoa({schema: schema}));
// Tool for test your queries: localhost:3000/graphiql
router.get('/graphiql', graphiqlKoa({endpointURL: '/graphql'}));
app.use(router.routes());
app.use(router.allowedMethods());
// server startup
app.listen(PORT, () => {
    console.log('Server is running on', 'localhost:' + PORT);
    console.log('GraphiQL dashboard', 'localhost:' + PORT + '/graphiql');
});
