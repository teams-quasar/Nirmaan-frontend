// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice'; 
import authSlice from './authSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth : authSlice,
  },
});

export default store;
