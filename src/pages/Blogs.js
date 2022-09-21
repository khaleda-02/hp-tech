import React from 'react'
import arrow from '../assets/arrow.png'
import rectangle from '../assets/Rectangle.png'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const Blogs = () => {
    return (
        <>
            <NavBar color='black' />
            <div className='w-full bg-white  text-[#290088] my-[100px] ' >
                <h1 className='text-[52px] text-center'>Blogs</h1>
                <div className='w-[80%] flex flex-wrap justify-start items-start pt-10  w-[95%] mx-auto gap-2' >
                    <div className='w-full md:w-[30%] lg:w-[24%] mt-10'>
                        <img src={rectangle} alt='' className='block w-full p-0 m-0 rounded-lg' />
                        <div className='flex justify-between px-3 items-center rounded-lg w-full'>
                            <p className='text-[20px] pb-4 pt-2'>Ovio Solutions</p>
                            <img src={arrow} alt="" className='  border-[1px] border-[#0A0254] border-solid w-[35px]  px-2  py-2 rounded-lg' />
                        </div>
                    </div>
                    <div className='w-full md:w-[30%] lg:w-[24%] mt-10'>
                        <img src={rectangle} alt='' className='block w-full p-0 m-0 rounded-lg' />
                        <div className='flex justify-between px-3 items-center rounded-lg w-full'>
                            <p className='text-[20px] pb-4 pt-2'>Ovio Solutions</p>
                            <img src={arrow} alt="" className='  border-[1px] border-[#0A0254] border-solid w-[35px]  px-2  py-2 rounded-lg' />
                        </div>
                    </div>
                    <div className='w-full md:w-[30%] lg:w-[24%] mt-10'>
                        <img src={rectangle} alt='' className='block w-full p-0 m-0 rounded-lg' />
                        <div className='flex justify-between px-3 items-center rounded-lg w-full'>
                            <p className='text-[20px] pb-4 pt-2'>Ovio Solutions</p>
                            <img src={arrow} alt="" className='  border-[1px] border-[#0A0254] border-solid w-[35px]  px-2  py-2 rounded-lg' />
                        </div>
                    </div>
                    <div className='w-full md:w-[30%] lg:w-[24%] mt-10'>
                        <img src={rectangle} alt='' className='block w-full p-0 m-0 rounded-lg' />
                        <div className='flex justify-between px-3 items-center rounded-lg w-full'>
                            <p className='text-[20px] pb-4 pt-2'>Ovio Solutions</p>
                            <img src={arrow} alt="" className='  border-[1px] border-[#0A0254] border-solid w-[35px]  px-2  py-2 rounded-lg' />
                        </div>
                    </div>
                    <div className='w-full md:w-[30%] lg:w-[24%] mt-10'>
                        <img src={rectangle} alt='' className='block w-full p-0 m-0 rounded-lg' />
                        <div className='flex justify-between px-3 items-center rounded-lg w-full'>
                            <p className='text-[20px] pb-4 pt-2'>Ovio Solutions</p>
                            <img src={arrow} alt="" className='  border-[1px] border-[#0A0254] border-solid w-[35px]  px-2  py-2 rounded-lg' />
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Blogs