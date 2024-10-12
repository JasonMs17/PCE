"use client"

import React from 'react'
import styles from './events.module.css'
import Image from 'next/image'
import { MainEvent } from '@/static/Events'
import Link from 'next/link' 

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
            <iframe src={MainEvent.location} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full h-auto aspect-[21/9] rounded-[25px]'></iframe>
            <Link href={"/event-registration"}>
            <div className={`py-2.5 px-5 text-white text-center font-bold rounded-[100px]  ${styles.bg_green}`}>
                Registrasi
            </div>
            </Link>
        </div>
    );
}

export default MainEventSection