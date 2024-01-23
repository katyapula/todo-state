import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices';

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;