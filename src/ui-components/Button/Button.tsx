// Styles
import styles from "./Button.module.scss";

const Button = function (props: any) {
	return (
		<div className={`${props.classes} ${styles.button}`} onClick={props.onPress}>
			{props.text}
		</div>
	);
};

export default Button;
