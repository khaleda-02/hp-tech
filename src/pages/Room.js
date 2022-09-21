import React from 'react'
import arrow from '../assets/arrow.png'
import rectangle from '../assets/Rectangle.png'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const Room = () => {
    return (
        <>
            <NavBar color='black'/>
            <div className='w-full bg-white  text-[#290088] my-[100px] ' >
                <h1 className='text-[52px] text-center'>Newsroom</h1>
                <div className='flex flex-wrap justify-between items-start pt-10  w-[95%] mx-auto gap-5' >
                    <div className='w-full lg:w-[37%]'>
                        <img src={rectangle} alt='' className='block w-full rounded-lg p-0 m-0' />
                        <p className='text-[30px] lg:text-[40px] px-3'>How to cowork in the best way in the Super offices</p>
                    </div>
                    <div className='w-full lg:w-[58%] flex flex-wrap justify-center lg:justify-start items-start gap-2'>
                        <div className='w-full md:w-[45%] rounded-lg'>
                            <img src={rectangle} alt='' className='block w-full p-0 m-0 rounded-lg' />
                            <p className='text-[20px] pb-4 pt-2'>How to cowork in the best way in the Super offices</p>
                        </div>
                        <div className='w-full md:w-[45%] rounded-lg'>
                            <img src={rectangle} alt='' className='block w-full p-0 m-0 rounded-lg' />
                            <p className='text-[20px] pb-4 pt-2'>How to cowork in the best way in the Super offices</p>
                        </div>
                        <div className='w-full md:w-[45%] rounded-lg'>
                            <img src={rectangle} alt='' className='block w-full p-0 m-0 rounded-lg' />
                            <p className='text-[20px] pb-4 pt-2'>How to cowork in the best way in the Super offices</p>
                        </div>
                        <div className='w-full md:w-[45%] rounded-lg'>
                            <img src={rectangle} alt='' className='block w-full p-0 m-0 rounded-lg' />
                            <p className='text-[20px] pb-4 pt-2'>How to cowork in the best way in the Super offices</p>
                        </div>
                        <div className='w-full md:w-[45%] rounded-lg'>
                            <img src={rectangle} alt='' className='block w-full p-0 m-0 rounded-lg' />
                            <p className='text-[20px] pb-4 pt-2'>How to cowork in the best way in the Super offices</p>
                        </div>
                        <div className='w-full md:w-[45%] rounded-lg'>
                            <img src={rectangle} alt='' className='block w-full p-0 m-0 rounded-lg' />
                            <p className='text-[20px] pb-4 pt-2'>How to cowork in the best way in the Super offices</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer /> 
        </>
    )
}

export default Room