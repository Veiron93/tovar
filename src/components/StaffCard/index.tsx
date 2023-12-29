import style from "./index.module.scss";
import ButtonSettings from "@/ui-components/ButtonSettings/ButtonSettings";
import React, { useEffect, useState, useRef } from "react";
import Modal, { RefType } from "@/components/Modal/Modal";
import Button from "@/ui-components/Button/Button";

interface Staff {
    id: number;
    first_name: string;
    last_name: string;
    middle_name: string;
    staff_password: string;
}

const StaffCard = function ({ staff }: { staff: Staff }) {
    const childRef = useRef<RefType>(null);

    const onStaffParams = () => {
		if (childRef.current) {
			childRef.current.showModal();
		}
	};

    const updateStaffData = () => {

    }

    return (
        <div className={style.staff}>
            {staff.first_name} {staff.last_name} {staff.middle_name} {staff.staff_password}

            <ButtonSettings onPress={onStaffParams}  />

            <Modal title="Сотрудник" ref={childRef}>

				<Button onPress={updateStaffData} text="Сохранить" />
			</Modal>
        </div>

        
    );
};
export default StaffCard;
