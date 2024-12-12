import {configureStore} from '@reduxjs/toolkit';
import {GitaApiSlice} from './GitaApiSlice';

const store = configureStore({
  reducer: {
    [GitaApiSlice.reducerPath]: GitaApiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {warnAfter: 256},
    }).concat(GitaApiSlice.middleware),
});

export default store;
