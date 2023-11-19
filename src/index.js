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
import News from './components/News';
import { HelmetProvider } from 'react-helmet-async';


const router = createBrowserRouter([
  {
    path: "/",
    element: [<Navbar/>, <Cover/>,<Map/>,<Contact/>,<Footer/>],
    errorElement: [<Navbar/>, <ErrorPage />, <Footer/>],
  },  
  {
    path: "/news",
    element: [<Navbar/>,<News/>,<Contact/>,<Footer/>]
  },
  {
    path: "/about",
    element: [<Navbar/>,<Test/>,<Contact/>,<Footer/>]
  },
  {
    path: "/vacancies",
    element: [<Navbar/>,<Vacancies/>,<Contact/>,<Footer/>]
  },
  {
    path: "/gallery",
    element: [<Navbar/>,<Gallery/>,<Contact/>,<Footer/>]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);

