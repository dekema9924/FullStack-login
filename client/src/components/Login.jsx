
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';


function Login() {
    const [values, setValues] = useState({})
    const navigate = useNavigate();
    const [iserr, setErr] = useState(false)
    const [errmsg, setErrMsg] = useState("")
    const [emailerr, setemailErr] = useState("")


    const HandleInput = (e) => {
        setValues(prev => ({
            ...prev, [e.target.name]: e.target.value
        }))
        setErrMsg("")

    }
    const HandleSubmit = async (e) => {
        e.preventDefault()

        await axios.post('http://localhost:3000/routes/login', {
            email: values.email,
            password: values.password,
        }, { withCredentials: true })

            .then((response) => {
                console.log(response)
                if (response) {
                    // Cookies.set('token', response.data.token, { expires: 30000 });
                    toast.success(response.data.message)
                    setTimeout(() => {
                        navigate('/dashboard')
                    }, 2000)

                } else {
                    navigate('/login')
                }
            }).catch((error) => {
                console.log(error);
                setErr(true)
                setErrMsg(error.response.data.password)
                setemailErr(error.response.data.email)
            })
    }


    return (
        <>
            <form action="http://localhost:3000/routes/login" onSubmit={HandleSubmit} className='border-2 border-white flex flex-col justify-center items-center w-96 h-96 m-auto mt-[20%] rounded-md bg-gray-100'>
                <h1 className='text-2xl mb-5'>sign in</h1>
                <div className='flex flex-col gap-5'>
                    <div>
                        <input onChange={HandleInput} className='rounded-md h-10 w-80 outline-none text-gray-700 bg-gray-200 pl-5' type="email" name="email" placeholder='Email' />
                        <p className='text-xs text-red-800 ml-5'>
                            {iserr ? emailerr : ""}
                        </p>
                    </div>
                    <div>
                        <input onChange={HandleInput} className='rounded-md h-10 w-80 outline-none text-gray-700 bg-gray-200 pl-5' type="text" name="password" placeholder='password' />
                        <p className='text-xs text-red-800 ml-5'>
                            {iserr ? errmsg : ""}
                        </p>                    </div>
                    <div>
                        <button className=' w-80 h-10 rounded-lg bg-white border-2 hover:bg-blue-400 hover:text-white'>Sign In</button>
                        <p className='text-sm text-center mt-3 text-gray-600'>Dont have an account? <Link className='text-red-800 underline' to={'/register'}>Sign-Up</Link></p>
                    </div>

                </div>
            </form>
        </>
    )
}

export default Login