// pages
import IndexProducts from "@/veiws/Products/IndexProducts";
import WelcomeProducts from "@/veiws/Products/WelcomeProducts/WelcomeProducts";

// components
import LayoutProducts from "@/components/Layouts/LayoutProducts/LayoutProducts";

let isNow = true;

const productsChildren = [
	{
		path: "products-categories",
		name: "Категории",
		//element: <IndexProducts />,
	},

	// {
	// 	path: "other",
	// 	name: "Что то ещё",
	// 	element: <Security />,
	// },
];

const products = {
	path: "products",
	name: "Товары",
	element: isNow ? <WelcomeProducts/>:<LayoutProducts navigation={productsChildren} index={<IndexProducts/>} rootPagePath="/products"/>,

	children: [...productsChildren],
};

export default products;
