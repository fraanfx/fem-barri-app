"use client"
import { useEffect, useState } from "react";
import LocalsFeed from "@/components/LocalsFeed";
import {data} from "@/data/data"
import Breadcrumb from "@/components/Breadcrumb";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import the icons you need
import {
    faMagnifyingGlass
  } from "@fortawesome/free-solid-svg-icons";

const LocalsPage = () => {
    const  allLocals  = data.locals;
    const [searchTerm, setSearchTerm] = useState("")
    const [localsData, setLocalsData] = useState(allLocals)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
        setSearchTerm(e.target.value)
    }

    useEffect(() => {
        console.log('[LOCALSDATA1]', localsData)
        const filteredData = allLocals?.filter((local) => local.name.toLowerCase().includes(searchTerm.toLowerCase()) || local.type.toLowerCase().includes(searchTerm.toLowerCase()) || local.address.toLowerCase().includes(searchTerm.toLowerCase()) );
        setLocalsData(filteredData)
        console.log('[LOCALSDATA]', allLocals)
        console.log('[filtered]', filteredData)
    }, [allLocals, searchTerm]) 

  return (
    <div  className="search-page-container">
         
         {/* //Breadcrumb */}
         <Breadcrumb linkUrl={"/"} descTitle="Volver al inicio" />
        <div className="search-container">
            <div className="search">
                <FontAwesomeIcon icon={faMagnifyingGlass}  className="icon-search"/>
                <input className="text-input" type="text" onChange={handleChange}></input>
            </div>
        </div>

        <LocalsFeed title={"Ofertas"} data={localsData} />
    </div>
  )
}

export default LocalsPage;