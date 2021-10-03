// Core
import {ApolloServer} from 'apollo-server-express';

// Schema Types
import schema from './types.graphql';

// Resolvers
import {resolvers} from '../resolvers';

// API
import {api as starshipsAPI} from '../bus/starships/dataSource';

const apolloServer = new ApolloServer({
    typeDefs: schema,
    resolvers,
    dataSources: () => {
        return {
            starshipsAPI
        }
    },
    context: ({req, res}) => {
        return {req, res};
    },
    playground: {
        settings: {
            "request.credentials": "include"
        }
    }
});

// Endpoints
const {graphqlPath, subscriptionsPath} = apolloServer;

export {apolloServer, graphqlPath, subscriptionsPath};
