import { Link, useNavigation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import SubNavigation from '@/components/SubNavigation/SubNavigation';

const Settings = function () {
    const subNavigationItems = [
        {
            path: 'profile',
            title: 'Профиль',
        },
        {
            path: 'security',
            title: 'Безопасность',
        },
        {
            path: 'application',
            title: 'Приложение',
        },
    ];

    return (
        <div className="index-settings">
            <SubNavigation items={subNavigationItems} />

            <div className="wrapper">
                <p>Настройки</p>
                <Outlet />
            </div>
        </div>
    );
};

export default Settings;
