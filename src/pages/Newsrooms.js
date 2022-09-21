import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import rooms from '../assets/rooms.png'

const Newsrooms = () => {
    return (
        <>
            <NavBar color='black' />
            <div className='w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center bg-white  text-[#290088] my-[100px] ' >
                <p className='text-[30px] w-full md:w-[25%] my-10 '>July 05 , 2022</p>
                <div className='w-full md:w-[68%]'>
                    <h1 className=' text-[32px] md:text-[52px] my-10 lg:w-[60%] '>High Point Announce
                        Partnership With
                        Huawai
                    </h1>
                    <p className='my-10 md:text-[20px] md:w-[60%]'>Today we will be explaining what it is, why it’s important and how it’s going to integrate itself into our everyday lives.
                        Recently, we have seen flashes and discussi ons about the next big thing in the tech world all over the internet and the world of enterprises and that thing is called the metaverse.
                        The metaverse is supposed to be an improved upon virtual version of our physical reality that is going to be the platform where everything from the internet to augmented reality is going to reside.
                    </p>

                    <img src={rooms} alt='' className='w-full object-cover' />

                    <p className='my-10 md:text-[20px] md:w-[60%]'>Today we will be explaining what it is, why it’s important and how it’s going to integrate itself into our everyday lives.
                        Recently, we have seen flashes and discussi ons about the next big thing in the tech world all over the internet and the world of enterprises and that thing is called the metaverse.
                        The metaverse is supposed to be an improved upon virtual version of our physical reality that is going to be the platform where everything from the internet to augmented reality is going to reside.
                    </p>

                    <p className='my-10 md:text-[20px] md:w-[60%]'>Today we will be explaining what it is, why it’s important and how it’s going to integrate itself into our everyday lives.
                        Recently, we have seen flashes and discussi ons about the next big thing in the tech world all over the internet and the world of enterprises and that thing is called the metaverse.
                        The metaverse is supposed to be an improved upon virtual version of our physical reality that is going to be the platform where everything from the internet to augmented reality is going to reside.
                    </p>

                    <p className='my-40 md:text-[20px] md:w-[60%]'>
                        Those technologies that are currently being developed can cause sceneries only seen in sci-fi movies when
                        combined with the metaverse. Since that neuro-implants can detect and translate your brain activity into digital data,
                        if you think of a shirt you want to buy, the neuro-implant will detect it and transmit data to your smart glasses so that you see that
                        shirt in your FOV as well as details about. Even though said scenario sounds like it came out of a sci-fi movie, with
                        neuro-implants and the metaverse, it’s starting to look like something that we might actually get to see in our lifetime. Just some
                        food for thought!
                        All of this may sound far-fetched, maybe even crazy to some. But there’s more!</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Newsrooms