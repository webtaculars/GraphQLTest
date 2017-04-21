import {
    GraphQLID,
    GraphQLList,
    GraphQLNonNull
} from 'graphql';
// import models and types from models.js
import {UserModel, UserType, UserInput} from './models';
// create field for receiving single user
const User = {
    type: UserType,
    args: {
        // argument for searching user
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    // method that forms request and returns data
    resolve (root, params, options) {
        return UserModel
            .findById(params.id)
            .exec();  // return JSON
    }
};
const Users = {
    type: new GraphQLList(UserType),
    args: {},
    resolve (root, params, options) {
        return UserModel
            .find()
            .exec();
    }
};
export default {
    User: User,
    Users: Users,
}
