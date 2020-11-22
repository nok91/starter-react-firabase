import { configureStore } from '@reduxjs/toolkit';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from '../components/Counter/controller/counterSlice';
import { firebaseReducer } from 'react-redux-firebase';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})

export default configureStore({
  reducer: {
    counter: counterReducer,
    firebase: firebaseReducer
  },
  middleware: (getDefaultMiddleware) => customizedMiddleware
});
