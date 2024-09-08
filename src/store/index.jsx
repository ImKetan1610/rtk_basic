import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/UserSlice";

const store = configureStore({
  reducer: userSlice.reducer,
});

export default store;
