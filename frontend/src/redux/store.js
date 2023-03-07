import { configureStore } from '@reduxjs/toolkit';
import sampleSlice from './slices/sampleSlice.js';

const store = configureStore({
    reducer: {
        sampleSliceData: sampleSlice,
    },
  });
  export default store;