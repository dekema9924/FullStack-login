import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie';


function Dashboard() {
  const [username, setUsername] = useState("");
  const [isLoading, setLoading] = useState(true);




  useEffect(()=>{
      axios('http://localhost:3000/routes/dashboard', {withCredentials: true})
      .then((response)=>{
          console.log(response.data)
          setLoading(false)
          setUsername(response.data.name)
          
      })
  },[])

  return (
    <>
       <div className='border-2 border-white flex flex-col justify-center items-center w-96 h-96 m-auto mt-[20%] rounded-md bg-gray-100'>
            <h1 className='text-2xl'>Welcome <span className='font-bold'>{!isLoading ? username : "" }</span></h1>
            <Link to='/'><p className='text-red-400'>Logout</p></Link>

       </div> 

    </>
  )
}

export default Dashboard