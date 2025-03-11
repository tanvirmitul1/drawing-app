import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice"; // Example slice

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Add reducers here
  },
});

// Define RootState and AppDispatch for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
