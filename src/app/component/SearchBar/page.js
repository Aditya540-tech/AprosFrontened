import React from 'react'
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className='relative'>
      <form className='w-[300px] relative'>
        <input type="search" placeholder='Search' className='w-full p-3 rounded-full bg-slate-800 -mt-1'/>
        <button className='absolute right-1 top-1/2 -translate-y-1/2 p-3 bg-slate-900 rounded-full -mt-1'>
            <IoSearch/>
        </button>
      </form>
    </div>
  )
}

export default SearchBar 
