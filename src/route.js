import CreateProduct from "./Pages/CreateProduct";
import ManageProduct from "./Pages/ManageProduct";
import EditProduct from "./UpdateProduct";

const routes =[
    {
        name: 'Create product',
        path: '/createProduct',
        component:()=> <CreateProduct/>,
    },
    {
        name: 'Update Product',
        path:  '/editProduct/:id',
        component: ()=> <EditProduct/>,
    },
    {
        name:  'ManageProduct',
        path: '/orders',
        component: ()=> <ManageProduct/>,
    },
]

export default routes;