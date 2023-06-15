import { Outlet } from "react-router-dom";

import LeftSide from "@/components/LeftSide/LeftSide";

import styles from "./Layout.module.scss";

function Layout() {
	return (
		<main className={`${styles.layoutWrapper}`}>
			<LeftSide />
			<div className={styles.layoutContent}>
				<Outlet />
			</div>
		</main>
	);
}

export default Layout;
