import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {},
    clearAllUsers(state, action) {
      state.length = 0;
    },
  },
});

// console.log("userSlice actions", userSlice.actions);

export { userSlice };
export const { addUser, removeUser, clearAllUsers } = userSlice.actions;
