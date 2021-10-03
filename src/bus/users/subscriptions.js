// Core
import {pubSub} from '../../init/pubSub';

// Events
import {events} from './events';

export const subscriptions = {
    userAdded: {
        subscribe: () => pubSub.asyncIterator([events.USER_ADDED])
    }
};
