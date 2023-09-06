import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/user-slice";
import { todosSlice } from "./slices/todos-slice";

export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [todosSlice.name]: todosSlice.reducer,
  },
});
