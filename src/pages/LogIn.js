import React from 'react'
import bg from '../assets/logInBg.png'
import logo from '../assets/black logo.png'
import { Link } from 'react-router-dom'
function LogIn() {
    return (
        <div className='flex justify-between items-start max-h-[100vh] overflow-hidden'>
            <div className='w-full lg:w-[50%] py-10'>
                <div className='w-[90%] mx-auto '>
                    <img src={logo} alt='' className='w-[176px] ' />
                </div>
                <form className='w-[80%] lg:w-[80%] mx-auto mt-10 text-[#5873C8]'>
                    <h1 className='text-[42px] uppercase'>
                        <span className='text-[#FD2C2C]'> Welcome !</span> !
                    </h1>
                    <div className='w-[80%] mx-auto lg:mr-auto mt-5'>
                        <label className='text-[17px]  block'>E-mail</label>
                        <input type='email' alt='' placeholder='Enter your email here…  ' className='rounded-lg w-full p-3 mb-3 border-[#d4d4d4] border-[1px] border-solid' />
                        <label className='text-[17px]  block'>Password</label>
                        <input type='password' alt='' placeholder='*************' className='rounded-lg w-full p-3 mb-3 border-[#d4d4d4] border-[1px] border-solid' />
                        <button className='w-full text-center text-white bg-[#2B028D] my-5 py-3 rounded-lg'>sign up</button>
                        <button className='w-full text-center bg-white border-[#2B028D] border-solid border-[1px] py-2 rounded-lg'>sign up  with Google</button>
                        <p className='text-center w-full'>don't have an account?
                            <Link to='login' >Sign Up</Link>
                        </p>
                    </div>
                </form>
            </div>
            <div className='w-[45%] h-[100vh] hidden lg:block rounded-t-lg rounded-b-lg'>
                <img src={bg} alt='' className='w-full h-full object-cover rounded-tl-3xl rounded-bl-3xl' />
            </div>
        </div>
    )
}

export default LogIn