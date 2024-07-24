// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/theme/themeSlice'; // Import default export correctly
import authSlice from './authSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth : authSlice,
  },
});

export default store;
