import React from 'react'
import {Link} from 'react-router-dom'

export default function Signup() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>
        Sign Up
      </h1>
      <form className=' flex flex-col gap-4' >
        <input type='text' placeholder='Username' id='username' className='bg-slate-100 p-3' />
        <input type='email' placeholder='Email'  id='email' className='bg-slate-100 p-3' />
        <input type='password' placeholder='Password' id='password' className='bg-slate-100 p-3' />
        <button type='submit' className='bg-blue-950 rounded-lg text-white p-3 hover:opacity-95'>Sign Up</button>
        </form>
        <div className='flex gap-2 mt-5 '>
        <p>
          Already have an account? 

        </p>
        <Link to = '/Signin'>
        <span className='text-blue-500' >Sign-in</span>
       </Link>
       </div>
     
    </div>
  )
}
