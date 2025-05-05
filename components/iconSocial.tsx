"use client"
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

  import {
    faInstagram,
    faFacebookF,
    faYoutube,
    faPinterest,
    faLinkedinIn,
    faTwitter,
    faTiktok
  } from "@fortawesome/free-brands-svg-icons";


interface IconSocialProps {
  type: string,
  link: string
}



const IconSocial = ({type, link}: IconSocialProps) => {
  const [iconType, setIcon] = useState(faInstagram)
    const how = (type: string) => {
        if(type == "facebookUrl"){
            setIcon(faFacebookF)
        } else if(type == "instagramUrl"){
          setIcon(faInstagram)
         }else if (type == "twitterUrl"){
             setIcon(faTwitter);
         } else if (type == "youtubeUrl"){
          setIcon(faYoutube);
        } else if (type == "pinterestUrl"){
            setIcon(faPinterest)
        }else if (type == "linkedinUrl"){
            setIcon(faLinkedinIn);
        }else if (type == "tiktokUrl"){
            setIcon(faTiktok);
        } 
        return null
    }
    useEffect(()=> {
      how(type)
    })
    
  return (
    <div className="icon-container">
            <a target="_blank" href={link} rel="noopener noreferrer">
            <FontAwesomeIcon icon={iconType} />
         
        </a>
    </div>
  )
}

export default IconSocial