// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice.ts';
import { authApi } from '../features/auth/authApi';
import { productApi } from '../features/products/productsApi';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
