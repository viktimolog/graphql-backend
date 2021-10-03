// Mutations
import {mutations as booksMutations} from '../bus/books/mutations';
import {mutations as usersMutations} from '../bus/users/mutations';

export const Mutation = {
    ...booksMutations,
    ...usersMutations
};
