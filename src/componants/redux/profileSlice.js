import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentProfile: null,
  loading: false,
  error: false,
};

export const ProfileSlice = createSlice({
  name: "Profile",
  initialState,
  reducers: {
    profilefetchStart: (state) => {
      state.loading = true;
    },
    profilefetchSuccess: (state, action) => {
      state.loading = false;
      state.currentProfile = action.payload;
    },
    profilefetchFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    profilefetchcclear: (state) => {
      state.loading = false;
      state.currentProfile = null;
    },
  },
});

export const {
  profilefetchStart,
  profilefetchSuccess,
  profilefetchFailure,
  profilefetchcclear,
} = ProfileSlice.actions;

export default ProfileSlice.reducer;
