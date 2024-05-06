import React from 'react'
import  '../../App.css'
import img from '../../assets/about.png'
import CounterUp from '../../Reuseables/CounterUp'
import Carusel from '../../Reuseables/Carusel'

const About = () => {
  return (
    <>
<div className='responsive ml-[65px] w-auto'>
  <div className='lg:w-1/2 w-full '>
<img src={img} alt=''/>
  </div>
  <div className='lg:w-1/2 w-full '>
  <div className='mt-10 w-[100%] justify-center items-center text-center'>
    <h1 className='font-bold text-3xl mt-3 mb-12'>About Us</h1>
    <p className='text-justify lg:mr-10 '>
    "Welcome to E-Ticketing, where convenience meets adventure. At E-Ticketing, we're passionate about making your travel experience seamless and memorable. Whether you're planning a spontaneous getaway or a meticulously organized trip, our user-friendly platform offers a wide range of e-tickets for flights, trains, buses, and events. With a commitment to reliability and customer satisfaction, we strive to provide you with hassle-free booking, instant confirmations, and round-the-clock support. Join us in exploring the world, one e-ticket at a time."
    </p>
  </div>
</div>
</div>
<CounterUp/>
<Carusel/>
    </>

  )
}

export default About