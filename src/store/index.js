import { configureStore } from '@reduxjs/toolkit';

import companyReducer from './companySlice';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    company: companyReducer,
    auth: authReducer,
  },
});

export default store;
