import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import the icons you need
import {
    faAngleLeft,
    faArrowUpRightFromSquare
  } from "@fortawesome/free-solid-svg-icons";

interface BreadcrumbProps{
  linkUrl: string;
  descTitle: string;
}

const Breadcrumb = ({linkUrl, descTitle}: BreadcrumbProps) => {
  return (
    <Link href={linkUrl} className="breadcrumb">
        <FontAwesomeIcon className="breadcrumb-icon" icon={faAngleLeft} style={{marginRight : "6px"}} /> <p>{descTitle}</p> 
    </Link>
  )
}

export default Breadcrumb