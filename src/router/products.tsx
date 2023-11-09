// pages
import WelcomeProducts from '@/pages/Products/WelcomeProducts/WelcomeProducts';
// components
import LayoutProducts from '@/components/Layouts/LayoutProducts/LayoutProducts';

let isChilds = true;

const productsChildren = [
    {
        path: 'products-categories',
        name: 'Категории',
    },

    {
        path: 'other',
        name: 'Что то ещё',
        // element: <Security />,
    },
];

isChilds = !!productsChildren.length;

const products = {
    path: 'products',
    name: 'Товары',
    element: !isChilds ? (
        <WelcomeProducts />
    ) : (
        <LayoutProducts
            navigation={productsChildren}
            rootPagePath="/products"
        />
    ),

    children: [...productsChildren],
};

export default products;
