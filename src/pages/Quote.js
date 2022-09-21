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
            <div className='bg-[#0A0254] py-[200px]  text-white'>
                <div className='w-full lg:w-[70%] ml-auto flex justify-between items-center gap-5'>
                    <div className='w-full lg:w-[60%] bg-[#2B028D] p-10 rounded-lg'>
                        <h1 className='text-[52px]'>
                            Requset <br></br>
                            A Call Back
                        </h1>
                        <p className='w-[80%] lg:w-[60%] my-5'>
                            Would You Like To Speak To Us Over The
                            Phone? Just Submit Your Details And We'll Be
                            In Touch Shortly . You Can Also Email Us If You
                            Would Prefer- Contactus@Htp.Com
                        </p>

                        <p className='w-[80%] lg:w-[60%] my-5'>
                            I would like to discuss
                        </p>
                        <from>


                            <div className='w-full '>
                                <div className='rounded-lg p-4 my-5 flex justify-between items-center px-3 py-2 mb-2 w-full bg-[#0A0254] ' >
                                    <h1 className='text-white  uppercase text-[20px] focus:outline-none'>Penetration Testing</h1>
                                    <button className='text-[30px] w-[9%] ' id='b3' onClick={() => toggler(3)}> + </button>
                                </div>
                                <div className='w-full flex justify-center items-center my-5  text-black '>
                                    <p className='w-full text-left hidden bg-white p-3 rounded-lg ' id='p3'>
                                        Would You Like To Speak To Us Over The
                                        Phone? Just Submit Your Details And We'll Be
                                        In Touch Shortly . You Can Also Email Us If You
                                        Would Prefer- Contactus@Htp.Com
                                    </p>
                                </div>
                            </div>
                            <input type='number' placeholder='phone number' className='text-white rounded-lg p-4 my-5 w-full bg-[#0A0254] uppercase text-[20px] focus:outline-none' />
                            <input type='email' placeholder='email' className='text-white rounded-lg p-4 my-5 w-full bg-[#0A0254] uppercase text-[20px] focus:outline-none' />
                            <p className='text-white py-4 my-5 w-full bg-transparent uppercase text-[20px] '>Message Or CV Link</p>


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

                    <div className='w-full lg:w-[35%] '>
                        <div className='w-full px-5 '>
                            <div className='w-full flex justify-between items-center px-3 py-2 mb-2 border-solid border-white border-b-[1px]' >
                                <h1 className='text-[25px] text-left md:text-[20px]'>What Do Htp Do ?</h1>
                                <button className='text-[30px] w-[9%] ' id='b1' onClick={() => toggler(1)}> + </button>
                            </div>
                            <div className='w-[90%] flex justify-center items-center my-5 '>
                                <p className='w-full text-left hidden' id='p1'>
                                    Would You Like To Speak To Us Over The
                                    Phone? Just Submit Your Details And We'll Be
                                    In Touch Shortly . You Can Also Email Us If You
                                    Would Prefer- Contactus@Htp.Com
                                </p>
                            </div>
                        </div>
                        <div className='w-full px-5 '>
                            <div className='w-full flex justify-between items-center px-3 py-2 mb-2 border-solid border-white border-b-[1px]' >
                                <h1 className='text-[25px] text-left md:text-[20px]'>Whats Industries Do Htp Specilise In  ?</h1>
                                <button className='text-[30px] w-[9%] ' id='b2' onClick={() => toggler(2)}> + </button>
                            </div>
                            <div className='w-[90%] flex justify-center items-center my-5 '>
                                <p className='w-full text-left hidden' id='p2'>
                                    Would You Like To Speak To Us Over The
                                    Phone? Just Submit Your Details And We'll Be
                                    In Touch Shortly . You Can Also Email Us If You
                                    Would Prefer- Contactus@Htp.Com
                                </p>
                            </div>
                        </div>
                        <div className='w-full px-5 '>
                            <div className='w-full flex justify-between items-center px-3 py-2 mb-2 border-solid border-white border-b-[1px]' >
                                <h1 className='text-[25px] text-left md:text-[20px]'>Why Should You Choose Htp ?</h1>
                                <button className='text-[30px] w-[9%] ' id='b3' onClick={() => toggler(3)}> + </button>
                            </div>
                            <div className='w-[90%] flex justify-center items-center my-5 '>
                                <p className='w-full text-left hidden' id='p3'>
                                    Would You Like To Speak To Us Over The
                                    Phone? Just Submit Your Details And We'll Be
                                    In Touch Shortly . You Can Also Email Us If You
                                    Would Prefer- Contactus@Htp.Com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Quote