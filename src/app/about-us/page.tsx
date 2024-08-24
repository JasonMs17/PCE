'use client';

import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <>
      {/* Existing Sections */}
      <div
        className='flex flex-col justify-center items-center h-screen bg-cover bg-center'
        style={{ backgroundImage: `url('/image/background.png')` }} // Replace with your image path
      >
        {/* Blue Circle with Blur and Transparency */}
        <div
          className='absolute'
          style={{
            left: '0px', // Position to the left, adjust as needed
            top: '200px', // Adjust as needed
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            backgroundColor: 'rgba(30, 144, 255, 0.3)', // Adjust color and transparency
            filter: 'blur(100px)', // Apply blur effect
            zIndex: 0, // Ensure it stays behind other elements
          }}
        ></div>

        <div
          className='relative bg-white shadow-lg p-8'
          style={{
            width: '1236px',
            height: '534px',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            zIndex: 1,
          }}
        >
          <div
            className='absolute top-0 left-0 bg-blue-700 text-white z-10 flex justify-center items-center w-[300px] h-[70px] '
            style={{
              borderRadius: '30px 0px 100px 0',
            }}
          >
            <h2 className='text-4xl font-bold'>About</h2>
          </div>

          <div className='flex flex-col md:flex-row justify-start items-center w-full'>
            <div className='w-full md:w-1/3 text-center md:text-left flex justify-center items-center'>
              <img
                src='/image/logo.png' // Replace with your logo image path
                alt='Logo'
                className='w-[271px] h-[400px]' // Set the size to W: 271px, H: 400px
              />
            </div>

            <div className='w-full md:w-2/3'>
              <h2
                className='font-bold text-gray-900 mb-2 text-[32px] text-left'
              >
                Padjadjaran Career Expo
              </h2>
              <p
                className='text-gray-700 text-[18px] text-justify leading-6'
              >
                Lorem ipsum dolor sit amet consectetur. Sapien felis volutpat
                justo vestibulum egestas lorem aliquam egestas. Habitant a sit
                imperdiet placerat mattis ornare tincidunt volutpat viverra.
                Vitae habitant commodo auctor mi viverra. Turpis in urna nisl
                ultrices consequat eget bibendum imperdiet.
              </p>
            </div>
          </div>
        </div>

        {/* GRAND THEME Section */}
        <div
          className='text-black text-center pt-10 mb-20'
        >
          <h2 className='text-[61px] text-center'>GRAND THEME</h2>
          <p
            className='text-[24px] text-justify max-w-[1038px] mx-auto leading-6'
          >
            Lorem ipsum dolor sit amet consectetur. In erat nunc nec sed euismod
            habitant malesuada volutpat. Blandit aenean eget condimentum
            accumsan eget tellus diam. Orci sit nibh arcu ultrices semper risus
            aliquam.
          </p>
        </div>
      </div>

      {/* Vision and Mission */}
      <div
        className='flex flex-col justify-center items-center bg-gray-100 relative pt-10 mb-20'
      >
        <h2 className='text-4xl font-bold mb-8 mt-10'>
          MISSION AND VISION
        </h2>

        {/* Green Circle with Blur and Transparency */}
        <div
          className='absolute'
          style={{
            right: '30px', // Position to the right
            top: '160px', // Adjust as needed
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            backgroundColor: 'rgba(36, 155, 0, 0.8)', // Green color with transparency
            filter: 'blur(100px)', // Apply blur effect
            zIndex: 0, // Ensure it stays behind other elements
          }}
        ></div>

        <div className='flex flex-row justify-center items-center gap-8'>
          {/* Vision Section */}
          <div
            className='relative bg-white shadow-lg p-8'
            style={{
              width: '561px',
              height: '534px',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              zIndex: 1,
              backgroundImage: `url('/image/event.png')`, // Ganti dengan path gambar PNG Anda
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div
              className='absolute top-0 left-0 bg-blue-700 text-white z-10 flex justify-center items-center'
              style={{
                width: '300px',
                height: '70px',
                borderRadius: '30px 0px 100px 0',
              }}
            >
              <h2 className='text-4xl font-bold'>Vision</h2>
            </div>
            <p
              className='text-[27px] text-justify leading-6 text-white'
            >
              Lorem ipsum dolor sit amet consectetur. Sapien felis volutpat
              justo vestibulum egestas lorem aliquam egestas. Habitant a sit
              imperdiet placerat mattis ornare tincidunt volutpat viverra. Vitae
              habitant commodo auctor mi viverra. Turpis in urna nisl ultrices
              consequat eget bibendum imperdiet.
            </p>
          </div>

          {/* Mission Section */}
          <div
            className='relative bg-white shadow-lg p-8'
            style={{
              width: '561px',
              height: '534px',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              zIndex: 1,
              backgroundImage: `url('/image/event.png')`, // Ganti dengan path gambar PNG Anda
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div
              className='absolute top-0 left-0 bg-blue-700 text-white z-10 flex justify-center items-center'
              style={{
                width: '300px',
                height: '70px',
                borderRadius: '30px 0px 100px 0',
              }}
            >
              <h2 className='text-4xl font-bold'>Mission</h2>
            </div>
            <ul
              className='text-[27px] text-justify leading-6 pl-5 list-decimal text-white'
            >
              <li>Mission point 1.</li>
              <li>Mission point 2.</li>
              <li>Mission point 3.</li>
              <li>Mission point 4.</li>
              <li>Mission point 5.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Our Value Section */}
      <div className='flex flex-col justify-center items-center bg-gray-100'>
        <h2 className='text-4xl font-bold mb-8 mt-10'>
          OUR VALUES
        </h2>
        <div className='flex flex-row justify-center items-center gap-8'>
          {/* Value 1 */}
          <div
            className='relative bg-white shadow-lg p-8'
            style={{
              width: '288px',
              height: '288px',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              zIndex: 1,
            }}
          >
            <div
              className='absolute top-0 left-0 bg-blue-700 text-white z-10 flex justify-center items-center'
              style={{
                width: '200px',
                height: '50px',
                borderRadius: '20px 0px 80px 0',
              }}
            >
              <h2 className='text-2xl font-bold'>Value 1</h2>
            </div>
            <p
              className='text-[20px] text-justify leading-6'
            >
              Value 1 Description
            </p>
          </div>

          {/* Value 2 */}
          <div
            className='relative bg-white shadow-lg p-8'
            style={{
              width: '288px',
              height: '288px',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              zIndex: 1,
            }}
          >
            <div
              className='absolute top-0 left-0 bg-blue-700 text-white z-10 flex justify-center items-center'
              style={{
                width: '200px',
                height: '50px',
                borderRadius: '20px 0px 80px 0',
              }}
            >
              <h2 className='text-2xl font-bold'>Value 2</h2>
            </div>
            <p
              className='text-[20px] text-justify leading-6'
            >
              Value 2 Description
            </p>
          </div>

          {/* Value 3 */}
          <div
            className='relative bg-white shadow-lg p-8'
            style={{
              width: '288px',
              height: '288px',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              zIndex: 1,
            }}
          >
            <div
              className='absolute top-0 left-0 bg-blue-700 text-white z-10 flex justify-center items-center'
              style={{
                width: '200px',
                height: '50px',
                borderRadius: '20px 0px 80px 0',
              }}
            >
              <h2 className='text-2xl font-bold'>Value 3</h2>
            </div>
            <p
              className='text-[20px] text-justify leading-6'
            >
              Value 3 Description
            </p>
          </div>

          {/* Value 4 */}
          <div
            className='relative bg-white shadow-lg p-8'
            style={{
              width: '288px',
              height: '288px',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              zIndex: 1,
            }}
          >
            <div
              className='absolute top-0 left-0 bg-blue-700 text-white z-10 flex justify-center items-center'
              style={{
                width: '200px',
                height: '50px',
                borderRadius: '20px 0px 80px 0',
              }}
            >
              <h2 className='text-2xl font-bold'>Value 4</h2>
            </div>
            <p
              className='text-[20px] text-justify leading-6'
            >
              Value 4 Description
            </p>
          </div>
        </div>
      </div>

      {/* Throwback PCE Section */}
      <div
        className='flex flex-col justify-center items-center bg-gray-100 py-10'
      >
        <h2 className='text-4xl font-bold mb-4'>Throwback PCE</h2>
        <img
          src='/image/throwback.png' // Replace with your throwback image path
          alt='Throwback PCE'
          className='w-full max-w-[1200px] h-auto' // Adjust the width and height as needed
        />
      </div>
    
    </>

  
  );
};

export default AboutUs;
