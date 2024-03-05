"use client"

import React from "react";
import Link from "next/link";
import SearchBar from "../SearchBar/page";


const Navbar = () => {

  return (
    <>
    <nav className=" px-4 py-5 flex justify-between items-center ">
     
      <div className=''>
      
      <span className='font-bold text-3xl'>Autonopros</span>
      </div>
      <ul className="flex space-x-5">
        <li>
          {/* <input
            type="text"
            placeholder="Search"
            className="py-1.5 px-1.5 rounded-full min-w-10"
          />
        </li>
        <li>
          <button className="border border-white rounded-lg px-1.5 py-1 hover:bg-blue-400 hover:text-gray-200">
            Search 
          </button> */}
          <SearchBar/>
        </li>
        <li>
         
          <Link href="/" className="hover:bg-gray-900 px-2 py-2 mx-2 hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
         
          <Link href="/find-work" className="hover:bg-gray-900 px-2 py-2 mx-2  hover:text-gray-300">
            Find Work
          </Link>
        </li>
       
        <li>
          <Link href="/blog" className="hover:bg-gray-900 px-2 py-2 mx-2  hover:text-gray-300">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/pages/login" className="hover:bg-gray-900 px-2 py-2 mx-2  hover:text-gray-300">
            Log In
          </Link>
        </li>
        <li>
          <Link href="/pages/signup" className="hover:bg-gray-900 mx-2  hover:text-gray-300 px-2 py-2">
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
    
    </>
  );
};

export default Navbar;
