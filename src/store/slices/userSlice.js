import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    setUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    unSetUser: (state) => {
      return {};
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, unSetUser } = userSlice.actions;

export default userSlice.reducer;
