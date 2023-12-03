import LoginForm from '@/components/AuthForm/LoginForm';
import PasswordForm from '@/components/AuthForm/PasswordForm';
import MailConfirmForm from '@/components/AuthForm/MailConfirmForm';
import '../../app.scss';
import styles from './index.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setUser } from '@/redux/slices/userSlice';
import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/use-auth';

const IndexAuth = function () {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isUserExists, setIsUserExists] = useState(false);
    const [activeForm, setActiveForm] = useState('login');
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleLogin = (email: any) => {
        axios
            .get(
                `${process.env.REACT_APP_SERVER_LINK}api/users/exists/?email=${encodeURIComponent(
                    email,
                )}`,
            )
            .then((response) => {
                setIsUserExists(response.data.status);
                setActiveForm('password');
                setEmail(email);
            })
            .catch((error) => {
                console.log(error.response);
            });
    };

    useEffect(() => {
        if (isUserExists) {
            loginUser();
        } else {
            registerUser();
        }
    }, [password]);

    const handlePassword = (password: any) => {
        setPassword(password);
    };

    const handleMailConfirm = (code: any) => {
        const data = {
            email: email,
            code: code,
        };

        axios
            .post(`${process.env.REACT_APP_SERVER_LINK}api/users/confirm-email/`, data)
            .then((response) => {
                loginUser();
            })
            .catch((error) => {
                console.log(error.response);
            });
    };

    const loginUser = () => {
        const data = {
            email: email,
            password: password,
        };

        axios
            .post(`${process.env.REACT_APP_SERVER_LINK}api/users/login`, data)
            .then((response) => {
                if (response.data.status === 'success') {
                    const token = response.data.token;
                    dispatch(setUser({ email: email ?? 'unknown', token }));
                    return navigate('/');
                }
            })
            .catch((error) => {
                console.log(error.response);
            });
        //
    };

    const registerUser = () => {
        const data = {
            email: email,
            password: password,
        };

        axios
            .post(`${process.env.REACT_APP_SERVER_LINK}api/users/register/`, data)
            .then((response) => {
                setActiveForm('mail-confirm');
            })
            .catch((error) => {
                console.log(error.response);
            });
    };

    const forms = [
        {
            key: 1,
            component: <LoginForm handleClick={handleLogin} />,
            active: activeForm === 'login',
        },
        {
            key: 2,
            component: (
                <PasswordForm
                    handleClick={handlePassword}
                    title={isUserExists ? 'Войти' : 'Создать аккаунт'}
                />
            ),
            active: activeForm === 'password',
        },
        {
            key: 3,
            component: <MailConfirmForm handleClick={handleMailConfirm} />,
            active: activeForm === 'mail-confirm',
        },
    ];

    return (
        <div className="wrapper">
            <div className={styles.container}>
                <div className={styles.formInner}>
                    <h1 className={styles.title}>Авторизация</h1>
                    {forms.map((form) => form.active && <div key={form.key}>{form.component}</div>)}
                </div>
            </div>
        </div>
    );
};

export default IndexAuth;
