"use client"
import Link from "next/link";
import React from 'react'

const SignUp = () => {
  return (
    <div className="w-full">
      <div className="  border border-white max-w-80 m-auto mt-8 p-8 rounded-lg  bg-gray-900">
      <h1 className='font-bold text-3xl p-3 mb-4 text-center -mt-6'>Sign Up</h1>
      <form className=' flex flex-col space-y-6 '>
      <input type="text" className="px-3 py-1.5  rounded-md bg-gray-700" placeholder="First Name"/>
      <input type="text" className="px-3 py-1.5 rounded-md  bg-gray-700" placeholder="Last Name"/>
        <input type="email" className="px-3 py-1.5 rounded-md  bg-gray-700" placeholder="Email"/>
        <input type="password" className="px-3 py-1.5 rounded-md  bg-gray-700" placeholder="Password"/>
        <button className="px-3 py-2 border border-white rounded-md  hover:bg-blue-700">Submit</button>
        <p>Already have an account ? <Link href='/pages/login' className='text-blue-500'> Login</Link></p>
      </form>
      </div>
    </div>
  )
}

export default SignUp
