import { useState, useMemo, useEffect } from 'react';
import CountDown from '../Countdown/Countdown';
import { MainEvent } from '@/static/Events';
import Link from 'next/link';

const HeroSection = () => {
  const targetDate = MainEvent.date;

  const now = new Date().getTime();
  const targetTime = new Date(targetDate).getTime();
  const timeDifference = targetTime - now;

  const [time, setTime] = useState(timeDifference);

  const calcTimeDifference = useMemo(() => {
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    if (timeDifference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }, [time]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((time) => (time !== 0 ? time - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='bg-[url(/images/background.png)] bg-cover bg-center w-full aspect-video'>
      <div className='relative top-1/2 ml-5 lg:ml-20 w-1/3 -translate-y-1/2'>
        <h1 className='font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white whitespace-nowrap'>
          Padjadjaran Career Expo 2024
        </h1>
        <h1 className='font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white whitespace-nowrap'>
          Bridging Dreams Empowering Career
        </h1>
        <div className='flex flex-row gap-5 py-5'>
          <div className='flex flex-row gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-tr from-[#F4AE09] to-[#F8C13D] items-center text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold'>
            <CountDown timer={calcTimeDifference.days} />
            :
            <CountDown timer={calcTimeDifference.hours} />
            :
            <CountDown timer={calcTimeDifference.minutes} />
            :
            <CountDown timer={calcTimeDifference.seconds} />
          </div>
          <Link
            href='/events#MainEvent'
            className='w-fit h-fit rounded-full bg-gradient-to-tr from-[#023662] to-[#004B8B] p-3.5'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='3'
              stroke='white'
              className='size-4 md:size-7 lg:size-8'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25'
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
