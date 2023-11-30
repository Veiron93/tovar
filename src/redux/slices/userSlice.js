import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   email: localStorage.getItem('email'),
   token: localStorage.getItem('token'),
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            localStorage.setItem('email', action.payload.email);
            localStorage.setItem('token', action.payload.token);
            state.email = action.payload.email;
            state.token = action.payload.token;
        },
        removeUser(state) {
            localStorage.removeItem('email');
            localStorage.removeItem('token');
            state.email = null;
            state.token = null;
        },
    },
});

export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;