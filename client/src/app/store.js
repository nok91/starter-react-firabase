import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/controller/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
