import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className='space-x-2 md:space-x-5'>
      <button><IoSearchOutline /></button>
      <input className='w-30 md:w-100'
        // value={}
        // onChange={

        // }
        placeholder='Search'
      />
    </div>
  )
}

export default SearchBar
