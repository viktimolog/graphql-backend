// Core
import {pubSub} from '../../init/pubSub';

// Events
import {events} from './events';

export const subscriptions = {
    book: {
        subscribe: () => pubSub.asyncIterator([events.BOOK_ADDED, events.BOOK_UPDATED])
    }
};
