import { Link } from "react-router-dom";

import styles from "./LeftSide.module.scss";

import Navigation from "@/components/Navigation/Navigation";
import NavigationBottom from "@/components/NavigationBottom/NavigationBottom";
// import settingsIcon from "./../../assets/img/icons/settings.svg";

const LeftSide = () => {
	return (
		<div className={styles.leftSide}>
			<div className={styles.leftSideWrapper}>
				<Navigation />
				<NavigationBottom />
			</div>
		</div>
	);
};

export default LeftSide;
