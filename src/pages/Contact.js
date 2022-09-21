import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import arrow from '../assets/arrow.png'

function Quote() {
    function toggler(id) {
        var x = document.getElementById("p" + id);
        if (x.style.display === 'block') {
            x.style.display = 'none'
            document.getElementById('b' + id).innerHTML = '+'
        } else {
            x.style.display = 'block'
            document.getElementById('b' + id).innerHTML = '-'
        }
    }
    return (
        <div className='bg-[#0A0254]'>
            <NavBar color='white' />
            <div className=' bg-[#0A0254] py-[200px]  text-white w-[90%] mx-auto flex justify-between items-start gap-5'>
                <div className='w-full lg:w-[25%] '>
                    <h1 className='text-[25px] text-left md:text-[52px]'>
                        Get in touch <br></br>
                        with us
                    </h1>
                </div>

                <div className='w-full lg:w-[70%]  p-10 rounded-lg'>
                    <from>
                        <label className='text-white uppercase text-[25px]'>name</label>
                        <input type='text' placeholder='e.g jamil' className='text-white pt-5 border-solid border-b-[1px] border-white  mb-10 w-full bg-[#0A0254] uppercase text-[20px] focus:outline-none' />
                        <label className='text-white uppercase text-[25px]'>EMAIL</label>
                        <input type='email' placeholder='e.g jamil@gmail.com' className='text-white pt-5 border-solid border-b-[1px] border-white  mb-10 w-full bg-[#0A0254] uppercase text-[20px] focus:outline-none' />
                        <label className='text-white uppercase text-[25px]'>PHONE OR WHATSAPP NUMBER</label>
                        <input type='number' placeholder='e.g  +37205677895222' className='text-white pt-5 border-solid border-b-[1px] border-white  mb-10 w-full bg-[#0A0254] uppercase text-[20px] focus:outline-none' />
                        <label className='text-white uppercase text-[25px]'>COMPANY</label>
                        <input type='text' placeholder='e.g  isp.inc.' className='text-white pt-5 border-solid border-b-[1px] border-white  mb-10 w-full bg-[#0A0254] uppercase text-[20px] focus:outline-none' />
                        <label className='text-white uppercase text-[25px]'>COUNTRY</label>
                        <input type='text' placeholder='e.g  gaza.' className='text-white pt-5 border-solid border-b-[1px] border-white  mb-10 w-full bg-[#0A0254] uppercase text-[20px] focus:outline-none' />
                        <label className='text-white uppercase text-[25px]'>NUMBER OF NETWORK USERS</label>
                        <input type='number' placeholder='e.g  9500.' className='text-white pt-5 border-solid border-b-[1px] border-white  mb-10 w-full bg-[#0A0254] uppercase text-[20px] focus:outline-none' />
                        <label className='text-white uppercase text-[25px]'>NETWORK TRAFFIC AT PEAK HOUR</label>
                        <input type='text' placeholder='e.g  2.5 Gpbs' className='text-white pt-5 border-solid border-b-[1px] border-white  mb-10 w-full bg-[#0A0254] uppercase text-[20px] focus:outline-none' />

                        <select id="countries" class="   block bg-transparent my-10 py-5 w-full border-solid border-whie border-[1px] px-3 rounded-lg ">
                            <option selected>Choose a country</option>
                            <option value="US" className='text-black'>chose one</option>
                            <option value="CA" className='text-black'>chose two</option>
                            <option value="FR" className='text-black'>chose three</option>
                            <option value="DE" className='text-black'>chose four</option>
                        </select>
                        <textarea className='text-white bg-transparent resize-none focus:outline-none my-10 w-full border-solid border-whie border-[1px] px-3 py-10 rounded-lg' placeholder='tell us about your needs'></textarea>

                        <div className='flex justify-end items-end w-full '>
                            <button className=' rounded-lg px-5 py-3 bg-[#2B028D] uppercase'>
                                send message
                            </button>
                        </div>
                    </from>

                    <div className='w-full flex flex-wrap justify-start items-center gap-10 mt-20'>
                        <div className='w-full md:w-[45%] mt-5 '>
                            <h1 className='text-[#FD2C2C] text-[25px] '>Head Office</h1>
                            <p className='text-[20px]'>
                                Saudi Arabia, Riyadh
                            </p>
                            <p className='text-[20px]'>
                                Olaya District - Seef Building - Fifth Floor
                            </p>
                        </div>
                        <div className='w-full md:w-[45%] mt-5 '>
                            <h1 className='text-[#FD2C2C] text-[25px] '>Work inquiries</h1>
                            <p className='text-[20px]'>
                                Interested in working with us?
                            </p>
                            <p className='text-[20px]'>
                                info@hp-tech.com
                            </p>
                        </div>
                        <div className='w-full md:w-[45%] mt-5 '>
                            <h1 className='text-[#FD2C2C] text-[25px] '>Other Branches</h1>
                            <p className='text-[20px]'>
                                Egypt , UAE , Canada
                            </p>
                        </div>
                        <div className='w-full md:w-[45%] mt-5 '>
                            <h1 className='text-[#FD2C2C] text-[25px] '>Phone</h1>
                            <p className='text-[20px]'>
                                Tel: +966 0112930320
                            </p>
                            <p className='text-[20px]'>
                                Fax: +966 0112930377
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Quote