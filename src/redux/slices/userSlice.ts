import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    email: any;
    token: any;
}

const initialState: UserState = {
    email: localStorage.getItem('email') || null,
    token: localStorage.getItem('token') || null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<{ email: string; token: string }>) => {
            localStorage.setItem('email', action.payload.email);
            localStorage.setItem('token', action.payload.token);
            state.email = action.payload.email;
            state.token = action.payload.token;
        },
        removeUser: (state) => {
            localStorage.removeItem('email');
            localStorage.removeItem('token');
            state.email = null;
            state.token = null;
        },
    },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
