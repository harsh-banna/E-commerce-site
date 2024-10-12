import { lazy, StrictMode,Suspense} from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductList from "./components/ProductList.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
//import Cart from "./components/Cart.jsx";
import Error from "./components/Error.jsx";
//import About from './components/About.jsx';
//import Checkout from './components/Checkout.jsx';

// Lazy loading

const About = lazy(() => import("./components/About.jsx"));
const Checkout = lazy(() => import("./components/Checkout.jsx"));
const Cart = lazy(() => import("./components/Cart.jsx"));



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element:<ProductList/>,
      },
      {
        path: "/cart",
        element:<Suspense fallback={<h1>loading.....</h1>}><Cart/></Suspense>,
      },
      {
        path: "/about",
        element:<Suspense fallback={<h1>loading.....</h1>}><About/></Suspense>,
      },
      {
        path: "/checkout",
        element:<Suspense fallback={<h1>loading.....</h1>}><Checkout/></Suspense>,
      },{
        path: "/Productdetail/:id",
        element: <ProductDetail/>
      },
    ],
    errorElement:<Error/>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
