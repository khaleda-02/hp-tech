import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import city from '../assets/city.png'
import { FaArrowDown } from 'react-icons/fa'
function Career() {
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
        <>

            <NavBar color='black' />
            <div className='w-[90%] mx-auto bg-white  text-[#290088] mt-[300px] ' >

                <div className='w-full xl:w-[70%] ml-auto my-32'>
                    <h1 className='text-[52px] w-full xl:w-[50%] text-left uppercase'>
                        Join HTP and
                        develop new innovative
                        tech products
                    </h1>

                    <div className='w-full mt-32'>
                        <h2 className='text-[25px] uppercase'>Build products of tomorrow</h2>
                        <div className='flex justify-start items-center my-8 flex-wrap gap-10'>
                            <p className='w-full xl:w-[35%] my-5 '>Our product is a world leader in its field, and we need the best professionals to solve the most advanced technical problems, because we like to push technology to the limit. You will have the opportunity to work with highly skilled</p>
                            <p className='w-full xl:w-[35%] my-5 '>professionals with large experience, to deliver the highest quality software. As a startup, we also offer a very flexible working environment and competitive wages.</p>
                        </div>
                    </div>
                    <div className='w-full mt-12'>
                        <h2 className='text-[25px] uppercase'>Application process</h2>
                        <p className='w-full xl:w-[400px] mt-8 '>If interested in one of the following positions and your skills and experience are a match for the role, please send us your CV to </p>
                        <p className='text-[#FD2C2C]'>jobs@htp.com</p>
                    </div>
                </div>

                <h1 className='text-[32px] w-full  text-left uppercase'>Open positions</h1>

                <div className='w-full xl:w-[70%] ml-auto my-32'>
                    <div className='w-full rounded-lg bg-[#F8F8F8] px-5 py-10 my-10'>
                        <div className='w-full flex justify-between items-center px-3 py-2 rounded-lg mb-2' >
                            <div className='w-[90%]'>
                                <h1 className='text-[20px] text-left md:text-[28px]'>Technical Support Engineer</h1>
                                <h3 className='text-[12px] text-left text-[#FD2C2C]'>FULL-TIME — MADRID, SPAIN (HYBRID)</h3>
                                <p className='mt-10'>The ideal candidate will be responsible for configuring and troubleshooting our network optimization product,
                                    to resolve our customers' technical issues,
                                    and to act as the liaison between the customers' technical teams and our internal development group.
                                </p>
                            </div>
                            <button className='text-[50px] w-[9%] ' id='b1' onClick={() => toggler(1)}>+</button>
                        </div>
                        <div className='w-[90%] flex justify-center items-center my-5 '>
                            <p className='w-full text-left hidden' id='p1'>
                                Most of the support work will be online, with national and international customers.
                                <br></br>
                                ‍
                                Responsibilities
                                - Provide technical support and maintenance of our products to our customers.
                                - Test and diagnose possible failures in our product.
                                - Plan and carry out the deployment of our products in customer networks.
                                ‍
                                <br></br>

                                <br></br>
                                Minimum Qualifications
                                <br></br>
                                - BSc degree (Grado/licenciatura) in Computer Science, Electrical Engineering, Telecommunications - --Engineering, or a related field.
                                <br></br>
                                - Unix system administration experience, especially related to networking.
                                <br></br>
                                - Network administration experience, including switch and router operation.
                                <br></br>
                                - Experience with scripting in sh/bash and Unix tools (awk, iproute2, ethtool, tc, etc.)
                                <br></br>
                                - Experience with virtual environments: KVM, VMware or VirtualBox.
                                <br></br>
                                - Knowledge of network protocols (IP, ICMP, TCP, LACP, MPLS, etc.) and experience interpreting TCP dumps.
                                <br></br>
                                - Proficient in English (fluent in reading, writing, and speaking).
                                <br></br>
                                - EU nationality or Spanish work permit already granted.
                                <br></br>
                                ‍
                                <br></br>

                                <br></br>
                                Desired Qualifications
                                <br></br>
                                - Experience in C/C++ programming.
                                <br></br>
                                - Experience in Python, Perl, Awk and JavaScript programming.
                                <br></br>
                                - Experience with UNIX development tools (git, make, gdb, perf, gprof, etc.)
                                <br></br>
                                - Knowledge of other languages, apart from Spanish and English.
                                ‍
                                <br></br>

                                <br></br>
                                Competitive Salary
                                <br></br>
                                - Full-time indefinite-term employment contract
                                <br></br>
                                - Competitive salary
                                <br></br>
                                - Work with top-level engineering group in a successful technology start-up
                            </p>
                        </div>
                    </div>
                    <div className='w-full rounded-lg bg-[#F8F8F8] px-5 py-10 my-10'>
                        <div className='w-full flex justify-between items-center px-3 py-2 rounded-lg mb-2' >
                            <div className='w-[90%]'>
                                <h1 className='text-[20px] text-left md:text-[28px]'>Technical Support Engineer</h1>
                                <h3 className='text-[12px] text-left text-[#FD2C2C]'>FULL-TIME — MADRID, SPAIN (HYBRID)</h3>
                                <p className='mt-10'>The ideal candidate will be responsible for configuring and troubleshooting our network optimization product,
                                    to resolve our customers' technical issues,
                                    and to act as the liaison between the customers' technical teams and our internal development group.
                                </p>
                            </div>
                            <button className='text-[50px] w-[9%] ' id='b2' onClick={() => toggler(2)}> <FaArrowDown /> </button>
                        </div>
                        <div className='w-[90%] flex justify-center items-center my-5 '>
                            <p className='w-full text-left hidden' id='p2'>
                                Most of the support work will be online, with national and international customers.
                                <br></br>
                                ‍
                                Responsibilities
                                - Provide technical support and maintenance of our products to our customers.
                                - Test and diagnose possible failures in our product.
                                - Plan and carry out the deployment of our products in customer networks.
                                ‍
                                <br></br>

                                <br></br>
                                Minimum Qualifications
                                <br></br>
                                - BSc degree (Grado/licenciatura) in Computer Science, Electrical Engineering, Telecommunications - --Engineering, or a related field.
                                <br></br>
                                - Unix system administration experience, especially related to networking.
                                <br></br>
                                - Network administration experience, including switch and router operation.
                                <br></br>
                                - Experience with scripting in sh/bash and Unix tools (awk, iproute2, ethtool, tc, etc.)
                                <br></br>
                                - Experience with virtual environments: KVM, VMware or VirtualBox.
                                <br></br>
                                - Knowledge of network protocols (IP, ICMP, TCP, LACP, MPLS, etc.) and experience interpreting TCP dumps.
                                <br></br>
                                - Proficient in English (fluent in reading, writing, and speaking).
                                <br></br>
                                - EU nationality or Spanish work permit already granted.
                                <br></br>
                                ‍
                                <br></br>

                                <br></br>
                                Desired Qualifications
                                <br></br>
                                - Experience in C/C++ programming.
                                <br></br>
                                - Experience in Python, Perl, Awk and JavaScript programming.
                                <br></br>
                                - Experience with UNIX development tools (git, make, gdb, perf, gprof, etc.)
                                <br></br>
                                - Knowledge of other languages, apart from Spanish and English.
                                ‍
                                <br></br>

                                <br></br>
                                Competitive Salary
                                <br></br>
                                - Full-time indefinite-term employment contract
                                <br></br>
                                - Competitive salary
                                <br></br>
                                - Work with top-level engineering group in a successful technology start-up
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[95%] mx-auto bg-[#F8F8F8]  relative rounded-lg py-10  my-10 '>
                <div className='w-[95%] mx-auto xl:text-center'>
                    <h1 className='text-[32px] w-full  text-left uppercase'>Headquaters</h1>
                </div>
                <div className='w-full xl:w-[70%]  ml-auto'>
                    <p className='text-[25px] xl:text-[45px] w-full xl:w-[600px] my-16'>
                        Located in downtown Madrid, our office is easily accessible by public transportation and
                        is surrounded by a wide variety of restaurants and stores.
                    </p>
                    <img src={city} alt='' className='block w-full object-cover' />
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Career

