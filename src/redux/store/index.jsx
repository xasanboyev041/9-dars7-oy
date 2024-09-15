import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/AuthSlices";
import { api } from "../api";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
