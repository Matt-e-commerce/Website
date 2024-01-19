import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { signIn, signUp,forgetPassword ,updatePassword} from "../features/auth";

export const signUpAsync = createAsyncThunk("auth/signUp", async (userData) => {
    const response = await signUp(userData);
    return response.data; // Assuming your API returns data
});
  
  export const signInAsync = createAsyncThunk("auth/signIn", async (userData) => {
    const response = await signIn(userData);
    return response.data; // Assuming your API returns data
  });
  export const forgetPasswordAsync = createAsyncThunk("auth/forgetPassword", async (userData) => {
    const response = await forgetPassword(userData);
    return response.data; // Assuming your API returns data
  });
  export const updatePasswordAsync = createAsyncThunk("auth/updatePassword", async (userData,token) => {
    const response = await updatePassword(userData);
    return response.data; // Assuming your API returns data
  });
// Create a slice of the Redux store
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    userInfo: null,
    loading: false,
    error: false,
  },
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.userInfo = null;
    },
    resetState: (state) => {
      state.userInfo = null;
    },
    signUpSuccess: (state, action) => {
      state.userInfo = action.payload; // Ensure that it updates the entire user object
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUpAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
      })
      .addCase(signUpAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(signInAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(signInAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
      })
      .addCase(signInAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(forgetPasswordAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(forgetPasswordAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
      })
      .addCase(forgetPasswordAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export the reducer and action creators
export const { logout,resetState } = authSlice.actions;
export default authSlice.reducer;
