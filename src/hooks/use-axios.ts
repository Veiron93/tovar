import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from '@/redux/slices/userSlice';
import axios from 'axios';

export function useAxios() {
    const token = useSelector((state: any) => state.user.token);
    const dispatch = useDispatch();

    const instance = axios.create({
        baseURL: process.env.REACT_APP_SERVER_LINK,
        timeout: 5000,
        headers: { token: token, 'user-token': token },
    });

    instance.interceptors.response.use(
        (response) => response,
        (error: any) => {
            if (error.response && error.response.data.error.code === 0) {
                // если запрос не авторизован, перенаправляем на страницу входа
                console.log(error.response.data);
                dispatch(removeUser());
            } else {
                // для всех остальных ошибок выводим сообщение об ошибке
                alert('Ошибка ');
            }
            return Promise.reject(error);
        },
    );

    return {
        get: (url: any) => instance.get(url),
        post: (url: any, data: any) => instance.post(url, data),
        patch: (url: any, data: any) => instance.patch(url, data),
        put: (url: any, data: any) => instance.put(url, data),
        delete: (url: any) => instance.delete(url),
    };
}
