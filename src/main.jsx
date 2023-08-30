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
import Transaction from './components/Transaction/Transaction';
import Amount from './components/Transaction/Amount/Amount';
import StepOne from './components/Transaction/StepOne/StepOne';
import StepTwo from './components/Transaction/StepTwo/StepTwo';
// eslint-disable-next-line no-unused-vars
import StepThree from './components/Transaction/StepThree/StepThree';
import Profile from './components/Profile/Profile';
import Dashboard from './components/Profile/Dashboard/Dashboard';
import Staking from './components/Profile/Staking/Staking';


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
        path: "/profile",
        element: <Profile/>   ,
        children: [
          {
            path: "/profile/dashboard",
            element: <Dashboard/>

          },
          {
            path: "/profile/staking",
            element: <Staking/>
          }
        ]  
      },
      {
        path: "/transaction",
        element: <Transaction/>,
        children: [
          {
            path: "/transaction",
            element: <Amount/>
          },
          {
            path: "/transaction/step1",
            element: <StepOne/>
          },
          {
            path: "/transaction/step2",
            element: <StepTwo/>
          }
        ]
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
