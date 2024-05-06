import React from "react";
import Slider from "react-slick";
import img from '.././assets/review3.png'
import img1 from '.././assets/review.png'
import img2 from '.././assets/review2.png'
import img3 from '.././assets/review1.png'

    
    const Carusel = () => {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 4000,
      cssEase: "linear"
    };
    const data = [
        {
            img: img,
            detail:'I appreciate how they have streamlined the entire experience, making it stress-free and enjoyable. Highly recommended for anyone in need of tickets!'

        },
        {
            img: img1,
            detail:'I will definitely be using this site for all my future ticketing needs.'
            
        },
        {
            img: img2,
            detail:' I love being able to browse and purchase tickets from the comfort of my own home, saving me time and hassle. '
            
        },
        {
            img: img3,
            detail:'It is my one-stop shop for all things ticket-related!'
            
        },
        {
            img: img,
            detail:'The interface is user-friendly, making it easy to navigate and find the perfect tickets at great prices. I feel confident using this platform for all my e-ticketing needs.'
            
        },
        {
            img: img1,
            detail:'I have been using this e-ticketing site for all my travel needs and I couldnt be happier! The booking process is super smooth and straightforward.'
            
        },
    ]
  return (
    <>
    <h2 className="mt-5 justify-center text-center font-bold text-2xl mb-10">Our Feedback</h2>
    
    <div className="w-auto mr-20 gap-x-16 h-56 bg-yellow-300 ml-40 mb-20 slider-container">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} style={{gap:'90px'}} className="bg-pink-400 gap-x-20 w-[20px] h-48 rounded-lg mx-6 bg-slate-50 shadow-gray-300 shadow-xl"> 
                <img src={item.img} className="rounded-lg h-20 mb-8 mt-3 justify-center items-center content-center ml-14" alt={`Review ${index}`} />
                <p className="mb-6 text-justify mx-6">{item.detail}</p>
            </div>
          ))}
        </Slider>
      </div>

    </>
  )
}

export default Carusel;