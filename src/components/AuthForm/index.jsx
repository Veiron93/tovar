import styles from './index.module.scss'
import { useState } from 'react';

const AuthForm = function ({title, handleClick}) {
  const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

	return (
        <form className={styles.loginForm} noValidate>
                <label htmlFor="email">Почта/Логин:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                {/* <label htmlFor="password">Пароль:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                /> */}

                <button 
                    onClick={() => handleClick(email)}
                    type="submit"
                 >
                {title}
                </button>
        </form>
	);
};

export default AuthForm;