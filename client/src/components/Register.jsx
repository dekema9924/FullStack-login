import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'
import toast from 'react-hot-toast';





function Register() {
    //variables
    const [values, setValues] = useState({})
    const [iserr, setErr] = useState(false)
    const [errmsg, setErrMsg] = useState("")
    const [isSuccess, setSuccess] = useState(false)
    const [successMsg, setSuccessMsg] = useState("")
    const navigate = useNavigate();


    //functions
    const HandleInput = (e) => {
        setValues(prev => ({
            ...prev, [e.target.name]: e.target.value
        }))
        setErrMsg("")
    }
    const HandleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:3000/routes/register', {
            name: values.name,
            email: values.email,
            password: values.password
        })
        .then((response)=>{
            response.data.password = null
            console.log(response.data.message);
            if(response){
                setSuccess(true)
                setSuccessMsg(response.data.message)
                toast.success(response.data.message)
                setTimeout(()=>{
                    navigate('/login')
                },2000)
                
            
            }
        }).catch((error)=>{
            console.log(error);
            setErr(true)
            setErrMsg(error.response.data.message)
            toast.error(response.data.message)

        })
           


    }
    return (
        <>
            <form action="/routes/register" onSubmit={HandleSubmit} className='border-2 h-96 border-white  flex flex-col justify-center items-center w-96 bg-gray-100 m-auto mt-[20%] rounded-md'>
                <h1 className='text-2xl mb-3'>sign Up</h1>
          
                <div className='flex flex-col gap-5'>
                    <div>
                        <input onChange={HandleInput} className='rounded-md h-10 w-80 outline-none text-gray-700 bg-gray-200 pl-5' type="text" name="name" placeholder='Name' />
                        {/* <p className='text-xs text-red-800'>Error handling </p> */}
                    </div>
                    <div>
                        <input onChange={HandleInput} className='rounded-md h-10 w-80 outline-none text-gray-700 bg-gray-200 pl-5' type="email" name="email" placeholder='Email' />
                        <p className='text-xs text-red-800 ml-5'>
                            {iserr ? errmsg : ""}
                        </p>
                    </div>
                    <div>
                        <input onChange={HandleInput} className='rounded-md h-10 w-80 outline-none text-gray-700 bg-gray-200 pl-5' type="text" name="password" placeholder='password' />
                        {/* <p className='text-xs text-red-800'>Error handling </p> */}
                    </div>
                    <div>
                        <button className=' w-80 h-10 rounded-lg bg-white border-2 hover:bg-blue-400 hover:text-white'>Create Account</button>
                        <p className='text-sm text-center mt-3 text-gray-600'>Already have an account? <Link className='text-red-900 underline' to={'/'}>Sign-In</Link></p>
                    </div>


                </div>
            </form>
        </>
    )
}

export default Register