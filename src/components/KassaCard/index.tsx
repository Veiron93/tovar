import Button from "@/ui-components/Button/Button";
import ButtonSettings from "@/ui-components/ButtonSettings/ButtonSettings";
import Modal, { RefType } from "@/components/Modal/Modal";
import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import axios from "axios";
import style from "./index.module.scss";
// models
import { Kassa } from "@/models/kassas";

interface Staff {
	id: number;
	first_name: string;
	last_name: string;
	middle_name: string;
}

const KassaCard = function ({ kassa }: { kassa: Pick<Kassa, "id" | "name"> }) {
	const childRef = useRef<RefType>(null);
	const [staff, setStaff] = useState<Staff[]>([]);
	const [selectedStaff, setSelectedStaff] = useState<any[]>([]);
	const { token } = useSelector((state: any) => state.user);

	const onKassaParams = () => {
		if (childRef.current) {
			getStaff();
			childRef.current.showModal();
		}
	};

	const getStaff = () => {
		axios
			.get(`${process.env.REACT_APP_SERVER_LINK}api/users/personal/`, {
				headers: { "user-token": token },
			})
			.then((response) => {
				setStaff(response.data);
			});
	};

	const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const id = parseInt(event.target.value);
		if (event.target.checked) {
			setSelectedStaff([...selectedStaff, id]);
		} else {
			setSelectedStaff(selectedStaff.filter((staffId) => staffId !== id));
		}
	};

	useEffect(() => {
		if (staff.length) {
			axios
				.get(`${process.env.REACT_APP_SERVER_LINK}api/users/kassas/personal?kassa=${kassa.id}}`, {
					headers: { "user-token": token },
				})
				.then((response) => {
					setSelectedStaff(response.data.map((item: { id: number }) => item.id));
				});
		}
	}, [staff]);

	const ownKassaByUser = () => {
		axios
			.patch(`${process.env.REACT_APP_SERVER_LINK}api/users/kassas/personal?kassa=${kassa.id}`, selectedStaff, {
				headers: { "user-token": token },
			})
			.then((response) => {})
			.catch((error) => {
				console.log(error.response);
			});
	};

	return (
		<div className={style.kassa}>
			{kassa.name}
			<ButtonSettings onPress={onKassaParams}  />

			<Modal title={kassa.name} ref={childRef}>
				{staff.length === 0 ? (
					<p>Список сотрудников пуст</p>
				) : (
					<div>
						<span>Привязать сотрудников:</span>

						{staff.map((s) => (
							<div key={s.id}>
								<input type="checkbox" value={s.id} checked={selectedStaff.includes(s.id)} onChange={handleCheckboxChange} />
								{s.first_name}
							</div>
						))}
					</div>
				)}
				<Button onPress={ownKassaByUser} text="Сохранить" />
			</Modal>
		</div>
	);
};
export default KassaCard;
