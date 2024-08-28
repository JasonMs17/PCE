'use client';

import React from 'react';
import Carousel from '../components/AboutUs/Carousel';

const AboutUs: React.FC = () => {
  return (
    <>
      <div
        className='relative flex flex-col justify-center items-center min-h-screen h-auto bg-cover bg-center px-4 md:px-8'
        style={{ backgroundImage: 'url(/images/background.png)' }}
      >
        {/* Blue Circle with Blur and Transparency */}
        <div
          className='absolute left-0 top-[50px] md:top-[100px] lg:top-[200px] w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full'
          style={{
            backgroundColor: 'rgba(0, 0, 255, 0.3)',
            filter: 'blur(100px)',
          }}
        ></div>

        <div className='relative bg-white dark:bg-gray-800 shadow-lg p-4 md:p-8 w-full max-w-[1236px] h-auto md:h-[534px] rounded-[20px] flex flex-col md:flex-row items-center z-1'>
          <div className='absolute top-0 left-0 bg-blue-700 dark:bg-blue-800 text-white dark:text-gray-200 z-10 flex justify-center items-center w-[180px] h-[45px] md:w-[220px] md:h-[55px] lg:w-[260px] lg:h-[65px] xl:w-[300px] xl:h-[70px] rounded-[30px_0px_100px_0]'>
            <h2 className='text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold'>
              About
            </h2>
          </div>

          <div className='w-full md:w-1/3 text-center md:text-left flex justify-center items-center mt-4 md:mt-0'>
            <img
              src='/images/logo.png'
              alt='Logo'
              className='w-[200px] h-[300px] md:w-[250px] md:h-[350px] lg:w-[271px] lg:h-[400px]'
            />
          </div>

          <div className='w-full md:w-2/3 mt-4 md:mt-0'>
            <h2 className='font-bold mb-2 text-[24px] md:text-[28px] lg:text-[32px] text-left text-black dark:text-white'>
              Padjadjaran Career Expo
            </h2>
            <p className='text-[16px] md:text-[18px] text-justify leading-6 text-gray-800 dark:text-gray-300'>
              Lorem ipsum dolor sit amet consectetur. Sapien felis volutpat
              justo vestibulum egestas lorem aliquam egestas...
            </p>
          </div>
        </div>

        {/* GRAND THEME Section */}
        <div className='text-center pt-10 mb-20'>
          <h2 className='text-[36px] md:text-[48px] lg:text-[61px] text-center text-black dark:text-white'>
            GRAND THEME
          </h2>
          <p className='text-[18px] md:text-[20px] lg:text-[24px] text-justify max-w-[1038px] mx-auto leading-6 text-gray-800 dark:text-gray-300'>
            Lorem ipsum dolor sit amet consectetur. In erat nunc nec sed euismod
            habitant malesuada volutpat...
          </p>
        </div>
      </div>

      {/* Mission dan vision */}
      <div className='relative flex flex-col justify-center items-center pt-10 mb-20'>
        <h2 className='text-4xl font-bold mb-8 mt-10 text-black dark:text-white'>
          MISSION AND VISION
        </h2>

        {/* Green Circle with Blur and Transparency */}
        <div
          className='absolute right-[30px] top-[160px] w-[600px] h-[600px] rounded-full'
          style={{
            backgroundColor: 'rgba(0, 255, 0, 0.3)',
            filter: 'blur(100px)',
          }}
        ></div>

        <div className='flex flex-col md:flex-row justify-center items-center gap-8'>
          {/* Vision Section */}
          <div
            className='relative bg-white dark:bg-gray-800 shadow-lg p-6 md:p-8 w-full md:w-[600px] h-auto md:h-[600px] rounded-[20px] flex items-center z-1 bg-cover bg-center'
            style={{ backgroundImage: 'url(/images/event.png)' }}
          >
            <div className='absolute top-0 left-0 bg-blue-700 dark:bg-blue-800 text-white dark:text-gray-200 z-10 flex justify-center items-center w-[250px] md:w-[300px] h-[60px] md:h-[70px] rounded-[30px_0px_100px_0]'>
              <h2 className='text-3xl md:text-4xl font-bold'>Vision</h2>
            </div>
            <div className='pt-[90px] px-[10px]'>
              {' '}
              {/* Extra padding to avoid overlap */}
              <p className='text-[22px] md:text-[27px] text-justify leading-6 text-gray-800 dark:text-gray-300'>
                Lorem ipsum dolor sit amet consectetur. Sapien felis volutpat
                justo vestibulum egestas lorem aliquam egestas. Habitant a sit
                imperdiet placerat mattis ornare tincidunt volutpat viverra...
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div
            className='relative bg-white dark:bg-gray-800 shadow-lg p-6 md:p-8 w-full md:w-[600px] h-auto md:h-[600px] rounded-[20px] flex items-center z-1 bg-cover bg-center mt-8 md:mt-0'
            style={{ backgroundImage: 'url(/images/event.png)' }}
          >
            <div className='absolute top-0 left-0 bg-blue-700 dark:bg-blue-800 text-white dark:text-gray-200 z-10 flex justify-center items-center w-[250px] md:w-[300px] h-[60px] md:h-[70px] rounded-[30px_0px_100px_0]'>
              <h2 className='text-3xl md:text-4xl font-bold'>Mission</h2>
            </div>
            <div className='pt-[90px] px-[10px]'>
              <ul className='text-[22px] md:text-[27px] text-justify leading-6 text-gray-800 dark:text-gray-300 pl-5 list-decimal'>
                <li>Mission point 1.</li>
                <li>Mission point 2.</li>
                <li>Mission point 3.</li>
                <li>Mission point 4.</li>
                <li>Mission point 5.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Our Value Section */}
      <div className='flex flex-col justify-center items-center px-4 md:px-8'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-8 mt-10 text-black dark:text-white'>
          OUR VALUES
        </h2>
        <div className='flex flex-col md:flex-row justify-center items-center gap-8'>
          {/* Value 1 */}
          <div className='relative bg-white dark:bg-white-800 shadow-lg p-8 w-[288px] h-[288px] rounded-[20px] flex items-center justify-center z-1'>
            <div className='absolute top-0 left-0 bg-blue-700 dark:bg-blue-800 text-white dark:text-gray-200 z-10 flex justify-center items-center w-[200px] h-[50px] rounded-[20px_0px_80px_0]'>
              <h2 className='text-2xl font-bold'>Value 1</h2>
            </div>
            <p className='text-[24px] text-center leading-6 text-gray-800 dark:text-black-300 font-bold'>
              Value
            </p>
          </div>

          {/* Value 2 */}
          <div className='relative bg-white dark:bg-white-800 shadow-lg p-8 w-[288px] h-[288px] rounded-[20px] flex items-center justify-center z-1'>
            <div className='absolute top-0 left-0 bg-blue-700 dark:bg-blue-800 text-white dark:text-gray-200 z-10 flex justify-center items-center w-[200px] h-[50px] rounded-[20px_0px_80px_0]'>
              <h2 className='text-2xl font-bold'>Value 2</h2>
            </div>
            <p className='text-[24px] text-center leading-6 text-gray-800 dark:text-black-300 font-bold'>
              Value
            </p>
          </div>

          {/* Value 3 */}
          <div className='relative bg-white dark:bg-white-800 shadow-lg p-8 w-[288px] h-[288px] rounded-[20px] flex items-center justify-center z-1'>
            <div className='absolute top-0 left-0 bg-blue-700 dark:bg-blue-800 text-white dark:text-gray-200 z-10 flex justify-center items-center w-[200px] h-[50px] rounded-[20px_0px_80px_0]'>
              <h2 className='text-2xl font-bold'>Value 3</h2>
            </div>
            <p className='text-[24px] text-center leading-6 text-gray-800 dark:text-black-300 font-bold'>
              Value
            </p>
          </div>
        </div>
      </div>

      
      <div className='flex flex-col justify-center items-center px-4 md:px-8'>
        <h2 className='text-[36px] md:text-[48px] lg:text-[61px] font-bold mb-8 mt-10 text-black dark:text-white'>
          Throwback PCE
        </h2>
      </div>

      <Carousel></Carousel>
    </>
  );
};

export default AboutUs;
