"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GoogleMapReact from 'google-map-react';


import {
  faLocationPin,
} from "@fortawesome/free-solid-svg-icons";

// interface faProps {
//   icon: FontAwesomeIconProps,
//   lat: number,
//   long: number
//   className?: string
// }

type PointerProps = {
  lat: number,
  lng: number
}
interface geoPositionProps  {
  geoPosition:
    { 
      lat: number,
      lng: number
    }
}
// const containerStyle = {
//   height: '50vh', width: '100%' 
// }

 
const  Pointer: React.FC<PointerProps> = () =>( 
      <FontAwesomeIcon
        icon={faLocationPin}
        style={{ fontSize: 26, color: "#ff4e33", marginRight: "9px" }}
      />
) 


const Map = ({geoPosition}: geoPositionProps) => {

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
        draggable={false}
      > 
      <Pointer  lat={geoPosition.lat} lng={geoPosition.lng}/>
      </GoogleMapReact> 
    </div>
  )
}

export default Map;