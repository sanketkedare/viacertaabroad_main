import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice.js"; // Import the reducer

const store = configureStore({
    reducer: {
        user: authReducer
    }
});

export default store;
