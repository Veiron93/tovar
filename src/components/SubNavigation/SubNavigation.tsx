import { NavLink } from "react-router-dom";
import styles from "./SubNavigation.module.scss";

const SubNavigation = (children: any) => {
	return (
		<div className={styles.subNavigation}>
			{children.items.map((item: any) => (
				<NavLink
					className={({ isActive }) => (isActive ? styles.subNavigationItemActive : "") + ` ${styles.subNavigationItem}`}
					to={item.path}
					key={item.path}
				>
					{item.name}
				</NavLink>
			))}
		</div>
	);
};

export default SubNavigation;
