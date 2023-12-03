import { Outlet, useNavigate   } from "react-router-dom";
import React, { useEffect } from "react";

import LeftSide from "@/components/LeftSide/LeftSide";

import styles from "./Layout.module.scss";
import { useAuth } from "@/hooks/use-auth";


function Layout():any {
	const navigate = useNavigate();
	const {isAuth} = useAuth();
	useEffect(() => {
		if (!isAuth) {
		  navigate("/auth");
		}
	  }, []);

	  if (!isAuth) {
		return null; 
	  }

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
