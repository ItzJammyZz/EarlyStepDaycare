import React, { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import './Map.css'

  const containerStyle = {
    width: '100%',
    height: '400px'
  };
  
  const center = {
    lat: 51.52023,
    lng: -0.06797
  };

function Map() {
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    })
  
    const [map, setMap] = React.useState(null)
  
    const onLoad = React.useCallback(function callback(map) {
      // This is just an example of getting and using the map instance!!! don't just blindly copy!
      const bounds = new window.google.maps.LatLngBounds(center);
    //   map.fitBounds(bounds);
    <GoogleMap zoom={16}></GoogleMap>
  
      setMap(map)
    }, [])
  
    const onUnmount = React.useCallback(function callback(map) {
      setMap(null)
    }, [])
  
    return isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={16}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
            <MarkerF position={{ lat: 51.52023, lng: -0.06797 }} opacity={0.9} title='Earlysteps daycare 👶' />
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
    ) : <></>
  }
export default Map


