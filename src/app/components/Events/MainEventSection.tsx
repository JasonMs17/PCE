"use client"

import React from 'react'
import styles from './events.module.css'
import Image from 'next/image'

const MainEventSection = () => {
    return (
        <div className={`flex flex-col gap-10 bg-white/20 rounded-[25px] dark:bg-black/20 p-5`}>
            <Image
                src={`/images/rektorat.png`}
                alt="Photo Main Event"
                height={832}
                width={1440}
                className="object-cover rounded-[25px]"
            />
            <div className='flex flex-col justify-center'>
                <div className='flex flex-row justify-center'>
                    <div className={`py-2.5 px-10 text-white text-center font-bold rounded-[100px]  ${styles.bg_blue}`}>
                        Waktu
                    </div>
                </div>
                <h2 className={`text-2xl text-center font-bold mb-2`}>Grand Taskshow</h2>
                <h2 className={`text-xl text-center font-bold mb-2`}>Theme Taskshow</h2>
                <p className={`text-center`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae at impedit enim a numquam eum suscipit, necessitatibus totam, laborum expedita iste aut aliquid reiciendis omnis, explicabo dolorem repellat quas doloribus.</p>
            </div>
            <Image
                src={`/images/rektorat.png`}
                alt="Image description"
                height={832}
                width={1440}
                className="object-cover rounded-[25px]"
            />
            <div className={`py-2.5 px-5 text-white text-center font-bold rounded-[100px]  ${styles.bg_green}`}>
                Registrasi
            </div>
        </div>
    );
}

export default MainEventSection