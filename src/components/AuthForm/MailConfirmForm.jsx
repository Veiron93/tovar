import styles from './index.module.scss'
import { useState } from 'react';

const MailConfirmForm = function ({handleClick}) {
  const [code, setCode] = useState('');
	return (
        <form className={styles.loginForm}>
                <label htmlFor="email">Код подтверждения</label>
                <input
                    type="text"
                    id="code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                />

                <button 
                    onClick={() => handleClick(code)}
                    type="button"
                 >
                    Подтвердить
                </button>
        </form>
	);
};

export default MailConfirmForm;