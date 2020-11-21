import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/counter/controller/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
