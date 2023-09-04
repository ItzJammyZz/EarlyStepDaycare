import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cover from './components/Cover';
import Navbar from './components/Navbar';
import ErrorPage from './ErrorPage';
import Footer from './components/Footer';
import Test from './components/Test';
import Gallery from './components/Gallery';
import Map from './components/Map';
import Contact from './components/Contact';
import Vacancies from './components/Vacancies'


const router = createBrowserRouter([
  {
    path: "/",
    element: [<Navbar/>, <Cover/>,<Map/>,<Contact/>,<Footer/>],
    errorElement: [<Navbar/>, <ErrorPage />, <Footer/>],
  },  
  {
    path: "/about",
    element: [<Navbar/>,<Test/>,<Contact/>,<Footer/>]
  },
  {
    path: "/vacancies",
    element: [<Navbar/>,<Vacancies/>,<Contact/>,<Footer/>]
  },
  // {
  //   path: "/vacancies",
  //   element: [<Navbar/>,<Vacancies/>,<Footer/>]
  // },
  // {
  //   path: "/gallery",
  //   element: [<Navbar/>,<Gallery/>,<Footer/>]
  // },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

