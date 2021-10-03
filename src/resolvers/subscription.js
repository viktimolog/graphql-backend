// Subscriptions
import {subscriptions as userSubscription} from '../bus/users/subscriptions';
import {subscriptions as bookSubscription} from '../bus/books/subscriptions';

export const Subscription = {
    ...userSubscription,
    ...bookSubscription
};
