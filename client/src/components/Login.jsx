
import React from 'react'
import ErrorIcon from '@mui/icons-material/Error';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Login() {
    const [values, setValues] = useState({
       
    })

    const HandleInput =(e)=>{
        setValues(prev=>({
            ...prev, [e.target.name]: e.target.value
        }))
    }   
    const HandleSubmit =(e)=>{
        e.preventDefault()
    }


  return (
        <>
            <form action="" onSubmit={HandleSubmit} className='border-2 border-gray-800 flex flex-col justify-center items-center w-96 h-80 m-auto mt-[20%] rounded-md'>
                <h1 className='text-2xl mb-5'>sign in</h1>
                <div className='flex flex-col gap-5'>
                <div>
                     <input onChange={HandleInput} className= 'rounded-md h-10 w-80 outline-none text-gray-700 bg-gray-200 pl-5' type="email" name="email" placeholder='Email' />
                     {/* <p className='text-xs text-red-800'>Error handling </p> */}
                </div>
                <div>
                    <input onChange={HandleInput}  className= 'rounded-md h-10 w-80 outline-none text-gray-700 bg-gray-200 pl-5' type="text" name="password" placeholder='password' />
                    {/* <p className='text-xs text-red-800'>Error handling </p> */}
                </div>
                <div>
                  <button className=' w-80 h-10 rounded-md bg-white border-2 border-gray-700 hover:bg-black hover:text-white'>Sign In</button>
                    <p className='text-sm text-center mt-3 text-gray-600'>Dont have an account? <Link className='text-gray-900 underline' to={'/register'}>Sign-Up</Link></p>
                </div>
                
                </div>
            </form>
        </>
  )
}

export default Login