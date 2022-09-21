import React, { useState } from 'react'
import logo from '../assets/logo.png'
import svgexport from '../assets/svgexport-6.png'
import { GoThreeBars } from 'react-icons/go'
import { Link } from 'react-router-dom'
const NavBar = (props) => {
    const [mobile, setMobile] = useState(false)
    return (
        <div className={`w-full bg-transparent text-${props.color} absolute top-0 left-0 z-50`}>
            <div className='w-full px-2 md:w-[90%]  relative mx-auto py-6 flex justify-between items-center'>
                <img src={logo} alt='' className='w-[176px]' />
                <div className='hidden lg:flex justify-evenly items-center gap-4'>
                    {/* <Link to='/'>HOME</Link>
                    <Link to='/solutions'>SERVICES</Link>
                    <Link to='/solutions'>solutions</Link>
                    <Link to='/prodcuts'>prodcuts</Link>
                    <Link to='/blogs'>Blogs</Link>
                    <Link to='/blogs'>Blogs</Link>
                    <Link to='/viewBlog'>viewBlog</Link>
                    <Link to='/room'>Room</Link>
                    <Link to='/documentaion'>documentaion</Link>
                    <Link to='/about'>about</Link>
                    <Link to='/form'>about</Link>
                    <Link to='/career'>Career From</Link>
                    <Link to='/quote'>quote</Link>
                    <Link to='/login'>login</Link>
                    <Link to='/signup'>signup</Link>
                    <Link to='/contact'>CONTACT US</Link> */}

                    {/* original  */}
                    <Link to='/'>HOME</Link>
                    <Link to='/solutions'>SERVICES</Link>
                    <Link to='/solutions'>solutions</Link>
                    <Link to='/prodcuts'>prodcuts</Link>
                    <Link to='/contact'>CONTACT US</Link>
                </div>
                <div className='hidden lg:flex justify-evenly items-center gap-4'>
                    <img src={svgexport} alt='' className='w-[60.95px]' />
                    <button className='px-8 py-1 rounded-2xl bg-transparent border-white border-solid border-[1px]'>log in</button>
                </div>
                <button className='block lg:hidden' onClick={() => setMobile(pre => !pre)}> <GoThreeBars size={40} /> </button>
                <div className={`absolute top-[10vh] left-0 w-full bg-black ${mobile ? 'block' : 'hidden'}`}>
                    <div className='flex flex-col justify-start items-start gap-3 py-3 pl-3'>
                        <Link to='/'>HOME</Link>
                        <Link to='/solutions'>SERVICES</Link>
                        <Link to='/solutions'>solutions</Link>
                        <Link to='/prodcuts'>prodcuts</Link>
                        <Link to=''>CONTACT US</Link>
                    </div>
                    <div className='w-full flex justify-start items-center gap-4  py-3 pl-3'>
                        <img src={svgexport} alt='' className='w-[60.95px]' />
                        <Link to='/login' className='px-8 py-1 rounded-2xl bg-transparent border-white border-solid border-[1px]'>login</Link>
                        {/* <button className='px-8 py-1 rounded-2xl bg-transparent border-white border-solid border-[1px]'>log in</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar