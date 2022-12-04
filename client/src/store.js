import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
  middleware: middleware
});

export default store;