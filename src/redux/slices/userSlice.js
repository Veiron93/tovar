import { createSlice } from "@reduxjs/toolkit";


const getUser = () => {
    const storedEmail = localStorage.getItem('email');
    const storedToken = localStorage.getItem('token');

    return {storedEmail, storedToken}
}

const {storedEmail, storedToken} = getUser();

const initialState = {
   email: storedEmail,
   token: storedToken,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
        },
        removeUser(state) {
            state.email = null;
            state.token = null;
        },
    },
});

export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;