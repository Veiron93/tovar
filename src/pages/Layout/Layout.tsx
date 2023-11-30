import { Outlet, useNavigate   } from "react-router-dom";
import React, { useEffect } from "react";

import LeftSide from "@/components/LeftSide/LeftSide";
import { useDispatch } from 'react-redux';
import styles from "./Layout.module.scss";
import { useAuth } from "@/hooks/use-auth";
import { removeUser } from '@/redux/slices/userSlice';

function Layout():any {
	const navigate = useNavigate();
	const {isAuth, email} = useAuth();
	const dispatch = useDispatch();

	useEffect(() => {
		if (!isAuth) {
		  navigate("/auth");
		}
	  });

	  if (!isAuth) {
		return null; 
	  }

	return (
		<main className={`${styles.layoutWrapper}`}>
			<div className="">
				{email} 
				<button onClick={()=>dispatch(removeUser())}>Выйти</button>
				
				</div>
			<LeftSide />
			<div className={styles.layoutContent}>
				<Outlet />
			</div>
		</main>
	);
}

export default Layout;
