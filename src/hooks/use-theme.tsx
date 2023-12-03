import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from '@/redux/slices/themeSlice';

export function useTheme() {
    const { theme } = useSelector((state: any) => state.theme);
    const dispatch = useDispatch();
    return {
        theme,
        setTheme: (newTheme: any) => dispatch(setTheme(newTheme)),
    };
}
