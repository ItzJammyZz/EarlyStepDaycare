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
import Offer from './components/Offer'; 

const router = createBrowserRouter([
  {
    path: "/",
    element: [<Navbar/>,<Cover/>,<Map/>,<Contact/>,<Footer/>],
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



// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Cover from './components/Cover';
// import Navbar from './components/Navbar';
// import ErrorPage from './ErrorPage';
// import Footer from './components/Footer';
// import Test from './components/Test';
// import Gallery from './components/Gallery';
// import Map from './components/Map';
// import Contact from './components/Contact';
// import Vacancies from './components/Vacancies'
// import News from './components/News';
// import { HelmetProvider } from 'react-helmet-async';
// import Banner from './components/Banner'; 

// const App = () => {
//   const [showBanner, setShowBanner] = useState(false);

//   useEffect(() => {
//     // Set a delay of 5000 milliseconds (5 seconds) before showing the banner
//     const timeoutId = setTimeout(() => {
//       setShowBanner(true);
//     }, 5000);

//     // Cleanup the timeout when the component unmounts
//     return () => clearTimeout(timeoutId);
//   }, []);

//   function handleCloseBanner() {
//     setShowBanner(false);
//   }

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: [  <Banner show={showBanner} onClose={handleCloseBanner} />,<Navbar/>,<Cover/>,<Map/>,<Contact/>,<Footer/>],
//       errorElement: [<Navbar/>, <ErrorPage />, <Footer/>],
//     },  
//     {
//       path: "/news",
//       element: [<Navbar/>,<News/>,<Contact/>,<Footer/>]
//     },
//     {
//       path: "/about",
//       element: [<Navbar/>,<Test/>,<Contact/>,<Footer/>]
//     },
//     {
//       path: "/vacancies",
//       element: [<Navbar/>,<Vacancies/>,<Contact/>,<Footer/>]
//     },
//     {
//       path: "/gallery",
//       element: [<Navbar/>,<Gallery/>,<Contact/>,<Footer/>]
//     },
//   ]);

//   return (
//     <React.StrictMode>
//       <HelmetProvider>
//         <RouterProvider router={router} />
//       </HelmetProvider>
//     </React.StrictMode>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
