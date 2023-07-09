"use client"
import {Link} from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';import {
    faTikTok,
    faInstagram,
    faFacebookF,
    faYouTube,
    faPinterest,
    faLinkedIn,
    faTwitter
  } from "@fortawesome/free-solid-svg-icons";

const IconSocial = ({type, link}) => {
    // const how = (type) => {
    //     if(type == "facebookUrl"){
    //         return "faFacebookF"
    //     } else if(type == "instagramUrl"){
    //          return faInstagram
    //      }else if (type == "twitterUrl"){
    //          return faTwitter;
    //      } else if (type == "youtubeUrl"){
    //         return faYouTube;
    //     } else if (type == "pinterestUrl"){
    //         return faPinterest;
    //     }else if (type == "linkedinUrl"){
    //         return faLinkedIn;
    //     }else if (type == "tiktokUrl"){
    //         return faTikTok;
    //     } 
    // }
    // how()
  return (
    <div className="icon-container">
        <FontAwesomeIcon icon={faYouTube} style={{marginRight : "6px", fontSize : "20px"}} />
        {/* <a target="_blank" href={link} rel="noopener noreferrer">
         <p>{type} {link}</p>
        </a> */}
    </div>
  )
}

export default IconSocial