import { useRef } from "react";

import Modal, { RefType } from "@/components/Modal/Modal";
import Button from "@/ui-components/Button/Button";

import styles from "./WelcomeProducts.module.scss";

const WelcomeProducts = function () {
	const childRef = useRef<RefType>(null);

	function showModulCreateGroup() {
		if (childRef.current) {
			childRef.current.showModal();
		}
	}

	function test() {
		// if (childRef.current) {
		// 	childRef.current.closeModal();
		// }
	}

	return (
		<>
			<div className={styles.welcomeProducts}>
				<div className={styles.welcomeProductsText}>
					<span>Отлично!</span>
					<span>
						Давайте создадим Вашу первую группу, <br /> в которой будут категории, товары, услуги.
					</span>
				</div>

				<Button classes={[styles.btnCreateGroup]} text="Cоздать группу" onPress={showModulCreateGroup} />

				<div className={styles.welcomeProductsInfo}>Что такое группа ?</div>
			</div>

			<Modal title="Ваша первая группа" ref={childRef}>
				{/* textSuccess="Группа успешно создана" customResultSuccess={<p>успешно создана группа</p>} */}
				<div className={styles.formAddNewGroup}>
					<form>
						<label>Название группы</label>
						<input type="text" placeholder="Например: Смартфоны и гаджеты" />
					</form>

					<Button onPress={test} classes={[styles.btnAddNewGroup]} text="Cоздать" />
				</div>
			</Modal>
		</>
	);
};

export default WelcomeProducts;
