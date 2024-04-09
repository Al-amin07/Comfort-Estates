import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';
import NotFound from './Components/NotFound.jsx';
import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import AuthProvider from './Components/Provider/AuthProvider.jsx';
import Update from './Components/Update.jsx';
import ViewProperty from './Components/ViewProperty.jsx';
import Private from './Components/Provider/Private.jsx';
import Maps from './Components/Maps.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: '/',
        loader: () => fetch('/data.json'),
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/update',
        element: <Private><Update></Update></Private>
      },
      {
        path: '/property',
        element: <Private>
          <ViewProperty></ViewProperty>
        </Private>
      },
      {
        path: '/maps',
        element: <Maps></Maps>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router}></RouterProvider>
   </AuthProvider>
   
  </React.StrictMode>,
)
