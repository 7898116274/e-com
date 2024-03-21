// AuthSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.withCredentials = true;

export const logincomplete = createAsyncThunk("auth/logincomplete", async (agr, { rejectWithValue }) => {
      try {
            const response = await axios.get("http://localhost:5000/api/user/verify");
            const result = await response.data; // Use response.data directly
            console.log(result);
            return result; // Return the data from the API call
      } catch (error) {
            console.log("No data recover")
            return rejectWithValue(error.message);
            // Return error message if API call fails
      }
});

const initialState = {
      userContact: null,
      isAuthenticated: false,
      loading: false,
      error: null,
};

const authSlice = createSlice({
      name: 'auth',
      initialState,
      reducers: {
            loginSuccess(state, action) {
                  state.userContact = action.payload.userContact;
                  state.isAuthenticated = true;
            },
            logout(state) {
                  state.userContact = null;
                  state.isAuthenticated = false;
            },
      },
      extraReducers: (builder) => {
            builder
                  .addCase(logincomplete.pending, (state) => {
                        state.loading = true;
                        state.error = null; // Clear any previous errors
                  })
                  .addCase(logincomplete.fulfilled, (state, action) => {
                        state.loading = false;
                        state.userContact = action.payload;
                  })
                  .addCase(logincomplete.rejected, (state, action) => {
                        state.loading = false;
                        state.error = action.payload;
                  });
      },
});

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;



