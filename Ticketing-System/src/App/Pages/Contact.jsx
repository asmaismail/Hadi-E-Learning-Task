import React from 'react'
import img from '../../assets/contact.png'
import  '../../App.css'
import CustomForm from '../../Reuseables/CustomForm'
import Button from '../../Reuseables/Button'
import Cards from '../../Reuseables/Cards'

const Contact = () => {
  return (
    <>
    <div className='ml-[65px] w-auto min-h-[100vh]'>
   <div className='responsive'>
    <div className='lg:w-1/2 w-[100%]'>
     <img src={img} className='h-[100%]' alt='' />
    </div>
    <div className='lg:w-1/2 mt-10 w-[100%] justify-center items-center text-center'>
    <h1 className='font-bold text-3xl mt-3 mb-12'>Contact Us</h1>
    <CustomForm className='mt-28 lg:mx-0 mx-8'/>
    <Button >Submit </Button>
    </div>
 
 </div>
 <div>
  <Cards />
 </div>

       <div className='bg-yellow-300 mt-10'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217897.6204680448!2d72.92449151908008!3d31.42375903917971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242a895a55ca9%3A0xdec58f88932671c6!2sFaisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1714859880258!5m2!1sen!2s"
     width="100%" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </div>
    </>
  )
}

export default Contact