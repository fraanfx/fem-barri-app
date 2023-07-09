import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import the icons you need
import {
    faAnglesRight
  } from "@fortawesome/free-solid-svg-icons";
const ViewMore = ({linkUrl, descTitle}) => {
  return (
    <Link href={linkUrl} className="view-more">
       <p>{descTitle}</p>  <FontAwesomeIcon className="view-more-icon" icon={faAnglesRight} /> 
    </Link>
  )
}

export default ViewMore;