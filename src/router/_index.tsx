import { createBrowserRouter } from "react-router-dom";

// components
import Layout from "@/components/Layouts/Layout/Layout";

// pages
import Index from "@/veiws/Index";

// routes
import ProductsRoutes from "./products";
import CashregisterRoutes from "./cashRegister";
import SettingsRoutes from "./settings";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,

		children: [
			{
				path: "/",
				element: <Index />,
			},

			{
				...ProductsRoutes
			},

			{
				...CashregisterRoutes
			},

			{
				...SettingsRoutes,
			},
		],
	},
]);

export default router;
