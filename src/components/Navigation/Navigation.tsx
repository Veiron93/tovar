import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.scss";

import icon from "@/assets/img/icons/black-box.svg";

const Navigation = () => {
	let activeStyle = {
		background: getComputedStyle(document.documentElement).getPropertyValue("--color-main"),
	};

	return (
		<div className={styles.navigationWrapper}>
			<NavLink to="/" className={`${styles.navigationItem}`} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
				<img src={icon} alt="" />
				<span>Главная</span>
			</NavLink>

			<NavLink to="products" className={`${styles.navigationItem}`} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
				<img src={icon} alt="" />
				<span>Товары</span>
			</NavLink>

			<NavLink to="cash-registers" className={`${styles.navigationItem}`} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
				<img src={icon} alt="" />
				<span>Кассы</span>
			</NavLink>

			<NavLink to="dwwd" className={`${styles.navigationItem}`} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
				<img src={icon} alt="" />
				<span>Справка</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
