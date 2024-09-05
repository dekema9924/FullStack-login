import React from 'react'
import {Link} from 'react-router-dom'

function Dashboard() {
  return (
    <>
       <div className='border-2 border-white flex flex-col justify-center items-center w-96 h-96 m-auto mt-[20%] rounded-md bg-gray-100'>
            <h1 className='text-2xl'>Welcome <span className='font-bold'>User</span></h1>
            <Link to='/'><p className='text-red-400'>Logout</p></Link>

       </div> 

    </>
  )
}

export default Dashboard