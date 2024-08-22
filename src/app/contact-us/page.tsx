import React from 'react';
import BenefitCard from '../components/ContactUs/BenefitCard';
import SwipeCard from '../components/ContactUs/SwipeCard';
import styles from './contactus.module.css'
import Image from 'next/image';

const EventsPage = () => {
  return (  
    <div className={`flex flex-col items-center`}>
      <div className='w-full py-32 mt-20 text-center font-bold text-xl md:text-4xl'>
        bridging dreams, empowering careers
      </div>
      <div className={`container px-5`}>
        <div className={`flex flex-col md:flex-row gap-5 p-5`}>
          <div className={`w-full xl:w-1/3 hidden xl:flex flex-row bg-white/80 rounded-[25px] p-5 overflow-hidden ${styles.img_card}`}>
                  <div className={`w-full flex flex-col justify-between`}>
                      <div>
                          <h2 className={`text-3xl text-black font-bold mb-2`}>XXXXX</h2>
                          <p className={`text-black font-bold mb-2`}>Participants</p>
                      </div>
                      <p className={`text-black`}>*Last year&apos;s data</p>
                  </div>
                  <div className={`relative w-48 h-48 `}>
                      <Image
                          src={`/images/photoprofile.jpg`}
                          alt="Image description"
                          height={500}
                          width={500}
                          className={`absolute rounded-full`}
                          />
                  </div>
          </div>
          <div className={`w-full xl:w-1/3 flex flex-row bg-white/80 rounded-[25px] p-5 overflow-hidden ${styles.img_card}`}>
                  <div className={`w-full flex flex-col justify-between`}>
                      <div>
                          <h2 className={`text-3xl text-black font-bold mb-2`}>XXXXX</h2>
                          <p className={`text-black font-bold mb-2`}>Partners and Media Partners</p>
                      </div>
                      <p className={`text-black`}>*Last year&apos;s data</p>
                  </div>
                  <div className={`relative w-48 h-48 `}>
                      <Image
                          src={`/images/photoprofile.jpg`}
                          alt="Image description"
                          height={500}
                          width={500}
                          className={`absolute rounded-full`}
                          />
                  </div>
          </div>
          <div className={`flex flex-col justify-between gap-5 w-full xl:w-1/3`}>
            <div className={`flex flex-row px-5 py-10 justify-between text-black bg-white rounded-[25px] hover:text-white ${styles.bg_yellow}`}>
              <p className={`font-bold`}>
              Partnership benefits 
              </p>
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
            </div>
            <div className={`flex flex-row px-5 py-10 justify-between text-black bg-white rounded-[25px] hover:text-white  ${styles.bg_yellow}`}>
              <p className={`font-bold`}>
              Let&apos;s get in touch
              </p>
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
            </div>
          </div>
        </div>
        <div className={`py-5`}>
          <div className={`flex flex-row items-center my-5`}>
            <Image
                            src={`/images/contactus/decoration_1_1.png`}
                            alt="Image description"
                            height={335}
                            width={134}
                            className="w-2/12"
                            />
              <h2 className={`w-8/12 text-3xl font-bold text-center`}>Why work with us?</h2>
              <Image
                            src={`/images/contactus/decoration_1_2.png`}
                            alt="Image description"
                            height={335}
                            width={134}
                            className="w-2/12"
                            />
          </div>
          <SwipeCard></SwipeCard>
        </div>
        <div className={`py-5`}>
        <div className={`flex flex-row items-center my-5`}>
            <Image
                            src={`/images/contactus/decoration_2_1.png`}
                            alt="Image description"
                            height={335}
                            width={134}
                            className="w-2/12"
                            />
              <h2 className={`w-8/12 text-3xl font-bold text-center`}>Ready to work with us?</h2>
              <Image
                            src={`/images/contactus/decoration_2_2.png`}
                            alt="Image description"
                            height={335}
                            width={134}
                            className="w-2/12"
                            />
          </div>
          <div className={`flex flex-row items-center gap-5`}>
            <div className={`flex flex-row bg-white rounded-[25px] overflow-hidden hover:text-white ${styles.bg_yellow}`}>
              <Image
                          src={`/images/photoprofile.jpg`}
                          alt="Image description"
                          height={500}
                          width={500}
                          className="w-3/12"
                          />
              <div className={`py-5 xl:py-10 px-1 xl:px-5 md:px-2.5`}>
                <h2 className={`text-black text-xl font-bold mb-2`}>Whatsapp</h2>
                <p className={`text-black font-bold`}>+62 XXX XXXX XXXX</p>
              </div>
            </div>
            <p>or</p>
            <div className={`flex flex-row bg-white rounded-[25px] overflow-hidden hover:text-white ${styles.bg_yellow}`}>
              <Image
                          src={`/images/photoprofile.jpg`}
                          alt="Image description"
                          height={500}
                          width={500}
                          className="w-3/12"
                          />
              <div className={`py-5 xl:py-10 px-1 xl:px-5 md:px-2.5`}>
                <h2 className={`text-lg text-black md:text-xl font-bold mb-2`}>Email</h2>
                <p className={`font-bold text-black`}>mail@domain.com</p>
              </div>
            </div>
          </div>
        </div>  
      </div>

    </div>
  );
}

export default EventsPage;
