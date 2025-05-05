import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faAngleLeft,
  } from "@fortawesome/free-solid-svg-icons";

interface BreadcrumbProps{
  linkUrl: string;
  descTitle: string;
}

const Breadcrumb = ({linkUrl, descTitle}: BreadcrumbProps) => {
  return (
    <Link href={linkUrl} className="breadcrumb">
        <FontAwesomeIcon className="breadcrumb-icon" icon={faAngleLeft} /> <p>{descTitle}</p> 
    </Link>
  )
}

export default Breadcrumb