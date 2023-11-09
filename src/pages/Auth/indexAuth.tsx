import AuthForm from '@/components/AuthForm';
import '../../app.scss';
import styles from './index.module.scss'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setUser } from '@/redux/slices/userSlice';


const IndexAuth = function () {
	const dispatch = useDispatch();
	const navigate = useNavigate();


	const handleLogin = (email:any, password:any) => {
		const data = { email: email, password: password };
		console.log(data)
		axios.post(`${process.env.REACT_APP_SERVER_LINK}api/users/login/`, data)
		.then((response) => {
			if(response.data.status === 'success') {
				console.log(data.email, response.data.token)
				dispatch(setUser({
					email: data.email,
					token: response.data.token
				}));

				navigate('/');
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
				<h1 className={styles.title}>Авторизация</h1>

				<AuthForm title="Войти" handleClick={handleLogin}/>
					<p className={styles.subtitle}> Нет аккаунта? 
						<Link className={styles.link} to="/registration">Зарегистрируйтесь</Link>
					</p>
					</div>
			</div>
		</div>
	);
};

export default IndexAuth;
