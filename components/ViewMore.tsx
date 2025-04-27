import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import the icons you need
import {
    faAnglesRight
  } from "@fortawesome/free-solid-svg-icons";

  interface ViewMoreProps {
    linkUrl: string;
    descTitle: string;
  }

const ViewMore = ({linkUrl, descTitle}: ViewMoreProps) => {
  return (
    <Link href={linkUrl} className="view-more">
       <p>{descTitle}</p>  
       <div className="view-more-icon--container"> 
         <FontAwesomeIcon className="view-more-icon" size="xs" icon={faAnglesRight} /> 
      </div>
    </Link>
  )
}

export default ViewMore;