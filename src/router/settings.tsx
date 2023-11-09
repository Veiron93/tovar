// pages
import Profile from "@/pages/Settings/Profile/Profile";
import Security from "@/pages/Settings/Security/Security";

// components
import LayoutSubMenu from "@/components/Layouts/LayoutSubMenu/LayoutSubMenu";

const settingsChildren = [
	{
		path: "profile",
		name: "Профиль",
		element: <Profile />,
	},

	{
		path: "security",
		name: "Безопасность",
		element: <Security />,
	},
];

const Settings = {
	path: "settings",
	element: <LayoutSubMenu rootPagePath="settings" replacePagePath="profile" navigation={settingsChildren} />,

	children: [...settingsChildren],
};

export default Settings;
