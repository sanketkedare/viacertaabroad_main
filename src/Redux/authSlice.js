import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null
};

const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload; // Update state with user data
        },
        removeUser: (state) => {
            state.user = null; // Reset user to null
        }
    }
});

export const { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
