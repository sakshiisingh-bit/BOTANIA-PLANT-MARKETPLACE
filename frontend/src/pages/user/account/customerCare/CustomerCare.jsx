import React from 'react';
//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const CustomerCare = () => {

  return (
    <div className='flex-1 flex justify-center items-center overflow-hidden'>
      <img className='z-[-1] object-cover h-screen w-full fixed top-0 left-0' src="/Flowers2.jpg" alt="" />
      <div className='flex flex-col justify-center items-center backdrop-blur-sm bg-white/40 sm:p-8 p-4 m-4 rounded-2xl shadow-lg'>
        <div className='overflow-hidden w-[10rem] h-[10rem] rounded-full hover:scale-105 duration-500 flex items-center justify-center bg-green-700 text-white text-4xl font-semibold'>
          SS
        </div>
        <div className='mb-8 mt-4 text-xl font-semibold'>Sakshi Singh</div>
        <div className='flex flex-col'>
          <div className='flex justify-center flex-wrap'>
            <div className='flex items-center w-[18rem] '>
              <div className='m-2'><FontAwesomeIcon className='w-6 h-6' icon={faEnvelope} /></div>
              <div><div><span className=''>Gmail</span> - sakshikumari91150@gmail.com</div></div>
            </div>
            <div className='flex items-center w-[18rem] '>
              <div className='m-2'><FontAwesomeIcon className='w-6 h-6' icon={faGithub} /></div>
              <div><a target='_blank' rel='noreferrer' href='https://github.com/sakshiisingh-bit'><span className=''>GitHub</span> - @sakshiisingh-bit</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CustomerCare;
