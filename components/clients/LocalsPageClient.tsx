"use client"
import { useCallback, useEffect, useRef, useState } from "react";
import LocalsFeed from "@/components/LocalsFeed";
import Breadcrumb from "@/components/Breadcrumb";
import SearchInput,{SearchInputHandles}  from "@/components/SearchInput";
import { Local } from "@/types";

interface LocalsPageClientProps {
  initialLocals: Local[];
}

const LocalsPageClient = ({initialLocals}: LocalsPageClientProps) => {
    const  allLocals  = initialLocals;
    const searchRef = useRef<SearchInputHandles>(null);
    const [searchTerm, setSearchTerm] = useState("")
    const [localsData, setLocalsData] = useState(allLocals)

    useEffect(() =>{
     const filteredData = allLocals?.filter((local) => local.name.toLowerCase().includes(searchTerm.toLowerCase()) || local.type.toLowerCase().includes(searchTerm.toLowerCase()) || local.address.toLowerCase().includes(searchTerm.toLowerCase()));
       setLocalsData(filteredData)
    }, [allLocals,searchTerm]) 


    const handleSearchChange = useCallback((value: string) => {
      setSearchTerm(value);
    }, []);

    return (
      <div className="search-page-container">
          <Breadcrumb linkUrl={"/"} descTitle="Volver al inicio" />
          <SearchInput ref={searchRef}  onSearchChange={handleSearchChange} placeholder="..." />
          <LocalsFeed title={"Locales"} data={localsData} />
      </div>
    )

  }

  export default LocalsPageClient;