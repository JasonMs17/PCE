"use client"

import React from 'react'
import styles from './events.module.css'
import Image from 'next/image'
import { MainEvent } from '@/static/Events'

const MainEventSection = () => {

    return (
        <div className={`flex flex-col gap-10 bg-white/20 rounded-[25px] dark:bg-black/20 p-5`}>
            <Image
                src={'/images/events/main-event-thumbnail.svg'}
                alt="Photo Main Event"
                height={832}
                width={1440}
                className="w-full h-fit object-contain rounded-[25px]"
            />
            <div className='flex flex-col justify-center'>
                <div className='flex flex-row justify-center'>
                    <div className={`py-2.5 px-10 text-white text-center font-bold rounded-[100px]  ${styles.bg_blue}`}>
                        {MainEvent.textDate}
                    </div>
                </div>
                <h2 className={`text-2xl text-center font-bold mb-2`}>{MainEvent.title}</h2>
                <h2 className={`text-xl text-center font-bold mb-2`}>{MainEvent.theme}</h2>
                <p className={`text-center`}>{MainEvent.description}</p>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.728497129167!2d107.77147267446607!3d-6.9230239677606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c4ad43e13e87%3A0x71dd00c9438b2236!2sBale%20Santika!5e0!3m2!1sen!2sid!4v1724298019078!5m2!1sen!2sid" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full h-auto aspect-[21/9] rounded-[25px]'></iframe>
            <div className={`py-2.5 px-5 text-white text-center font-bold rounded-[100px]  ${styles.bg_green}`}>
                Registrasi
            </div>
        </div>
    );
}

export default MainEventSection