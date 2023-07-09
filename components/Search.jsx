'use client'
import { useState, useEffect } from 'react';
import { data } from '@/data/data';
import Feed from './Feed';
const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');   
    const [filteredData, setFilteredData] = useState(data);
    useEffect(() => {
        const filtering = data?.offers.filter((offer) => offer.name.toLowerCase().includes(searchTerm.toLowerCase()) || offer.local.toLowerCase().includes(searchTerm.toLowerCase())); 
    }, [searchTerm])

  return (
    <div>
        <input type="text" onChange={(e) => {setSearchTerm(e.target.value)}} />
        <Feed data={data} typeComponent="offers" />
    </div>

  )
}

export default Search