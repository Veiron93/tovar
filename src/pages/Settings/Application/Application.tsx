import Button from '@/ui-components/Button/Button';
import { useDispatch } from 'react-redux';
import { useTheme } from '@/hooks/use-theme';

const Application = function () {
    const dispatch = useDispatch();
    const { setTheme } = useTheme();
    const setLightTheme = () => {
        dispatch(setTheme({ theme: 'light' }));
    };

    const setDarkTheme = () => {
        dispatch(setTheme({ theme: 'dark' }));
    };

    return (
        <div className="index-wrapper">
            <Button onPress={setDarkTheme} text="Темная тема" />
            <Button onPress={setLightTheme} text="Светлая тема" />
        </div>
    );
};

export default Application;
