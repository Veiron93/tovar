// pages
import IndexCashRegisters from "@/veiws/CashRegisters/IndexCashRegisters";
import Profile from "@/veiws/CashRegisters/Places/Places";
//import Security from "@/veiws/CashRegisters/Security/Security";

// components
import LayoutSubMenu from "@/components/Layouts/LayoutSubMenu/LayoutSubMenu";

const cashRegistersChildren = [
	{
		path: "places",
		name: "Торговые точки",
		element: <Profile />,
	},

	// {
	// 	path: "other",
	// 	name: "Что то ещё",
	// 	element: <Security />,
	// },
];

const cashRegisters = {
	path: "cash-registers",
	element: <LayoutSubMenu navigation={cashRegistersChildren} index={<IndexCashRegisters/>} rootPagePath="/cash-registers"/>,

	children: [...cashRegistersChildren],
};

export default cashRegisters;
