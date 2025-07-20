"use client"
import { useCallback, useEffect, useRef, useState } from "react";
import OffersFeed from "@/components/OffersFeed";
import Breadcrumb from "@/components/Breadcrumb";
import SearchInput,{SearchInputHandles}  from "@/components/SearchInput";
import { Offer } from "@/types";

interface OffersPageClientProps {
  initialOffers: Offer[];
}

const OffersPageClient = ({initialOffers}: OffersPageClientProps) => {
    
    const  allOffers  = initialOffers;
    
    const searchRef = useRef<SearchInputHandles>(null);
    const [searchTerm, setSearchTerm] = useState("")
    const [offersData, setOffersData] = useState(allOffers)
   

    useEffect(() =>{
     const filteredData = allOffers?.filter((offer) => offer.name.toLowerCase().includes(searchTerm.toLowerCase()) || offer.local.toLowerCase().includes(searchTerm.toLowerCase()) );
       setOffersData(filteredData)
    }, [allOffers,searchTerm]) 

    
      const handleSearchChange = useCallback((value: string) => {
        setSearchTerm(value);
      }, []);

  return (
    <div className="search-page-container">
        <Breadcrumb linkUrl={"/"} descTitle="Volver al inicio" />
        <SearchInput ref={searchRef}  onSearchChange={handleSearchChange} placeholder="..." />
        <OffersFeed title={"Ofertas"} data={offersData} />
    </div>
  )
}

export default OffersPageClient;