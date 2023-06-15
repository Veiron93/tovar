import { useState, useImperativeHandle, forwardRef, Ref } from "react";

import styles from "./Modal.module.scss";

// images
import iconClose from "@/assets/img/icons/close.svg";
import imgSuccess from "@/assets/img/icons/success.svg";
import imgError from "@/assets/img/icons/error.svg";

export interface RefType {
	showModal: () => void;
}

export interface RefType {
	closeModal: () => void;
}

interface ModalProps {
	state?: boolean;
	title?: string;
	textSuccess?: string;
	customResultSuccess?: JSX.Element | JSX.Element[];
	textError?: string;
	customResultError?: JSX.Element | JSX.Element[];
	resultState?: boolean;
	loaderState?: boolean;
	children: JSX.Element | JSX.Element[];
}

const Modal = (props: ModalProps, ref: Ref<RefType>) => {
	let [stateModal, setStateModal] = useState(false);

	function showModal() {
		setStateModal(true);
	}

	function closeModal() {
		setStateModal(false);
	}

	useImperativeHandle(ref, () => ({ showModal, closeModal }));

	// LOADER
	let loaderState: null | boolean = props.loaderState ? props.loaderState : null;

	// RESULT
	let resultState: null | boolean = props.resultState ? props.resultState : null;

	// success
	let successText = props.textSuccess ?? "Успешно";

	let resultSuccess = (
		<div className={styles.defaultResult}>
			<img src={imgSuccess} alt="" />
			<span>{successText}</span>
		</div>
	);

	let customResultSuccess = props.customResultSuccess;

	// error
	let errorText = props.textError ?? "Опс... Попробуйте ещё раз";

	let resultError = (
		<div className={styles.defaultResult}>
			<img src={imgError} alt="" />
			<span>{errorText}</span>
		</div>
	);

	let customResultError = props.customResultError;

	return (
		<div className={`${stateModal ? styles.modalActive : null} ${styles.modal}`}>
			<div className={styles.modalWrapper}>
				<div className={styles.modalWrapperContent}>
					<div className={styles.modalHeader}>
						<div className={styles.modalHeaderTitle}>{props.title}</div>

						<div className={styles.modalHeaderBtnClose} onClick={closeModal}>
							<img src={iconClose} alt="" />
						</div>
					</div>

					<div className={styles.modalContent}>{props.children}</div>
				</div>

				{loaderState && (
					<div className={styles.modalLoader}>
						<p>Cекундочку...</p>
					</div>
				)}

				{resultState !== null && (
					<div className={styles.modalResult}>
						{resultState ? (
							<>{customResultSuccess ? customResultSuccess : resultSuccess}</>
						) : (
							<>{customResultError ? customResultError : resultError}</>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default forwardRef(Modal);
