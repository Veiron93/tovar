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
import MailConfirm from '@/pages/MailConfirm';

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
                ...HelpRouter,
            },

            {
                ...SettingsRoutes,
            },
        ],
    },

    {
        path: '/auth',
        element: <IndexAuth/>
    },

    {
        path: '/mail-check',
        element: <MailConfirm/>
    },

    
]);

export default router;
