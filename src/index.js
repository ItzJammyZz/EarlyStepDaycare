import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cover from './components/Cover';
import Navbar from './components/Navbar';
import About from './components/About';
import ErrorPage from './ErrorPage';
import Footer from './components/Footer';
import Jobs from './components/Jobs';
import ContactUs from './components/ContactUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: [<Navbar/>, <Cover/>,<Footer/>],
    errorElement: [<Navbar/>, <ErrorPage />, <Footer/>],
  }, {
    path: "/about",
    element: [<Navbar/>,<About />, <Footer/>]
  }, 
  {
    path: "/jobs",
    element: [<Navbar/>,<Jobs/>,<Footer/>]
  },
  {
    path: "/contact",
    element: [<Navbar/>, <ContactUs/>,<Footer/>]
  },
  // {
  //   path: "/",
  //   element: [<Navbar/>, <Footer/>]
  // }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

