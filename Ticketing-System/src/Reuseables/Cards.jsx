import React from 'react';
import { Divider } from "antd";
import callIcon from '../assets/call.png';
import emailIcon from '../assets/email.png';
import map from '.././assets/office.png'
const Cards = () => {
    const data = [
        {
            icon: callIcon,
            title: 'Give us a call for any question!',
            detail: 'Phone: +1234567890',
        },
        {
            icon: map,
            title: 'Vist us at our location',
            detail: '123 Main St, City, Country',
        },
        {
            icon: emailIcon,
            title: 'Send us email anytime',
            detail: 'example@example.com',
        },
    ];

    return (
        <div className="responsive w-auto lg:mx-20 mx-8 cursor-pointer mt-5 gap-y-4 lg:gap-x-4">
            {data.map((item, index) => (
                <div key={index} className="lg:w-1/3 w-full border-gray-100 rounded-md bg-white shadow-2xl shadow-gray-300">
                    <img src={item.icon} alt="icon" className="w-12 h-12 mx-auto mt-4" />
                    {/* <Divider /> */}
                    <h2 className='font-bold text-lg text-center mt-5'>{item.title}</h2>
                    <p className="text-black text-center mt-5">{item.detail}</p>
                </div>
            ))}
        </div>
    );
}

export default Cards;
