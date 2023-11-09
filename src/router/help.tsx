// pages
import LayoutSubMenu from '@/components/Layouts/LayoutSubMenu/LayoutSubMenu';
import About from '@/pages/Help/About/About';
import IndexHelp from '@/pages/Help/IndexHelp';

const helpChildren = [
    {
        path: 'about',
        name: 'О приложении',
        element: <About />,
    },

    // {
    // 	path: "other",
    // 	name: "Что то ещё",
    // 	element: <Security />,
    // },
];

const help = {
    path: 'help',
    name: 'Справка',
    element: <LayoutSubMenu navigation={helpChildren} index={<IndexHelp />} rootPagePath="/help" />,

    children: [...helpChildren],
};

export default help;
