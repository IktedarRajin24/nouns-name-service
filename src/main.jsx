import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main.jsx';
import Homepage from './components/Homepage/Homepage';
import Registered from './components/PageTwo/Registered/Registered';
import Checkout from './components/CheckoutPage/Checkout';
import Successful from './components/Successful/Successful';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: "/",
        element: <Homepage/>        
      },
      {
        path: "/registered",
        element: <Registered/>     
      },
      {
        path: "/checkout",
        element: <Checkout/>     
      },
      {
        path: "/success",
        element: <Successful/>     
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
