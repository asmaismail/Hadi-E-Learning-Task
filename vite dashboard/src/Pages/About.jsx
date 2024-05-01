import React from 'react'
import Accordion from '../Components/Dopddown'
import img from '../assets/about.png';

const About = () => {
  return (
    <>
    <div className='d-flex sx={flex-col}'>
      <div className='w-[50%]'>
        <img className='w-44' src={img} alt=''/>
      </div>
      <div className='mt-5'>
        <h2>About Us</h2>
        <p className='text-justify mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</p>
      </div>
    </div>
    <div style={{margin:'30px'}}>

    <h1 style={{textAlign:'center'}}>Frequenty Asked Questions</h1>
    <Accordion/>
    </div>
    </>
  )
}

export default About