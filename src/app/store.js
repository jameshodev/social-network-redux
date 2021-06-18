// Memory layer or the onion layer
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import appReducer from '../features/appSlice';

export const store = configureStore({
  // reducer listens to any changes
  reducer: {
    user: userReducer,
    app: appReducer,
  },
});
