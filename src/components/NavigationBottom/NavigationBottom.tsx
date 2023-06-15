import { Link } from "react-router-dom";
import styles from "./NavigationBottom.module.scss";

// img
import settingsIcon from "@/assets/img/icons/settings.svg";

const NavigationBottom = () => {
	return (
		<div className={styles.navigationBottomWrapper}>
			<Link to="settings/profile" className={styles.navigationBottomItem} title="Расширения">
				<img src={settingsIcon} alt="Расширения" />
			</Link>

			{/* <Link to="settings" className={styles.navigationBottomItem} title="Настройки">
				<img src={settingsIcon} alt="Настройки" />
			</Link> */}
		</div>
	);
};

export default NavigationBottom;
