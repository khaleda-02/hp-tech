import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import bgNav from '../assets/bgNav.png'
import network from '../assets/network.png'
import logo from '../assets/bg logo.png'
import eye from '../assets/eye.png'

function Documentaion() {
    return (
        <>
            <NavBar color='white' />
            <div className='h-[25vh] w-full relative'>
                <img src={bgNav} alt='' className='absolute top-0 left-0 w-full h-full object-cover -z-10' />
            </div>

            <div className='w-[95%] mx-auto bg-[#2B028D] translate-y-[-50px] py-20 text-white rounded-lg'>
                <h1 className='text-white text-[30px] md:text-[60px] text-center uppercase py-9'>Documentation</h1>
                <div className='w-[95%] mx-auto bg-[#2B028D] rounded-lg  my-10 flex flex-wrap justify-between items-start '>
                    <div className='w-full lg:w-[28%] flex md:flex-col justify-between items-center gap-14 '>
                        <div className='text-white flex lg:flex-col flex-wrap justify-start items-start gap-4'>
                            <p className='border-t-[1px] lg:w-full border-none lg:border-solid border-gray-500 py-4 pl-2 '>Hardware Requirements</p>
                            <p className='border-t-[1px] lg:w-full border-none lg:border-solid border-gray-500 py-4 pl-2 '>Software Installation</p>
                            <p className='border-t-[1px] lg:w-full border-none lg:border-solid border-gray-500 py-4 pl-2 '>Deploying BQN In Your Network</p>
                            <p className='border-t-[1px] lg:w-full border-none lg:border-solid border-gray-500 py-4 pl-2 '>Initial Configuration</p>
                            <p className='border-t-[1px] lg:w-full border-none lg:border-solid border-gray-500 py-4 pl-2 '>BQN Policies</p>
                            <p className='border-t-[1px] lg:w-full border-none lg:border-solid border-gray-500 py-4 pl-2 '>TCP Optimization</p>
                            <p className='border-t-[1px] lg:w-full border-none lg:border-solid border-gray-500 py-4 pl-2 '>Network Visibility</p>
                            <p className='border-t-[1px] lg:w-full border-none lg:border-solid border-gray-500 py-4 pl-2 '>Network Visibility</p>
                            <p className='border-t-[1px] lg:w-full border-none lg:border-solid border-gray-500 py-4 pl-2 '>Management Tasks</p>
                            <p className='border-t-[1px] lg:w-full border-none lg:border-solid border-gray-500 py-4 pl-2 '>RADIUS</p>
                            <p className='border-t-[1px] lg:w-full border-none lg:border-solid border-gray-500 py-4 pl-2 '>REST</p>
                            <p className='border-t-[1px] lg:w-full border-none lg:border-solid border-gray-500 py-4 pl-2 '>Other External Subscriber Data</p>
                            <p className='border-t-[1px] border-b-[1px] lg:w-full border-none lg:border-solid border-gray-500 py-4 pl-2 '>Troubleshooting</p>
                        </div>
                        <img src={logo} alt='' className='w-[300px] hidden lg:block mx-5' />
                    </div>
                    <div className='w-full lg:w-[70%] ml-auto pb-20 px-5 text-[#2B028D] bg-white rounded-lg'>
                        <h1 className='text-[50px] py-8 uppercase'>Software Installation Step-by-Step</h1>
                        <p className='w-full xl:w-[80%] mt-5 mb-10 leading-5 md:leading-9'>
                            VEZHA By Incoresotis A Video Analytics And Object Recognition System Based On Artificial Intelligence And Neural Networks<br></br>
                            For A Safe City / Area, For Government Agencies, For Business Companies, For EducaOnal InsTuOns, Retail AnalyCs<br></br>
                            License Plate Recognition<br></br>
                            AutomaCally And Simultaneously Recognizes 99% Of All Car License Plates In The Frame Regardless Of The Speed Of Motor Vehicles.
                            Movement In Rows<br></br>
                            Informs About Movement And FormaOn Of Rows Of Motor Vehicles.<br></br>
                            Object Detection<br></br>
                            Determinates People, Vehicles, And Animals In Marked Zone<br></br>
                            Hard Hats Detector<br></br>
                        </p>
                    </div>
                </div>
            </div>

            <div className='w-[95%] mx-auto text-white relative h-[25vh] rounded-lg my-10 mb-[15%]'>
                <img src={network} alt='' className='absolute top-0 left-0 w-full h-full object-cover -z-10 rounded-lg' />
                <div className='w-full md:w-[90%] lg:w-[80%] mx-auto bg-[#0A0254] rounded-lg absolute top-[15%] md:bottom-[-35%] left-[50%] translate-x-[-50%] '  >
                    {/* md:translate-y-[25%] */}
                    <p className='w-full xl:w-[60%] mx-auto text-[20px] sm:text-[30px] lg:text-[40px] p-10 '>
                        Drive value to your
                        business with High Point
                        soluons and a trusted
                        technology partner
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Documentaion