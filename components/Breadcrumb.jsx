import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import the icons you need
import {
    faAngleLeft,
    faArrowUpRightFromSquare
  } from "@fortawesome/free-solid-svg-icons";
const Breadcrumb = ({linkUrl, descTitle}) => {
  return (
    <Link href={linkUrl} className="breadcrumb">
        <FontAwesomeIcon className="breadcrumb-icon" icon={faAngleLeft} style={{marginRight : "6px"}} /> <p>{descTitle}</p> 
    </Link>
  )
}

export default Breadcrumb