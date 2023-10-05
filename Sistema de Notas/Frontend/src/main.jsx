import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from './components/Layout';
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Login from './views/Login';

const router = createBrowserRouter([
  {
    path: "/Login",
    element: <Login />,
  },
  {
     path: "/Layout",
     element: <Layout />,
  //   children: [
  //     {
  //       path: "contacts/:contactId",
  //       element: <Contact></Contact>,
  //     },
  //     {
  //       path: "contacts",
  //       element: <Contacts></Contacts>,
  //     },
  //   ],
},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
