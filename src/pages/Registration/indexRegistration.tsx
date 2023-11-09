import AuthForm from '@/components/AuthForm';
import '../../app.scss';
import styles from './index.module.scss'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import axios from 'axios';

const IndexRegistration = function () {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogin = (email:any, password:any) => {

		const data = { email: email, password: password };
		axios.post(`${process.env.REACT_APP_SERVER_LINK}api/users/register/`, data)
		.then((response) => {
			if(response.data.status === 'success') {
				return navigate("/mail-check");
			}
		})
		.catch((error) => {
			console.log(error);
		});
	};

	return (
		<div className="wrapper">
			<div className={styles.container}>
				<div className={styles.formInner}>
				<h1 className={styles.title}>Регистрация</h1>

					<AuthForm title="Создать аккаунт" handleClick={handleLogin}/>
					<p className={styles.subtitle}> Уже есть аккаунт?
						<Link className={styles.link} to="/auth">Авторизуйтесь</Link>
					</p>
					</div>
			</div>
		</div>
	);
};

export default IndexRegistration;