// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/AuthSlice';

const store = configureStore({
      reducer: {
            auth: authReducer,
      },
});

export default store;




// import { configureStore, combineReducers } from "@reduxjs/toolkit"
// import authReducer from "./slice/AuthSlice"

// const rootReducer = combineReducers({
//       auth: authReducer

// }
// )

// const store = configureStore({
//       reducer: rootReducer,
// })

// export default store;