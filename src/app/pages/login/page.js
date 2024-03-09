
import React from 'react'

const Login = () => {
  return (
    <div className="w-full text-black">
    <div className="border border-black max-w-80 m-auto mt-8  p-8  rounded-lg text-black ">
    <h1 className='font-bold text-3xl p-3 mb-4 -mt-4 -ml-3 text-black'>Log In</h1>
    <form className='flex flex-col space-y-6'>
      <input type="email" className="px-3 py-1.5 rounded-md border border-black " placeholder="Email"/>
      <input type="password" className="px-3 py-1.5 rounded-md border border-black" placeholder="Password"/>
      <div className='flex w-full  justify-end'>
      <input type="checkbox" className="h-4 w-4 rounded border-gray-300 bg-black focus:ring-blue-500 focus:ring-1"/>
       <p className='text-xs '>Remember me</p>
       <p className='text-xs text-blue-700 font-bold ml-auto'>Forgot Password?</p>
      </div>
      <button className="px-3 py-2 border border-black bg-green-500 rounded-lg hover:bg-green-600 text-white hover:text-gray-100">Submit</button>
      <div className='flex'>
        <div className=' border border-black w-2/5 h-[1px] my-5'></div>
        <div className=' border border-black rounded-full w-1/5 text-center text-sm p-3 mt-[-2px] mb-[-2px]'>OR</div>
        <div className=' border border-black w-2/5 h-[1px] my-5'></div>
      </div>
      <button className="px-3 py-2 border border-black bg-white rounded-lg text-black hover:bg-gray-100">
        <div className='flex space-x-3'>
        <img 
        src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
         alt="logo"
         width={24}
         height={24}/><span>Login in with Google</span>
        </div>
        </button>
        <p className='text-xs text-center'>No account?</p>
        <p className='text-xs ml-2'>Join Autonopros as a <span className='text-blue-700 font-bold'>freelancer</span> or <span className='text-blue-700 font-bold'>client</span></p>
    </form>
    </div>
  </div>
  )
}

export default Login
