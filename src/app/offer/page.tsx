"use client"
import { useEffect, useState } from "react";
import OffersFeed from "@/components/OffersFeed";
import {data} from "@/data/data"
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Breadcrumb from "@/components/Breadcrumb";
// import the icons you need
import {
    faMagnifyingGlass
  } from "@fortawesome/free-solid-svg-icons";
import { fetchOffers } from "@/utils/fetchHooks";


const serverOffers =  fetchOffers();



const OffersPage = () => {
    console.log(serverOffers.then)
    const  allOffers  = data.offers;
    console.log(allOffers)
    const [searchTerm, setSearchTerm] = useState("")
    const [offersData, setOffersData] = useState(allOffers)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
        setSearchTerm(e.target.value)
    }
    
    useEffect(() => {
        const filteredData = allOffers?.filter((offer) => offer.name.toLowerCase().includes(searchTerm.toLowerCase()) || offer.local.toLowerCase().includes(searchTerm.toLowerCase()) );
        setOffersData(filteredData)
    }, [allOffers, searchTerm]) 

  return (
    <div className="search-page-container">
         {/* //Breadcrumb */}
            <Breadcrumb linkUrl={"/"} descTitle="Volver al inicio" />
        <div className="search-container">
            <div className="search">
                <FontAwesomeIcon icon={faMagnifyingGlass}  className="icon-search "/>
                <input className="text-input" type="text" onChange={handleChange}></input>
            </div>
        </div>
        <OffersFeed title={"Locales"} data={offersData} />
    </div>
  )
}

export default OffersPage;