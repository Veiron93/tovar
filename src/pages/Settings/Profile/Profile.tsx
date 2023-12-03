import { useDispatch } from 'react-redux';
import { removeUser } from '@/redux/slices/userSlice';
import { useAuth } from '@/hooks/use-auth';

const Profile = function () {
    const dispatch = useDispatch();
    const { isAuth, email } = useAuth();

    return (
        <div className="index-wrapper">
            {email}
            <button onClick={() => dispatch(removeUser())}>Выйти</button>
        </div>
    );
};

export default Profile;
