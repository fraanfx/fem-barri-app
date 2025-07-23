"use client"

import { useImperativeHandle, forwardRef, InputHTMLAttributes, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

  
// Declaramos interfaz para las funcionalidades del Search
export interface SearchInputHandles {
    getValue: () => string;
  }

  interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string; 
    onSearchChange?: (value: string) => void;
  }
  


  const SearchInput = forwardRef<SearchInputHandles, SearchInputProps>(
  ({ placeholder, onSearchChange }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
      getValue: () => inputRef.current?.value || '', //Retorna el valor del input
    }));
 
      const handleChange = () => {
        const value = inputRef.current?.value || '';
        onSearchChange?.(value);
      };

  return (
     <div className="search-container">
                <div aria-roledescription='search' className="search">
                    <FontAwesomeIcon icon={faMagnifyingGlass}  className="icon-search "/>
                    <input className="text-input" type="text" ref={inputRef}  onChange={handleChange} placeholder={placeholder} ></input>
                </div>
    </div>
  )
});

  SearchInput.displayName = 'SearchInput'; //Renombramos el componente ya que usamos forwardRef

  export default SearchInput;