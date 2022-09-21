import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import waves from '../assets/waves.png'
import arrow from '../assets/arrow.png'
import service from '../assets/service.png'
import dron from '../assets/dron.png'
import person from '../assets/person.png'
import sky from '../assets/sky.png'
import bgLogo from '../assets/bg logo.png'
import at from '../assets/@.png'
import key from '../assets/key.png'
import box from '../assets/box.png'
import network from '../assets/network.png'
import bag from '../assets/bag.png'
import logo from '../assets/Repeat Grid 10.png'
import earth from '../assets/earth.png'
import rectangle from '../assets/Rectangle.png'
import partner from '../assets/partner.png'
import pexl from '../assets/pexl.png'
import Footer from '../components/Footer'
const Main = () => {
    return (
        
        <div className=' text-white '>
            {/* {create()} */}
            <NavBar color="white" />
            {/* main component */}
            <div className=' h-[100vh] flex justify-center items-center '>
                <img src={waves} alt='' className='absolute w-full h-full top-0 left-0 object-cover -z-10' />
                <p className='lg:w-[30%] text-[30px] lg:text-[52px] text-center'>Bring Artificial
                    Intelligence into your
                    Digital Transformation</p>
            </div>
            <div className='bg-[#2B028D] w-full'>
                <div className='w-[90%] mx-auto'>
                    {/* HPT SERVICES component */}
                    <div className=' flex justify-between items-center py-4  '>
                        <h2 className='text-[25px]'>HPT SERVICES</h2>
                        <div className='flex justify-center items-center border-[1px] border-white border-solid rounded-lg'>
                            <p className=' border-r-[1px] border-white border-solid px-4 py-2'>EXplore</p>
                            <img src={arrow} alt="" className='w-[35px]  px-2  py-2' />
                        </div>
                    </div>

                    {/* card coponent */}
                    <div className='py-8 '>
                        <h1 className='uppercase text-[#E73736] text-[30px] lg:text-[50px] w-full md:w-[70%] lg:w-[50%] mx-auto'>we provide you with various services to help you </h1>
                        <div className='flex justify-between items-center flex-wrap py-8 '>
                            <div className='w-full lg:w-[45%] xl:w-[30%] rounded-lg bg-[#0A0254] p-2 mt-3'>
                                <img src={dron} alt='' className='max-w-[300px] h-[250px] mx-auto block py-9 ' />
                                <div className='text-left mt-9 md:w-[90%] mx-auto'>
                                    <h2 className='text-[25px]'>Defense Systems & Solutions</h2>
                                    <p className='mt-5 mb-[70px] text-[14px]'>We at HIGH POINT TECHNOLOGY have worked with the Department of Defense as well
                                        as other foreign militaries in order to deploy defense technology meant to increase
                                        the overall security and protect against unmannedcombat aerial
                                    </p>
                                </div>
                                <div className='flex items-end justify-end w-full mt-7 mb-2'>
                                    <div className=' w-[100px] flex justify-center items-center border-[1px] border-white border-solid rounded-lg'>
                                        <p className=' border-r-[1px] border-white border-solid px-2 py-1'>01</p>
                                        <img src={arrow} alt="" className='w-[15px] ml-2' />
                                    </div>
                                </div>
                            </div>
                            <div className='w-full lg:w-[45%] xl:w-[30%] rounded-lg bg-[#0A0254] p-2 mt-3'>
                                <img src={service} alt='' className='max-w-[300px] h-[250px] mx-auto block py-9 ' />
                                <div className='text-left mt-9 md:w-[90%] mx-auto'>
                                    <h2 className='text-[25px]'>IT- Professional Services</h2>
                                    <p className='mt-5 mb-[70px] text-[14px]'>HIGH POINT TECHNOLOGY ulizes its experse
                                        and team of seasoned technicians to provide our clients with the ITsoluons needed for IT ini aves
                                        such as the automaon of internal operaons in order to save costs as well as to increase the eciency and eecveness of said
                                    </p>
                                </div>
                                <div className='flex items-end justify-end w-full  mt-7 mb-2 '>
                                    <div className=' w-[100px] flex justify-center items-center border-[1px] border-white border-solid rounded-lg'>
                                        <p className=' border-r-[1px] border-white border-solid px-2 py-1'>01</p>
                                        <img src={arrow} alt="" className='w-[15px] ml-2' />
                                    </div>
                                </div>
                            </div>
                            <div className='w-full lg:w-[45%] xl:w-[30%] rounded-lg bg-[#0A0254] p-2 mt-3'>
                                <img src={person} alt='' className='max-w-[300px] h-[250px] mx-auto block py-9 object-cover ' />
                                <div className='text-left mt-9 md:w-[90%] mx-auto'>
                                    <h2 className='text-[25px]'>Defense Systems & Solutions</h2>
                                    <p className='mt-5 mb-[70px] text-[14px]'>We at HIGH POINT TECHNOLOGY have worked with the Department of Defense as well
                                        as other foreign militaries in order to deploy defense technology meant to increase
                                        the overall security and protect against unmannedcombat aerial
                                    </p>
                                </div>
                                <div className='flex items-end justify-end w-full  mt-7 mb-2 '>
                                    <div className=' w-[100px] flex justify-center items-center border-[1px] border-white border-solid rounded-lg'>
                                        <p className=' border-r-[1px] border-white border-solid px-2 py-1'>01</p>
                                        <img src={arrow} alt="" className='w-[15px] ml-2' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* about component */}
                <div className='w-[95%] mx-auto bg-white rounded-lg text-[#290088] my-10 '>
                    <div className=' flex justify-between items-center py-4 w-[95%] mx-auto '>
                        <h2 className='text-[25px] uppercase'> <span className='text-[#FD2C2C] pr-2'>01</span>about</h2>
                        <div className='flex justify-center items-center border-[1px] border-[#290088] border-solid rounded-lg'>
                            <p className=' border-r-[1px] border-[#290088] border-solid px-4 py-2 uppercase '>EXplore</p>
                            <img src={arrow} alt="" className='w-[35px]  px-2  py-2' />
                        </div>
                    </div>
                    <div className='flex justify-between items-center pt-10  py-4 w-[95%] mx-auto' >
                        <div className='hidden md:flex w-[28%] px-4  flex-col items-end justify-center gap-8'>
                            <img src={sky} alt='' className='block ' />
                            <img src={bgLogo} alt='' className='block ' />
                        </div>
                        <div className=' w-full md:w-[70%]'>
                            <h1 className='text-[30px] lg:text-[56px] text-[#290088]'>Everything we do </h1>
                            <div className='flex flex-col md:flex-row justify-between items-center py-4'>
                                <p className='max-w-[510px] mt-5'>High Point Technology is an innovave information technology solution provider specialized in
                                    infrastructure solutions with an extensive experience of more than a decade in the local business
                                    cultureand technology trends. We would be pleased to work with you to introduce you to the soluons
                                    available through us in the field of Informaon Technology
                                </p>
                                <p className='max-w-[510px] mt-5'>IT Soluons has been patronized by the
                                    corporate world since incepon. Blending
                                    intuion and rigor with ground reality
                                    business acumen, I.T. Soluons believes in
                                    going beyond the role of a mere soluon
                                    provider to its clientele. IT Soluons uses
                                    technology as a means to empower customers by providing them with user-friendly soluons that enhance their producvity
                                </p>
                            </div>
                            <div className='w-full rounded-lg bg-[#E6E6E6] text-black flex justify-evenly items-start py-8 my-6'>
                                <div>
                                    <p className='font-bold text-[25px] text-center'>12+</p>
                                    <p className='text-[10px] md:text-sm text-center'>YEARS OF EXPERIENCE+</p>
                                </div>
                                <div>
                                    <p className='font-bold text-[25px] text-center'>200+</p>
                                    <p className='text-[10px] md:text-sm text-center'>EMPLOYEES</p>
                                </div>
                                <div>
                                    <p className='font-bold text-[25px] text-center'>38+</p>
                                    <p className='text-[10px] md:text-sm text-center'>MAINTENANCE CENTERS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* why high point component */}
                <div className='w-[90%] mx-auto py-9'>
                    {/* HPT SERVICES component */}
                    <div className=' flex justify-between items-center py-4  '>
                        <h2 className='text-[18px] md:text-[25px]'> <span className='text-[#FD2C2C] pr-2'>02</span> WHY HIGH POINT</h2>
                        <div className='flex justify-center items-center border-[1px] border-white border-solid rounded-lg'>
                            <p className=' border-r-[1px] border-white border-solid px-4 py-2'>EXplore</p>
                            <img src={arrow} alt="" className='w-[35px]  px-2  py-2' />
                        </div>
                    </div>
                    <div className='w-[90%] ml-auto ' >
                        <h1 className='text-[30px] lg:text-[56px] text-white'>Driven By Quailty Services. </h1>
                        <div className='flex w-full flex-wrap justify-between items-center'>
                            <div className='mt-9 flex justify-start items-center gap-4 w-full lg:w-[48%] '>
                                <div className='p-4 w-fit bg-[#0A0254] rounded-[30px]'>
                                    <img src={bag} alt='' className='w-[40px]' />
                                </div>
                                <p className='text-[20px]'>High Point Technology is a Business Partner understanding the whole picture.</p>
                            </div>
                            <div className='mt-9 flex justify-start items-center gap-4 w-full lg:w-[48%] '>
                                <div className='p-4 w-fit bg-[#0A0254] rounded-[30px]'>
                                    <img src={box} alt='' className='w-[40px]' />
                                </div>
                                <p className='text-[20px]'>Extensive physical and virtual integraon capabilies</p>
                            </div>
                            <div className='mt-9 flex justify-start items-center gap-4 w-full lg:w-[48%] '>
                                <div className='p-4 w-fit bg-[#0A0254] rounded-[30px]'>
                                    <img src={at} alt='' className='w-[40px]' />
                                </div>
                                <p className='text-[20px]'>End to end delivery of ICT infrastructure and applicaon projects.e.</p>
                            </div>
                            <div className='mt-9 flex justify-start items-center gap-4 w-full lg:w-[48%] '>
                                <div className='p-4 w-fit bg-[#0A0254] rounded-[30px]'>
                                    <img src={key} alt='' className='w-[40px]' />
                                </div>
                                <p className='w-full md:text-[20px]'>Commied to supporng the organizaonal buy-in based on a strong track record.</p>
                            </div>
                        </div>
                        <p className='max-w-[500px] my-7 pt-5'>
                            “ We AT HIGH POINT TECHNOLOGY have set of
                            Values that is based on Time Commitment,
                            Deliverables with high Quality, Customer Trust and Success. We always build sustainable relaonship with our customers to help
                            them overcome problems
                            and be part of their success. ”
                        </p>
                    </div>
                </div>

                {/* PARTNERS component */}
                <div className='w-[95%] mx-auto bg-white rounded-lg text-[#290088] my-10 '>
                    <div className=' flex justify-between items-center py-4 w-[95%] mx-auto '>
                        <h2 className='text-[25px] uppercase'> <span className='text-[#FD2C2C] pr-2'>03</span>PARTNERS</h2>
                        <div className='flex justify-center items-center border-[1px] border-[#290088] border-solid rounded-lg'>
                            <p className=' border-r-[1px] border-[#290088] border-solid px-4 py-2 uppercase '>EXplore</p>
                            <img src={arrow} alt="" className='w-[35px]  px-2  py-2' />
                        </div>
                    </div>

                    <div className='pt-10  py-4 w-full md:w-[60%] mx-auto' >
                        <h1 className='text-[30px] lg:text-[56px] text-[#290088]'>High Point Trusted Partners. </h1>
                        <img src={partner} alt='' className='block w-full mx-auto my-9' />
                        <div className='flex '>
                            <img src={bgLogo} alt='' className='hidden md:w-[100px]' />
                            <p className='max:w-[500px] p-2 my-7'>
                                “ We AT HIGH POINT TECHNOLOGY have set of
                                Values that is based on Time Commitment,
                                Deliverables with high Quality, Customer Trust and Success. We always build sustainable relaonship with our customers to help
                                them overcome problems
                                and be part of their success. ”
                            </p>
                        </div>
                    </div>
                </div>

                {/* after parterns */}
                <div className='w-[90%] md:w-[70%] mx-auto py-9'>
                    <h1 className='uppercase text-[#E73736] text-[20px] lg:text-[50px] w-full md:w-[76%]  '>we provide you with top of the line solutions in avarirty of fileds </h1>
                    <div className='w-full'>
                        <div className='p-2 flex flex-col md:flex-row  justify-start items-start gap-2 bg-[#0A0254] my-2 rounded-lg'>
                            <img src={pexl} alt='' />
                            <div className='p-2'>
                                <p className='text-left text-lg'>Data Center Soluons</p>
                                <p className='text-left text-sm mt-4'>Data centers are an integral part of modern IT infrastructure. Equipped with advanced networking,computing and storage equipment, modern data centers are capable of handling huge volumes of data to and from storage endpoints, server nodes and network ports.</p>
                            </div>
                        </div>
                        <div className='p-2 flex flex-col md:flex-row  justify-start items-start gap-2 bg-[#0A0254] my-2 rounded-lg'>
                            <img src={pexl} alt='' />
                            <div className='p-2'>
                                <p className='text-left text-lg'>Data Center Soluons</p>
                                <p className='text-left text-sm mt-4'>Data centers are an integral part of modern IT infrastructure. Equipped with advanced networking,computing and storage equipment, modern data centers are capable of handling huge volumes of data to and from storage endpoints, server nodes and network ports.</p>
                            </div>
                        </div>
                        <div className='p-2 flex flex-col md:flex-row  justify-start items-start gap-2 bg-[#0A0254] my-2 rounded-lg'>
                            <img src={pexl} alt='' />
                            <div className='p-2'>
                                <p className='text-left text-lg'>Data Center Soluons</p>
                                <p className='text-left text-sm mt-4'>Data centers are an integral part of modern IT infrastructure. Equipped with advanced networking,computing and storage equipment, modern data centers are capable of handling huge volumes of data to and from storage endpoints, server nodes and network ports.</p>
                            </div>
                        </div>
                        <div className='p-2 flex flex-col md:flex-row  justify-start items-start gap-2 bg-[#0A0254] my-2 rounded-lg'>
                            <img src={pexl} alt='' />
                            <div className='p-2'>
                                <p className='text-left text-lg'>Data Center Soluons</p>
                                <p className='text-left text-sm mt-4'>Data centers are an integral part of modern IT infrastructure. Equipped with advanced networking,computing and storage equipment, modern data centers are capable of handling huge volumes of data to and from storage endpoints, server nodes and network ports.</p>
                            </div>
                        </div>
                        <div className='p-2 flex flex-col md:flex-row  justify-start items-start gap-2 bg-[#0A0254] my-2 rounded-lg'>
                            <img src={pexl} alt='' />
                            <div className='p-2'>
                                <p className='text-left text-lg'>Data Center Soluons</p>
                                <p className='text-left text-sm mt-4'>Data centers are an integral part of modern IT infrastructure. Equipped with advanced networking,computing and storage equipment, modern data centers are capable of handling huge volumes of data to and from storage endpoints, server nodes and network ports.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-[95%] mx-auto text-white rounded-lg py-[40px] relative '>
                    <img src={network} alt='' className='absolute top-0 left-0 w-full h-full z-10 ' />
                    <p className='relative text-[20px] md:text-[30px] md:w-[30%] font-bold mx-auto z-20'>Drive value to your
                        business with High Point
                        soluons and a trusted
                        technology partner
                    </p>
                </div>

                {/* NEWSROOM component */}
                <div className='w-[95%] mx-auto bg-white rounded-lg text-[#290088] my-10 '>
                    <div className=' flex justify-between items-center py-4 w-[95%] mx-auto '>
                        <h2 className='text-[25px] uppercase'> <span className='text-[#FD2C2C] pr-2'>04</span>NEWSROOM</h2>
                        <div className='flex justify-center items-center border-[1px] border-[#290088] border-solid rounded-lg'>
                            <p className=' border-r-[1px] border-[#290088] border-solid px-4 py-2 uppercase '>EXplore</p>
                            <img src={arrow} alt="" className='w-[35px]  px-2  py-2' />
                        </div>
                    </div>
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
                        </div>
                    </div>
                </div>

                <div className='w-[90%]  mx-auto py-9'>
                    <div className='w-full flex justify-between items-center flex-wrap gap-5'>
                        <div className=' w-full md:w-[30%] relative'>
                            <img src={earth} alt='' className='rounded-lg w-full' />
                            <img src={logo} alt='' className='absolute top-[50%] translate-x-[-50%]  left-[50%] translate-y-[-50%] w-[100px]' />
                        </div>
                        <div className=' w-full md:w-[67%] px-2 bg-[#0A0254] flex justify-start items-center gap-[40px]'>
                            <h1 className='text-[32px] md:text-[52px] w-[60%] px-5 ' >LET’S WORK
                            </h1>
                            <div className='py-4 w-[25%]'>
                                {/* py-[75px] */}
                                <img src={bgLogo} alt='' className='w-full' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Main