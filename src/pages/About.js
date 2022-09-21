import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import bgNav from '../assets/download.png'
import network from '../assets/network.png'
import logo from '../assets/bg logo croped.png'
import person from '../assets/oval2.png'
function About() {
    return (
        <>
            <NavBar color='black' />
            <div className='h-[25vh] w-full relative'>
                <img src={bgNav} alt='' className='absolute top-0 left-0 w-full h-full object-cover -z-10' />
            </div>


            <div className='w-[95%] mx-auto bg-[#F8F8F8] translate-y-[-50px] pt-20 text-white rounded-lg'>
                <div className='w-[95%] mx-auto text-[#290088] flex  justify-start items-end'>
                    <div className=' hidden lg:block w-[18%]'>
                        <img src={logo} alt='' className='w-[300px] block mx-5 ' />
                    </div>
                    <div className='w-full md:w-[75%] flex flex-col items-start justify-start'>
                        <h1 className='text-[52px] uppercase '>
                            ABOUT
                        </h1>
                        <p className='mt-10 w-full xl:w-[400px]'>
                            We are a leading company in the field of technology and IT solutions.
                            High point is a company full of technology-minded professional employers with different levels of experience that enables us to maintain the most satisfactory development for your business.
                            We also offer various mission-critical services, one of which is to reactivate and proactive support services which include all of the organizational elements such as IT, People, and the process itself.
                        </p>
                        <div className=' py-20 mt-10 w-full flex justify-start items-start flex-wrap'>
                            <div className='w-full lg:w-[50%] mt-10'>
                                <h1 className='text-[32px] xl:text-[52px] uppercase  text-[#FD2C2C] '>
                                    Our
                                    mission
                                </h1>
                                <p className='mt-5 w-full  xl:w-[80%] px-3'>
                                    We are a leading company in the field of technology and IT solutions.
                                    We always look to be a trustful partner during your business journey by,
                                    •  Continuing the huge evaluation of developing and transferring information technology.
                                    •  Bring to our customers the best products, services, and solutions as part of interdisciplinary projects
                                    •  To run long-term business projects with our customers.
                                    •  Last but not least, and the most important is to constantly developthe skills and abilities of our employees for the benefit of the industry and the MENA region.
                                </p>
                            </div>
                            <div className='w-full lg:w-[45%] mt-10'>
                                <h1 className='text-[32px] xl:text-[52px] uppercase   text-[#FD2C2C]'>
                                    Our
                                    mission
                                </h1>
                                <p className='mt-5 w-full xl:w-[80%] px-3'>
                                    We are a leading company in the field of technology and IT solutions.
                                    We always look to be a trustful partner during your business journey by,
                                    •  Continuing the huge evaluation of developing and transferring information technology.
                                    •  Bring to our customers the best products, services, and solutions as part of interdisciplinary projects
                                    •  To run long-term business projects with our customers.
                                    •  Last but not least, and the most important is to constantly developthe skills and abilities of our employees for the benefit of the industry and the MENA region.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='w-[95%] mx-auto '>
                <div className='w-[95%] mx-auto text-[#290088] flex  justify-start items-end'>
                    <div className=' hidden lg:block w-[18%]'>
                    </div>
                    <div className='w-full md:w-[75%] flex flex-col items-start justify-start'>
                        <h1 className='text-[52px] uppercase '>
                            What do <br></br>
                            we do?
                        </h1>
                        <div className=' py-10  w-full flex justify-start items-start flex-wrap'>
                            <div className='w-full lg:w-[50%] mt-10'>
                                <p className='mt-5 w-full  xl:w-[80%] px-3'>
                                    We are a leading company in the field of technology and IT solutions.
                                </p>
                                <p className='mt-5 w-full  xl:w-[80%] px-3'>
                                    High point is a company full of technology-minded professional employers with different levels of experience that enables us to maintain the most satisfactory development for your business.
                                </p>
                                <p className='mt-5 w-full  xl:w-[80%] px-3'>
                                    We also offer various mission-critical services, one of which is to reactivate and proactive support services which include all of the organizational elements such as IT, People, and the process itself.
                                </p>
                            </div>
                            <div className='w-full lg:w-[45%] mt-10'>
                                <p className='mt-5 w-full xl:w-[80%] px-3'>
                                    support services which include all of the organizational elements such as IT, People, and the process itself.
                                </p>
                                <p className='mt-5 w-full xl:w-[80%] px-3'>
                                    We provide so many services that mainly are focused on our audience base and our customers' needs and to help them while facing the expected challenges which may come up in the future.
                                </p>
                                <p className='mt-5 w-full xl:w-[80%] px-3'>
                                    Our solutions are specifically designed after a deep understanding of our customers' mindset, their business, and what is the most suitable for their phase.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-[95%] mx-auto bg-[#F8F8F8] translate-y-[-50px] p-10 text-white rounded-lg'>
                <h1 className='text-[25px] uppercase text-[#290088]'>
                    Executive team
                </h1>

                <div className='w-full  text-[#290088] flex  justify-start items-start gap-10 flex-wrap mt-10'>
                    <div className='w-[80%] mx-auto lg:w-[28%] flex items-center justify-center'>
                        <img src={person} alt='' className='w-full object-cover' />
                    </div>
                    <div className='w-full lg:w-[65%] flex flex-col items-start justify-start'>
                        <h5 className='text-[#FD2C2C]'>Engineer</h5>
                        <h2 className='text-[30px]'>Mohamed Sayed</h2>
                        <p className='my-5'>Engineer Mohamed is a worldwide technology leader who came up with the idea of establishing a company that is specialized in technology and solutions strategy.
                        </p>
                        <p className='my-5'>Not only this but also, Engineer Mohamed Sayed worked as a technical consultant for all technical services and supervised their development to a large base of High Point Technology clients, in addition to his great responsibility in managing business, development, and operation functions, and operating profits and losses professionally, making everyone trust his right decisions
                        </p>
                        <p className='my-5'>High Point Co is recognized as an EMEA due to the professional team who has the outstanding experience to manage, develop and offer the finest services, in addition to delivering high-quality solutions.
                        </p>
                    </div>

                </div>
            </div>

            <div className='w-[95%] mx-auto text-white relative h-[25vh] rounded-lg my-10 mb-[18%]'>
                <img src={network} alt='' className='absolute top-0 left-0 w-full h-full object-cover -z-10 rounded-lg' />
                <div className='w-full md:w-[90%] lg:w-[80%] mx-auto bg-[#0A0254] rounded-lg absolute top-[15%] md:bottom-[-35%] left-[50%] translate-x-[-50%] '  >
                    {/* md:translate-y-[25%] */}
                    <p className='w-full xl:w-[60%] mx-auto text-[20px] sm:text-[30px] lg:text-[40px] p-10 '>
                        We’re here to answer <br></br>
                        your questions.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About