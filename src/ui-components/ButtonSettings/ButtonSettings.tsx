// Styles
import styles from "./Button.module.scss";

// assets
import settingsIcon from "@/assets/img/icons/settings.svg";

const ButtonSettings = function (props: any) {
	return (
		<div className={`${styles.button}`} onClick={props.onPress}>
			<img src={settingsIcon} alt="редактировать" />
		</div>
	);
};

export default ButtonSettings;
