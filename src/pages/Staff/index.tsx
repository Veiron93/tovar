import Button from '@/ui-components/Button/Button';
import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Modal, { RefType } from '@/components/Modal/Modal';
import StaffCard from '@/components/StaffCard';
import { useAxios } from "@/hooks/use-axios";


interface Staff {
    id: number;
    first_name: string;
    last_name: string;
    middle_name: string;
    staff_password: string;
}

const Staff = function () {
    const { token } = useSelector((state: any) => state.user);
    const [staff, setStaff] = useState<Staff[]>([]);
    const [staffFirstName, setStaffFirstName] = useState('');
    const [staffLasttName, setStaffLastName] = useState('');
    const [staffMiddleName, setStaffMiddleName] = useState('');
    const [kassaPinCode, setKassaPinCode] = useState("");

    const childRef = useRef<RefType>(null);

    const api = useAxios();

    const getStaff = () => {
        api.get(`api/users/personal`).then((response) => {
            setStaff(response.data);
            console.log(response);
        });
    };

    useEffect(() => {
        getStaff();
    }, []);

    function showModulCreateStaff() {
        if (childRef.current) {
            childRef.current.showModal();
        }
    }

    const onStaffCreate = () => {
        const data = {
            first_name: staffFirstName,
            last_name: staffLasttName,
            middle_name: staffMiddleName,
            password: kassaPinCode,
        };
            api.post(`api/users/personal/create`, data).then(() => {
                getStaff();
            });

        //
    };

    return (
        <div className="index">
            <h2 className='index-title'>Сотрудники</h2>

            {staff.length === 0 ? (
                <p>Список сотрудников пуст</p>
            ) : (
                staff.map((staff) => <StaffCard key={staff.id} staff={staff} />)
            )}

            <Button text="Добавить сотрудника" onPress={showModulCreateStaff} />
            <Modal title="Добавить сотрудника" ref={childRef}>
                <div>
                    <form className='modal-form'>
                        <div className="input-block">
                            <label>Фамилия</label>
                            <input
                                onChange={(e) => setStaffLastName(e.target.value)}
                                type="text"
                                placeholder=""
                            />
                        </div>
                        <div className="input-block">
                            <label>Имя</label>
                            <input
                                onChange={(e) => setStaffFirstName(e.target.value)}
                                type="text"
                                placeholder=""
                            />
                        </div>
                        <div className="input-block">
                            <label>Отчество</label>
                            <input
                                onChange={(e) => setStaffMiddleName(e.target.value)}
                                type="text"
                                placeholder=""
                            />
                        </div>

                        <div className="input-block">
                            <label>Пин код</label>
						    <input maxLength={4} onChange={(e) => setKassaPinCode(e.target.value)} type="number" placeholder="1234" />
                        </div>
                    </form>

                    <Button onPress={onStaffCreate} text="Cоздать" />
                </div>
            </Modal>
        </div>
    );
};

export default Staff;
