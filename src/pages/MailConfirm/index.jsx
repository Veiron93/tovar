import { useState } from 'react';
import styles from './index.module.scss'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const MailConfirm = () => {
    const [code, setCode] = useState('');
	const navigate = useNavigate();

    const sendCode = () => {
        // const data = { email: slice.email, code: code};
        const data = {};

		axios.post(`${process.env.REACT_APP_SERVER_LINK}api/users/register/`, data)
		.then((response) => {
			if(response.data.status === 'success') {
				return navigate("/");
			}
		})
		.catch((error) => {
			console.log(error);
		});
    }


    return(
        <div className="wrapper">
            <div className={styles.container}>
                <form className={styles.loginForm}>
                        <label htmlFor="email">Введите код подтверждения</label>
                        <input
                            type="number"
                            id="code"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            required
                        />
                        <button 
                            onClick={() => sendCode()}
                            type="submit"
                        >
                        Отправить
                        </button>
                </form>
            </div>
        </div>
    )
}

export default MailConfirm;