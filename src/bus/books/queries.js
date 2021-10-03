// Core
import {ApolloError} from 'apollo-server-express';

// Model
import {getBooks, getBookById} from './model';

export const queries = {
    books: () => getBooks(),
    book: (_, {id}) => {
        try {
            return getBookById(id);
        } catch ({message}) {
            throw new ApolloError(message);
        }
    }
};
