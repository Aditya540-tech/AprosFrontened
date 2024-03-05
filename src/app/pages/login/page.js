
import React from 'react'

const Login = () => {
  return (
    <div className="w-full">
    <div className="border border-white max-w-80 m-auto mt-8  p-8  rounded-lg  bg-gray-900 ">
    <h1 className='font-bold text-3xl p-3 mb-4 -mt-4 text-center'>Login</h1>
    <form className='flex flex-col space-y-6 '>
      <input type="email" className="px-3 py-1.5 rounded-md  bg-gray-700" placeholder="Email"/>
      <input type="password" className="px-3 py-1.5 rounded-md  bg-gray-700" placeholder="Password"/>
      <button className="px-3 py-2 border border-white rounded-lg hover:bg-blue-700">Submit</button>
    </form>
    </div>
  </div>
  )
}

export default Login
