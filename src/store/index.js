import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/authApi";
import userSlice, { setUser } from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    user: userSlice,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

const storedUser = localStorage.getItem("user");

if (storedUser) {
  // Check if storedUser is not null before parsing and dispatching
  try {
    const parsedUser = JSON.parse(storedUser);
    store.dispatch(setUser(parsedUser));
  } catch (error) {
    console.error("Error parsing user data from localStorage:", error);
  }
}
