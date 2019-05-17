// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import counter from './counter';
import hobbyReducer from './hobbies/hobbyReducer';

export default function createRootReducer(history: History) {
  return combineReducers<{}, *>({
    router: connectRouter(history),
    counter,
    hobbies: hobbyReducer
  });
}
