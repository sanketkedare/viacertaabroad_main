import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null
};

const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload; // Update state with user data
        },
        removeUser: (state) => {
            state.user = null; // Reset user to null
        }
    }
});

export const { setUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
