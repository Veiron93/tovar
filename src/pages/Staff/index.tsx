import Button from '@/ui-components/Button/Button';
import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Modal, { RefType } from '@/components/Modal/Modal';
import StaffCard from '@/components/StaffCard';

interface Staff {
    id: number;
    first_name: string;
    last_name: string;
    middle_name: string;
}

const Staff = function () {
    const { token } = useSelector((state: any) => state.user);
    const [staff, setStaff] = useState<Staff[]>([]);
    const [staffFirstName, setStaffFirstName] = useState('');
    const [staffLasttName, setStaffLastName] = useState('');
    const [staffMiddleName, setStaffMiddleName] = useState('');

    const childRef = useRef<RefType>(null);

    const getStaff = () => {
        axios
            .get(`${process.env.REACT_APP_SERVER_LINK}api/users/personal`, {
                headers: { 'user-token': token },
            })
            .then((response) => {
                // handle the response
                // setKassas(response.data);
                setStaff(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error.response);
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
            pincode: 123,
        };
        axios
            .post(`${process.env.REACT_APP_SERVER_LINK}api/users/personal/create`, data, {
                headers: { 'user-token': token },
            })
            .then((response) => {
                getStaff();
            })
            .catch((error) => {
                console.log(error.response);
            });

        //
    };

    return (
        <div className="index">
            <p>Сотрудники</p>

            {staff.length === 0 ? (
                <p>Список сотрудников пуст</p>
            ) : (
                staff.map((staff) => <StaffCard key={staff.id} staff={staff} />)
            )}

            <Button text="Добавить сотрудника" onPress={showModulCreateStaff} />
            <Modal title="Добавить сотрудника" ref={childRef}>
                <div>
                    <form>
                        <label>Фамилия</label>
                        <input
                            onChange={(e) => setStaffLastName(e.target.value)}
                            type="text"
                            placeholder="Зубенко"
                        />
                        <label>Имя</label>
                        <input
                            onChange={(e) => setStaffFirstName(e.target.value)}
                            type="text"
                            placeholder="Михаил"
                        />
                        <label>Отчество</label>
                        <input
                            onChange={(e) => setStaffMiddleName(e.target.value)}
                            type="text"
                            placeholder="Петрович"
                        />
                    </form>

                    <Button onPress={onStaffCreate} text="Cоздать" />
                </div>
            </Modal>
        </div>
    );
};

export default Staff;
