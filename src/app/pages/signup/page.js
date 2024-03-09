"use client"
import Link from "next/link";
import React from 'react'

const SignUp = () => {
  return (
    <div className="w-full  text-black">
      <div className="  border border-black max-w-80 m-auto mt-8 p-8 rounded-lg ">
      <h1 className='font-bold text-3xl p-3 mb-2 -mt-4 -ml-4'>Sign Up</h1>
      <form className=' flex flex-col space-y-6  text-black'>
      <input type="text" className="px-3 py-1.5  rounded-md border border-black" placeholder="First Name"/>
      <input type="text" className="px-3 py-1.5 rounded-md  border border-black" placeholder="Last Name"/>
        <input type="email" className="px-3 py-1.5 rounded-md  border border-black" placeholder="Email"/>
        <input type="password" className="px-3 py-1.5 rounded-md  border border-black" placeholder="Password"/>
        <button className="px-3 py-2 border border-white rounded-md  bg-green-500  hover:bg-green-600 text-white">Submit</button>
        <p className='text-xs text-center '>Already have an account ? <Link href='/pages/login' className='text-blue-500'> Login</Link></p>
        <div className='flex'>
        <div className=' border  border-black w-2/5 h-[1px] my-5'></div>
        <div className=' border border-black rounded-full w-1/5 text-center text-sm p-3 mt-[-2px] mb-[-2px]'>OR</div>
        <div className=' border border-black w-2/5 h-[1px] my-5'></div>
      </div>
      <button className="px-3 py-2 border border-black rounded-lg border border-black hover:bg-gray-100">
        <div className='flex space-x-3'>
        <img 
        src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
         alt="logo"
         width={24}
         height={24}/><span>Login in with Google</span>
        </div>
        </button>
      </form>
      </div>
    </div>
  )
}

export default SignUp
