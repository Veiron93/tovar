// pages
import Profile from '@/pages/Settings/Profile/Profile';
import Security from '@/pages/Settings/Security/Security';

// components
import LayoutSubMenu from '@/components/Layouts/LayoutSubMenu/LayoutSubMenu';
import Application from '@/pages/Settings/Application/Application';

const settingsChildren = [
    {
        path: 'profile',
        name: 'Профиль',
        element: <Profile />,
    },

    {
        path: 'security',
        name: 'Безопасность',
        element: <Security />,
    },

    {
        path: 'application',
        name: 'Приложение',
        element: <Application />,
    },
];

const Settings = {
    path: 'settings',
    element: (
        <LayoutSubMenu
            rootPagePath="settings"
            replacePagePath="profile"
            navigation={settingsChildren}
        />
    ),

    children: [...settingsChildren],
};

export default Settings;
