import { Outlet, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import LeftSide from '@/components/LeftSide/LeftSide';

import styles from './Layout.module.scss';
import { useAuth } from '@/hooks/use-auth';
import { useTheme } from '@/hooks/use-theme';

function Layout(): any {
    const navigate = useNavigate();
    const { isAuth } = useAuth();
    const { theme } = useTheme();

    useEffect(() => {
        if (!isAuth) {
            console.log('not auth');
            navigate('/auth');
        }
    }, [isAuth]);

    if (!isAuth) {
        return null;
    }

    return (
        <main className="" data-theme={theme}>
            <div className={styles.layoutWrapper}>
                <LeftSide />
                <div className={styles.layoutContent}>
                    <Outlet />
                </div>
            </div>
        </main>
    );
}

export default Layout;
