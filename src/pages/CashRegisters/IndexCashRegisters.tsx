import KassaCard from '@/components/KassaCard';
import Button from '@/ui-components/Button/Button';
import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Modal, { RefType } from '@/components/Modal/Modal';
import { useAxios } from '@/hooks/use-axios';
import style from './index.module.scss';
interface Kassa {
    id: number;
    name: string;
}

const IndexCashRegisters = function () {
    const { token } = useSelector((state: any) => state.user);
    const [kassas, setKassas] = useState<Kassa[]>([]);
    const [kassaName, setKassaName] = useState('');
    const api = useAxios();
    const childRef = useRef<RefType>(null);

    function showModulCreateKassa() {
        if (childRef.current) {
            childRef.current.showModal();
        }
    }

    const getCashRegList = () => {
        // axios
        //     .get(`${process.env.REACT_APP_SERVER_LINK}api/users/kassas`, {
        //         headers: { token: token },
        //     })
        //     .then((response) => {
        //         // handle the response
        //         setKassas(response.data);
        //     })
        //     .catch((error) => {
        //         console.log(error.response);
        //     });

        api.get('api/users/kassas').then((response) => {
            setKassas(response.data);
        });
    };

    const onKassaCreate = () => {
        const data = {
            kassaName,
        };
        // axios
        //     .post(`${process.env.REACT_APP_SERVER_LINK}api/users/kassas/create`, data, {
        //         headers: { 'user-token': token },
        //     })
        //     .then((response) => {
        //         getCashRegList();
        //     })
        //     .catch((error) => {
        //         console.log(error.response);
        //     });

        api.post(`api/users/kassas/create`, data).then(() => {
            getCashRegList();
        });
    };

    useEffect(() => {
        getCashRegList();
    }, []);

    return (
        <div className="index">
            <div className={style.kassaListHead}>
                <h1 className="index-title">Кассы</h1>
                <Button text="Cоздать кассу" onPress={showModulCreateKassa} />
            </div>

            {kassas.length === 0 ? (
                <p>Список касс пуст</p>
            ) : (
                <div className={style.kassaList}>
                    {kassas.map((kassa) => (
                        <KassaCard key={kassa.id} kassa={kassa} />
                    ))}
                </div>
            )}
            <Modal title="Создать кассу" ref={childRef}>
                <div>
                    <form>
                        <label>Название кассы</label>
                        <input
                            onChange={(e) => setKassaName(e.target.value)}
                            type="text"
                            placeholder="Касса 1"
                        />
                    </form>

                    <Button onPress={onKassaCreate} text="Cоздать" />
                </div>
            </Modal>
        </div>
    );
};

export default IndexCashRegisters;
