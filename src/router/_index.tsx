import { createBrowserRouter } from 'react-router-dom';

// components
import Layout from '@/pages/Layout/Layout';

// pages
import Index from '@/pages/Index';

// routes
import ProductsRoutes from './products';
import CashregisterRoutes from './cashRegister';
import HelpRouter from './help';
import SettingsRoutes from './settings';
import IndexAuth from '@/pages/Auth/indexAuth';
import Staff from './staff';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,

        children: [
            {
                path: '/',
                element: <Index />,
            },

            {
                ...ProductsRoutes,
            },

            {
                ...CashregisterRoutes,
            },

            {
                ...Staff,
            },

            {
                ...HelpRouter,
            },

            {
                ...SettingsRoutes,
            },
        ],
    },

    {
        path: '/auth',
        element: <IndexAuth />,
    },
]);

export default router;
