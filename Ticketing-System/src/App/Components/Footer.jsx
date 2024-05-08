import React from 'react';
import { BsBook } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import { HiOutlineMail } from 'react-icons/hi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsTwitter } from 'react-icons/bs';
import { AiOutlineGlobal } from 'react-icons/ai';
import { RiPinterestLine } from 'react-icons/ri';
import { TfiGoogle } from 'react-icons/tfi';
import { AiOutlineClockCircle } from 'react-icons/ai';
import ScrollToTop from './ScrollToTop';
import { FaLongArrowAltRight } from 'react-icons/fa';
import img from '../../assets/logo.png';
const Footer = () => {
    return (
        <>
            <div className='w-3/4 ml-40 mx-auto flex lg:flex-row md:flex-row flex-col gap-60 lg:py-5 py-0 -mb-[80px] z-10 relative'>
            </div> 
             <div className='w-auto bg-blue-300 ml-[65px] overflow-x-hidden'>
             <div className='container mx-5  flex lg:flex-row flex-col hover:cursor-pointer  z-30 mt-5'>
                <ScrollToTop />

                <div className='w-full lg:w-1/4  ml-12 mb-14 mt-10 text-left justify-start'>
                    <div className='flex flex-row'>
<img className='h-16 mt-8 ml-8' src={img} alt=''/>
                        <h2 className='text-white font-bold text-[30px] mt-12'>E-Tickets</h2>
                    </div>
                    <div className='mx-5 mt-2 text-gray-300'>
                        <h1>Sorem ipsum dolor sit amet conse ctetur adipiscing elit, sed do eiusmod
                            incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercition ullamco laboris
                            nisi</h1>
                        <h1 className='font-bold text-[25px] mt-2'>Follow us</h1>
                        <ul className='flex flex-row mt-3'>
                            <li className='mx-3 hover:text-yellow'><BsTwitter /></li>
                            <li className='mx-3 hover:text-yellow'><FaFacebookF /></li>
                            <li className='mx-3 hover:text-yellow'><AiOutlineGlobal /></li>
                            <li className='mx-3 hover:text-yellow'><RiPinterestLine /></li>
                            <li className='mx-3 hover:text-yellow'><TfiGoogle /></li>
                        </ul>
                    </div>
                </div>
                <div className='w-full lg:w-1/4 mb-14  mt-10 text-left lg:ml-10 justify-start'>
                    <h1 className='text-yellow font-bold  text-[25px] mt-12 flex lg:ml-12'>Quick Links</h1>

                    <div className='flex mt-4 text-gray-300 lg:justify-center'>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Support</li>
                            <li>Team Members</li>
                            <li>About us</li>
                            <li>Who we are</li>
                            <li>Recent post</li>
                        </ul>
                        <ul>
                            <li className='mx-8'>Condition</li>
                            <li className='mx-8'>Contact us</li>
                            <li className='mx-8'>Get a quote</li>
                            <li className='mx-8'>Consultation</li>
                            <li className='mx-8'>Our services</li>
                            <li className='mx-8'>Who we are</li>
                        </ul>
                    </div>
                </div>
                <div className=' w-full lg:w-1/4 mb-14 mt-10  lg:ml-10 text-left justify-start'>
                    <h1 className='text-yellow font-bold  text-[25px] mt-12 flex lg:mx-5'>Recent Post</h1>
                    <div className='flex flex-row lg:justify-center mt-4'>
                        <div>
                        </div>
                        <div>
                            <h1 className='text-gray-300 lg:mx-4'>Neque porro quisquam est qui dolorem ipsum</h1>
                            <div className='flex mt-4 lg:mx-3'>
                                <h1 className='text-gray-300 text-[20px] gap-4 hover:text-yellow '><AiOutlineClockCircle /></h1>
                                <h1 className='text-gray-300'>05 May,2018</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row lg:justify-center mt-4'>
                        <div>
                        </div>
                        <div>
                            <h1 className='text-gray-300 lg:mx-4'>Neque porro quisquam est qui dolorem ipsum</h1>
                            <div className='flex mt-4 lg:mx-3'>
                                <h1 className='text-gray-300 text-[20px] gap-4  hover:text-yellow'><AiOutlineClockCircle /></h1>
                                <h1 className='text-gray-300'>05 May,2018</h1>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='w-full lg:w-1/4  mb-14 mt-10 lg:ml-16 text-left justify-start'>
                    <h1 className='text-yellow font-bold  text-[25px] mt-12 flex'>Contact us</h1>
                    <div className='flex mt-4'>
                        <ul>
                            <li className='text-gray-300 text-[20px]  hover:text-yellow'><TfiHeadphoneAlt /></li>
                            <li className='text-gray-300 text-[20px] hover:text-yellow mt-1'><HiOutlineMail /></li>
                            <li className='text-gray-300 text-[20px] hover:text-yellow mt-1'><HiOutlineLocationMarker /></li>
                        </ul>
                        <ul>
                            <li className='mx-4 text-gray-300'>+003 (1234) 7894</li>
                            <li className='mx-4 text-gray-300'> youremail@gmail.com</li>
                            <li className='mx-4 text-gray-300'> 123 New Street, 6th Floor,<br/> New York</li>
                        </ul>
                    </div>
                    <h3 className='text-gray-300 text-[20px] mt-4 font-bold'>Opening Hours</h3>
                    <h3 className='text-gray-300'>Sun - Sat : 10:00 am - 05:00 pm</h3>
                </div>
            </div>
            <div className='bg-blue h-16'>
                <h1 className='border-b-2 w-full'></h1>
                <h1 className='text-gray-300 text-center mt-5'>Copyright © 2018. All rights are reserved</h1>
            </div> 
</div> 

        </>

    )
}

export default Footer