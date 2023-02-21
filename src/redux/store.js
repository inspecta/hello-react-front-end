import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './features/slice';

const store = configureStore({
  reducer: {
    greetings: greetingsReducer,
  },
});

export default store;
