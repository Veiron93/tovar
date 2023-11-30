import styles from './index.module.scss'
import { useState } from 'react';

const LoginForm = function ({handleClick}) {
  const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
	return (
        <form className={styles.loginForm}>
                <label htmlFor="email">Почта/Логин:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <button 
                    onClick={() => handleClick(email)}
                    type="button"
                 >
                    Далее
                </button>
        </form>
	);
};

export default LoginForm;