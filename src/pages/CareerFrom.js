import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import arrowTo from '../assets/arrow to .png'
import arrow from '../assets/arrow.png'
function CareerFrom() {
    return (
        <div className='bg-[#0A0254]'>
            <NavBar color='white' />
            <div className='bg-[#0A0254] py-[200px]'>
                <div className='w-full lg:w-[70%] mx-auto bg-[#2B028D] text-white p-10 rounded-lg'>
                    <h1 className='text-[52px]'>Ready To<br></br>
                        Start Your<br></br>
                        Career At HTP?
                    </h1>
                    <div className='flex gap-3 justify-start items-end'>
                        <img src={arrowTo} alt='' className='w-[30px]' />
                        We Offer A Lot Of Goodies For You <br></br> To Enjoy Your Work
                    </div>
                    <from>
                        <input type='text' placeholder='NAME' className='text-white py-4 my-5 w-full bg-transparent uppercase text-[20px] border-b-[1px] border-solid border-gray-50' />
                        <input type='email' placeholder='email' className='text-white py-4 my-5 w-full bg-transparent uppercase text-[20px] border-b-[1px] border-solid border-gray-50' />
                        <input type='number' placeholder='phone number' className='text-white py-4 my-5 w-full bg-transparent uppercase text-[20px] border-b-[1px] border-solid border-gray-50' />
                        <p className='text-white py-4 my-5 w-full bg-transparent uppercase text-[20px] '>Message Or CV Link</p>
                        <div class="flex justify-center items-center w-full">
                            <label for="dropzone-file" class="flex flex-col justify-center items-center w-full bg-transparent rounded-lg border-2 border-gray-300 border-dashed cursor-pointer ">
                                <div class="flex flex-col justify-center items-center pt-5 pb-6">
                                    <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                                    </svg>
                                    <p class="mb-2 text-sm text-[#FD2C2C]">Attach Your CV</p>
                                    <p class="text-xs text-gray-500 dark:text-gray-400">file extensions: doc, docx, pdf, rtf (up to 10 mb)</p>
                                </div>
                                <input id="dropzone-file" type="file" class="hidden" />
                            </label>
                        </div>

                        <div class="flex items-center my-5">
                            <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600  rounded bg-[#0A0254] " />
                            <label for="link-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                By Using This Form You Agree Wit The  Storge And <br></br>
                                Landing Of Your Data By This Website.
                            </label>
                        </div>

                        <button className='border-solid border-[1px] border-white  rounded-lg flex justify-between items-center mt-10'>
                            <p className='uppercase border-solid border-r-[1px] border-white p-3  '>submit</p>
                            <img src={arrow} alt='' className=' p-3 ' />
                        </button>
                    </from>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CareerFrom