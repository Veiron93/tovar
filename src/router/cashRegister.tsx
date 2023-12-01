// pages
import IndexCashRegisters from '@/pages/CashRegisters/IndexCashRegisters';
import Profile from '@/pages/CashRegisters/Places/Places';
//import Security from "@/pages/CashRegisters/Security/Security";

// components
import LayoutSubMenu from '@/components/Layouts/LayoutSubMenu/LayoutSubMenu';

const cashRegistersChildren = [
    {
        path: 'places',
        name: 'Торговые точки',
        element: <Profile />,
    },

    // {
    // 	path: "other",
    // 	name: "Что то ещё",
    // 	element: <Security />,
    // },
];

const cashRegisters = {
    path: 'cash-registers',
    element: (
        <IndexCashRegisters />
    ),

};

export default cashRegisters;
