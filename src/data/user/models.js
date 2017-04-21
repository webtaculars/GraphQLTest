import {
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID
} from 'graphql';
import mongoose from 'mongoose';
// schema for collection
const schema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    }
});
// define User collection and connect schema to it
export let UserModel = mongoose.model('User', schema);
// type for queries
export let UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        firstName: {
            type: GraphQLString
        },
        lastName: {
            type: GraphQLString
        }
    }
});
// type for mutations
export let UserInput = new GraphQLInputObjectType({
    name: "UserInput",
    fields: {
        firstName: {
            type: GraphQLString
        },
        lastName: {
            type: GraphQLString
        }
    }
});
