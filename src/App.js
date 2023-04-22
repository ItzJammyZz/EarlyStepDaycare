import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Cover from './components/Cover';
import About from './components/About'
import Jobs from './components/Jobs'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer';
import './App.css'
// import Banner from './components/Banner';




function App() {

  const [showBanner, setShowBanner] = useState(true);
  function handleCloseBanner() {
    setShowBanner(false);
  }
  

  return (
    <div className="App">
      {/* <Banner show={showBanner} onClose={handleCloseBanner} /> */}
      < Navbar />
      <Cover />
      <About />
      <Jobs />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
