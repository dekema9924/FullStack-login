import React, { useEffect, useState, } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';


function Dashboard() {
  const [username, setUsername] = useState("");
  const [isLoading, setLoading] = useState(true);


  const logoutFunction = () => {
    let cookies = Cookies.get('jwt')
    //  cookies = Cookies.set('jwt', "", {expires: 2000})
    cookies = Cookies.remove('jwt')
    toast.error('loggin off...')


  }


  useEffect(() => {
    axios('http://localhost:3000/routes/dashboard', { withCredentials: true })
      .then((response) => {
        setLoading(false)
        setUsername(response.data.result.name)
        console.log(response.data)
      })
  }, [])

  return (
    <>
      <div className='border-2 border-white flex flex-col justify-center items-center w-96 h-96 m-auto mt-[20%] rounded-md bg-gray-100'>
        <h1 className='text-2xl'>Welcome <span className='font-bold'>{!isLoading ? username : ""}</span></h1>
        <Link onClick={logoutFunction} to='/'><p className='text-red-400'>Logout</p></Link>
        
      </div>


    </>
  )
}

export default Dashboard