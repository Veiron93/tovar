import styles from './index.module.scss'
import { useState } from 'react';

const PasswordForm = function ({title, handleClick}) {
  const [password, setPassword] = useState('');
	return (
        <form className={styles.loginForm}>
                <label htmlFor="password">Пароль:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button 
                    onClick={() => handleClick(password)}
                    type="button"
                 >
                {title}
                </button>
        </form>
	);
};

export default PasswordForm;