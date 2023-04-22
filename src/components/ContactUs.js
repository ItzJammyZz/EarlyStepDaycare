import React, { useState, useEffect } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import './ContactUs.css'
import {FaInstagram, FaTwitterSquare, FaFacebookSquare} from 'react-icons/fa'


const email = "Contact@earlystepsdaycare.co.uk";
const subject = "Inquiry from Early Steps Daycare Website";
const body = "Dear Early Steps Daycare, \n\nI am interested in your daycare services and would like to schedule a visit. Please let me know your availability. \n\nThank you!";

const mapStyles = [
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [
      {
        visibility: "off"
      }
    ]
  }
];

export default function ContactUs() {
  const [mapContainerStyle, setMapContainerStyle] = useState({
    width: "1450px",
    height: "950px"
  });

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    // googleMapsApiKey: 'AIzaSyByvnfL2QWXxAjAPB5EctB19mHqZEgHtHA'
  })

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 940) {
        setMapContainerStyle({
          width: `${screenWidth - 20}px`,
          height: "300px"
        });
      } else {
        setMapContainerStyle({
          width: "1450px",
          height: "800px"
        });
      }
    } 

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className='mainContactUs' id='contact'>
      <div className='innerTitleContactUs'>
        Contact Us
      </div>
      <div className='contactUsBox'>
        <h2>Contact Us</h2>
        <p className='address'><strong>Address:</strong> 47 Hobsons Place, Woodseer St, E1 5HH </p>
        <p className='phone'><strong>Phone:</strong> (555) 555-1234</p>
        <p className='email'><strong>Email:</strong> Contact@earlystepsdaycare.co.uk</p>
        <a href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`} className='button'>Email Now</a>
        <div className='iconContactUs'>
          <a href='https://www.instagram.com/earlysteps_daycare/'>< FaInstagram /></a>
          <a href=''>< FaTwitterSquare/></a>
          <a href=''>< FaFacebookSquare/></a>
        </div>
        <div className='map-container'>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={18}
          center={{ lat: 51.52023, lng: -0.06797 }}
          options={{styles: mapStyles}}
        >
          <MarkerF position={{ lat: 51.52023, lng: -0.06797 }} opacity={0.9} title='Earlysteps daycare 👶' />
        </GoogleMap>
      </div>
      </div>
    </div>
  );
}






// import React from "react";
// import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
// import './ContactUs.css'
// import {FaInstagram, FaTwitterSquare, FaFacebookSquare} from 'react-icons/fa'

// const email = "Contact@earlystepsdaycare.co.uk";
// const subject = "Inquiry from Early Steps Daycare Website";
// const body = "Dear Early Steps Daycare, \n\nI am interested in your daycare services and would like to schedule a visit. Please let me know your availability. \n\nThank you!";

// const mapContainerStyle = {
//   width: "950px",
//   height: "600px"
// };

// const center = {
//   lat: 51.52023,
//   lng: -0.06797
// };

// const mapStyles = [
//   {
//     featureType: "poi",
//     elementType: "labels",
//     stylers: [
//       {
//         visibility: "off"
//       }
//     ]
//   }
// ];

// export default function ContactUs() {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
//   })

//   if (!isLoaded) return <div>Loading...</div>;

//   return (
//     <div className='mainContactUs'>
//       <div className='innerTitleContactUs'>
//         Contact Us
//       </div>
//       <div className='contactUsBox'>
//         <h2>Contact Us</h2>
//         <p className='address'><strong>Address:</strong> 47 Hobsons Place, Woodseer St, E1 5HH </p>
//         <p className='phone'><strong>Phone:</strong> (555) 555-1234</p>
//         <p className='email'><strong>Email:</strong> Contact@earlystepsdaycare.co.uk</p>
//         <a href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`} className='button'>Email Now</a>
//         <div className='iconContactUs'>
//           <a href=''>< FaInstagram /></a>
//           <a href=''>< FaTwitterSquare/></a>
//           <a href=''>< FaFacebookSquare/></a>
//         </div>
//       </div>
//       <div className='map-container'>
//         <GoogleMap
//           mapContainerStyle={mapContainerStyle}
//           zoom={18}
//           center={center}
//           options={{styles: mapStyles}}
//         >
//           <MarkerF position={center} opacity={0.9} title='Earlysteps daycare 👶' />
//         </GoogleMap>
//       </div>
//     </div>
//   );
// }
