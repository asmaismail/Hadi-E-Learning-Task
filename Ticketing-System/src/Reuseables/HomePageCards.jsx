import React from 'react';
import hand from '../assets/handshake.png';
import folder from '../assets/folder.png';
import chat from '../assets/chat.png';
import server from '../assets/server.png';

const HomePageCards = () => {
  const data = [
    {
      icon: hand,
      data: 'Work with us',
    },
    {
      icon: chat,
      data: 'Speak to support',
    },
    {
      icon: server,
      data: 'General enquiries',
    },
   
  ];

  return (
    <div className='flex flex-wrap justify-center'>
      {data.map((item, index) => (
        <div className='m-4' key={index}>
          <div className='border border-gray-400 rounded-md w-80 h-96 flex flex-col justify-center items-center'>
            <img className='h-12' src={item.icon} alt="icon" />
            <p className='font-bold mt-5'>  {item.data}</p>
            <p className='text-justify mx-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambl</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePageCards;
