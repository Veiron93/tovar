import { configureStore } from '@reduxjs/toolkit';
import user from './slices/userSlice';
import theme from './slices/themeSlice';
export const store = configureStore({
    reducer: {
        user,
        theme,
    },
});
