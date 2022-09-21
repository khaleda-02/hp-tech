import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import bgNav from '../assets/bgNav.png'
import network from '../assets/network.png'
import logo from '../assets/bg logo.png'
import eye from '../assets/eye.png'

function Prodcuts() {
    return (
        <>
            <NavBar color='white' />
            <div className='h-[25vh] w-full relative'>
                <img src={bgNav} alt='' className='absolute top-0 left-0 w-full h-full object-cover -z-10' />
            </div>

            <div className='w-[95%] mx-auto bg-[#2B028D] translate-y-[-50px] py-20 text-white rounded-lg'>
                <div className='w-[95%] mx-auto bg-[#0A0254] rounded-lg  '>
                    <div className='w-full   flex justify-center items-start p-10 xl:p-20 '>
                        <div className='hidden xl:block w-[32%] '>
                            <img src={eye} alt='' className='w=[100px]' />
                        </div>
                        <div className='w-full xl:w-[68%]  lg:block'>
                            <h1 className='text-[32px] xl:text-[52px] w-full xl:w-[300px]'>
                                VEZHA BY
                                INCORESOFT
                            </h1>
                            <div className='flex justify-start items-start flex-wrap gap-7'>
                                <p className='text-[19px] mt-10 w-full xl:w-[300px]'>"Our Mission is to exceed our
                                    customers’ expectaons with
                                    innovave soluons in AI video
                                    surveillance Incoreso develops soluons in
                                </p>
                                <p className='text-[19px] mt-10 w-full xl:w-[300px]'>"Our Mission is to exceed our
                                    customers’ expectaons with
                                    innovave soluons in AI video
                                    surveillance Incoreso develops soluons in
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[95%] mx-auto bg-white rounded-lg text-[#290088] my-10  '>
                    <h2 className='text-[25px] uppercase p-4'> <span className='text-[#FD2C2C] pr-2'>01</span>VEZHA</h2>
                    <div className='w-full xl:w-[70%] ml-auto py-20 px-5'>
                        <p className='w-full xl:w-[80%] mt-5 mb-10 leading-5'>
                            . VEZHA By Incoresotis A Video Analytics And Object Recognition System Based On Artificial Intelligence And Neural Networks
                        </p>
                        <p className='w-full xl:w-[80%] mt-5 mb-10 leading-5'>
                            . For A Safe City / Area, For Government Agencies, For Business Companies, For EducaOnal InsTuOns, Retail AnalyCs
                        </p>
                        <p className='w-full xl:w-[80%] mt-5 mb-10 leading-5'>
                            . License Plate Recognition
                            AutomaCally And Simultaneously Recognizes 99% Of All Car License Plates In The Frame Regardless Of The Speed Of Motor Vehicles.
                        </p>
                        <p className='w-full xl:w-[80%] mt-5 mb-10 leading-5'>
                            . Movement In Rows
                            Informs About Movement And FormaOn Of Rows Of Motor Vehicles.
                            Object Detection
                        </p>
                        <p className='w-full xl:w-[80%] mt-5 mb-10 leading-5'>
                            . Determinates People, Vehicles, And Animals In Marked Zone
                            Hard Hats Detector
                            Determine If Sta Members Are Wearing Safety Hard Hats While Working In A Shop, On A ConstrucOn Site Or In Warehouse
                        </p>
                        <p className='w-full xl:w-[80%] mt-5 mb-10 leading-5'>
                            . Traffic Analytics
                            Determine The Intensity, QuanTy, And ComposiOn Of TraC For Both Vehicles And People
                            ALPR-Gates
                        </p>
                        <p className='w-full xl:w-[80%] mt-5 mb-10 leading-5'>
                            . Module OErs The Most EEcVe Vehicle IdenFicaOn With AutomaC Barrier Opening
                            Face Recognition
                            IdenFy And Recognize Human Faces In The Video Stream, Compare Them With The Monitoring Lists And Receive Match
                            Motion Detector
                            ProtecOn Of The Territory From Intrusions And ViolaOns.
                        </p>
                    </div>
                    <div className=' hidden xl:block px-10 translate-y-[-90px]'>
                        <img src={logo} alt='' className='w-[300px] block mx-5' />
                    </div>
                </div>
            </div>

            <div className='w-[95%] mx-auto text-white relative h-[25vh] rounded-lg my-10 mb-[18%]'>
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

export default Prodcuts