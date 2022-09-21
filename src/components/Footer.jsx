import React from 'react'
import Group from '../assets/Group 276.png'
import Repeat from '../assets/Repeat Grid 10.png'
import {FaLinkedinIn , FaFacebookF} from 'react-icons/fa'
import {TiSocialTwitter} from 'react-icons/ti'

const Footer = () => {
    return (
        <div className='w-full bg-[#0A0254] border-t-[1px] border-solid border-white text-white '>
            <div className='w-full lg:w-[90%] mx-auto flex flex-col lg:flex-row items-center justify-between'>
                <div className='w-full lg:w-[27%] flex flex-col md:flex-row lg:flex-col items-center md:items-start justify-between md:justify-center lg:justify-between gap-3 lg:gap-32 border-r-[1px] border-none  lg:border-solid border-white py-5'>
                    <div className='flex items-center justify-center flex-col'>
                        <img src={Repeat} alt='' className='w-[49px]' />
                        <img src={Group} alt='' className='' />
                    </div>
                    <p className='text-left max-w-[356px] px-2'>WE WORK TO THE HIGHEST OF STANDARDS AND HAVE
                        INVESTED IN THE GROWTH OF OUR PEOPLE ACROSS ALL
                        FIELDS OF THE BUSINESS IN ORDER TO HAVE AN EXCEPTIONAL WORKFORCE
                    </p>
                </div>
                <div className='pt-[40px]  w-full lg:w-[70%] px-[38px]  flex justify-between flex-wrap items-start py-5'>
                    <div className='w-full  md:w-[50%] lg:w-[30%] mt-5'>
                        <p className='font-bold text-[20px]'>services</p>
                        <p className='text-[#919191] mt-6 text-[14px] lg:text-base'>Driven By Quailty & SOLUTIONS </p>
                        <p className='text-[#919191] text-[14px] lg:text-base'>IT- PROFESSIONAL SERVICES</p>
                        <p className='text-[#919191] text-[14px] lg:text-base'>CONSULTATION SERVICES</p>
                        <p className='text-[#919191] text-[14px] lg:text-base'>htp platform</p>
                        <p className='text-[#919191] md:mt-14 text-[14px] lg:text-base'>contact us</p>
                    </div>
                    <div className='w-full  md:w-[50%] lg:w-[30%] mt-5'>
                        <p className='font-bold text-[20px]'>general</p>
                        <p className='text-[#919191] mt-6'>services</p>
                        <p className='text-[#919191]'>Solutions</p>
                        <p className='text-[#919191]'>Prodcuts</p>
                        <p className='text-[#919191]'>contact us</p>
                        <p className='text-[#919191] md:mt-14'>COOKIES & PRIVACY</p>
                    </div>
                    <div className='w-full  md:w-[50%] lg:w-[30%] mt-5'>
                        <p className='font-bold text-[20px]'>social     </p>
                        <p className='text-[#919191] mt-6 flex items-center justify-start gap-2 '> <FaLinkedinIn  className='text-white'/> linked in</p>
                        <p className='text-[#919191] flex items-center justify-start gap-2 '> <TiSocialTwitter  className='text-white'/>  twitter</p>
                        <p className='text-[#919191] flex items-center justify-start gap-2 '> <FaFacebookF className='text-white' />  face book</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer