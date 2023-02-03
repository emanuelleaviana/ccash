import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import Sobre from "./pages/Sobre";
import Serviços from "./pages/Serviços";
import Faq from "./pages/Faq"

const router = createBrowserRouter([
  {
        path: "/",
        element: <Home />
      },
      {
        path:"/login",
        element: <Login />
      },
      {
        path:"/sobre",
        element: <Sobre />
      },
      {
        path:"/serviços",
        element: <Serviços />
      },
      {
        path:"/faq",
        element: <Faq />
      }, 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)