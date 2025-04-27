"use client"
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import GoogleMapReact from 'google-map-react';


import {
  faLocationPin,
} from "@fortawesome/free-solid-svg-icons";

interface faProps {
  icon: FontAwesomeIconProps,
  lat: number,
  long: number
  className?: string
}

type PointerProps = {
  lat: number,
  lng: number
}
type geoPositionProps = {
  lat: number,
  lng: number
}
const containerStyle = {
  height: '50vh', width: '100%' 
}

 
const  Pointer: React.FC<PointerProps> = (pointerProps) =>( 
      <FontAwesomeIcon
        icon={faLocationPin}
        style={{ fontSize: 26, color: "#ff4e33", marginRight: "9px" }}
      />
) 


const Map = (geoPosition: geoPositionProps) => {

  const coords = {
    lat: -3.745,
    lng: -38.523,
  }

  
  

    console.log("[coordenadas1]", geoPosition.lat, geoPosition.lng)
    console.log("[coordenadas2]", coords.lat, coords.lng)
    const defaultProps = {
        center: {
            lat: coords.lat,
            lng : coords.lng
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
      <Pointer lat={coords.lat} lng={coords.lng}/>
      </GoogleMapReact> 
    </div>
  )
}

export default Map;