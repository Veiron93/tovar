import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface themeState {
    theme: string | null;
}

const initialState: themeState = {
    theme: localStorage.getItem('theme'),
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<{ theme: string }>) => {
            state.theme = action.payload.theme;
            localStorage.setItem('theme', action.payload.theme);
        },
    },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
