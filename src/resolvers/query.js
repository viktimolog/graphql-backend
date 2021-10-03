// Queries
import {queries as booksQueries} from '../bus/books/queries';
import {queries as starshipsQueries} from '../bus/starships/queries';
import {queries as usersQueries} from '../bus/users/queries';

export const Query = {
    ...booksQueries,
    ...starshipsQueries,
    ...usersQueries
};
