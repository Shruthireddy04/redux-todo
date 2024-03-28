import { createStore } from 'redux';

import todoReducer from './Todo/todoReducers';

const store = createStore(todoReducer);
export default store;
