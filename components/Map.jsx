"use client"
import GoogleMapReact from 'google-map-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import {
  faLocationPin,
  faCheck,
  faShareNodes
} from "@fortawesome/free-solid-svg-icons";


const Map = ({geoPosition}) => {

    console.log("[coordenadas1]", geoPosition.lat, geoPosition.lng)
    const defaultProps = {
        center: {
            lat: geoPosition.lat,
            lng : geoPosition.lng
        },
        zoom: 17
      };
    
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
      
    <FontAwesomeIcon
        icon={faLocationPin}
        style={{ fontSize: 26, color: "#ff4e33", marginRight: "9px" }}
        lat={geoPosition.lat}
          lng={geoPosition.lng}
      />
      </GoogleMapReact>
    </div>
  )
}

export default Map;