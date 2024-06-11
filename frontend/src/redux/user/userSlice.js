import { createSlice } from "@reduxjs/toolkit";

// initial state

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

// create slice

const userSlice = createSlice({
  name: "user", //?name for slice
  initialState, //?initial state
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;

export default userSlice.reducer;
