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


	const handleLogin = (email:any) => {
		axios.get(`${process.env.REACT_APP_SERVER_LINK}api/users/exists/?email=${email}`)
		.then((response) => {
			console.log(response);

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
