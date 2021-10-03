// Core
import { AuthenticationError } from 'apollo-server-express';
import jwt from 'jsonwebtoken';

// DB
import { db } from './db';

import { USER_SECRET } from '../../init/config';

export const mutations = {
    signUp: (_, user) => {
        db.push(user);

        return user;
    },
    login: (_, { name, password }, ctx) => {
        const user = db.find((currentUser) => currentUser.name === name);
        const message = 'Your credentials is wrong!';

        if(!user) {
            throw new AuthenticationError(message);
        }

        const isUserValid = user.password === password;

        if(!isUserValid) {
            throw new AuthenticationError(message);
        }

        const token = jwt.sign({ username: name }, USER_SECRET);
        ctx.req.session.token = token;

        return user;
    }
};
