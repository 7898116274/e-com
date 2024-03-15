// AuthSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
      token: null,
      isAuthenticated: false,
};

const authSlice = createSlice({
      name: 'auth',
      initialState,
      reducers: {
            loginSuccess(state, action) {
                  state.token = action.payload.token;
                  state.isAuthenticated = true;
            },
            logoutSuccess(state) {
                  state.token = null;
                  state.isAuthenticated = false;
            },
      },
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;

export default authSlice.reducer;





// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const initialState = {
//       token: null,
//       userContact: null,
// };

// const AuthSlice = createSlice({
//       name: 'auth',
//       initialState,
//       reducers: {

//             loginSuccess: (state, action) => {
//                   state.token = action.payload;
//             },
//             logout: (state) => {
//                   state.token = null;
//             },
//       },
// });

// export const { loginSuccess, logout } = AuthSlice.actions;

// // export const selectToken = (state) => state.auth.token;

// export default AuthSlice.reducer;


// export const logincomplete = createAsyncThunk("loginuser/post", async (token) => {
//       try {
//             const request = await axios.post("http://localhost:5000/api/user/verify", token);
//             return request
//       } catch (error) {
//             throw new Error("No token found")
//       }
// })
