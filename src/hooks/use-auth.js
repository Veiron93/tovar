import { useSelector } from "react-redux/es/hooks/useSelector";

export function useAuth() {
    const {email, token} = useSelector(state => state.user);

    return {
        isAuth: !!token,
        email,
        token,
    }
}