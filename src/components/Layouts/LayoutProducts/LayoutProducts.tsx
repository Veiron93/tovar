import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

import styles from "./LayoutProducts.module.scss";

//import SubNavigation from "@/components/SubNavigation/SubNavigation";

const LayoutSubMenu = function (props: any) {
	// const currentPagePath = useLocation().pathname;
	// const navigate = useNavigate();

	// useEffect(() => {
	// 	if (props.rootPagePath !== null && "/" + props.rootPagePath + "/" === currentPagePath) {
	// 		navigate(props.replacePagePath);
	// 	}
	// });

	return (
		<div className={styles.layoutProducts}>
			{/* <SubNavigation items={props.navigation} /> */}

			<div className={styles.layoutProductsContent}>
				<p>dwd</p>
				{/* {props.rootPagePath && props.rootPagePath === currentPagePath ? props.index : <Outlet />} */}
			</div>
		</div>
	);
};

export default LayoutSubMenu;
