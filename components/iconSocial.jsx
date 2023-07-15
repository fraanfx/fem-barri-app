"use client"
import { useState } from "react";
import {Link} from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  
    faInstagram,
    faFacebookF,
    faYouTube,
    faPinterest,
    faLinkedIn,
    faTwitter
  } from "@fortawesome/react-fontawesome";

const IconSocial = ({type, link}) => {
  const [iconType, setIcon] = useState(faInstagram)
    const how = (type) => {
        // if(type == "facebookUrl"){
        //     setIcon(faFacebookF)
        // } else if(type == "instagramUrl"){
        //   setIcon(faInstagram)
        //  }else if (type == "twitterUrl"){
        //      setIcon(faTwitter);
        //  } else if (type == "youtubeUrl"){
        //   setIcon(faYouTube);
        // } else if (type == "pinterestUrl"){
        //     setIcon(faPinterest)
        // }else if (type == "linkedinUrl"){
        //     setIcon(faLinkedIn);
        // }else if (type == "tiktokUrl"){
        //     setIcon(faTikTok);
        // } 
        return null
    }
    
  return (
    <div className="icon-container">
            <a target="_blank" href={link} rel="noopener noreferrer">
         <p>{type} {link}</p>
        </a>
    </div>
  )
}

export default IconSocial