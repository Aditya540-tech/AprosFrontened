"use client"

import React from 'react'
import Link from "next/link";
const SubMenu = () => {
  return (
    <div>
      <nav className='bg-gray-900 py-5'>
      <ul className='ml-7 flex flex-row space-x-6 '>
        <li>
          <Link href="/find-talent" className='hover:bg-gray-800 px-2 py-3'>Find Talent</Link>
        </li>
        <li>
          <Link href="/find-work" className='hover:bg-gray-800 px-2 py-3'>Find Work</Link>
        </li>
        <li>
          <Link href="/about" className='hover:bg-gray-800 px-3 py-3'>About</Link>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default SubMenu
