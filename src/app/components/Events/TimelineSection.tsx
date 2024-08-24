"use client"

import React from 'react'
import styles from './events.module.css'


const TimelineSection = () => {
    return (
        <div className={`flex flex-col gap-10`}>
            <div className={`relative`}>
                <div className='absolute hidden md:flex flex-col h-full py-12 justify-between top-0 bottom-0 left-0 right-0'>
                        <div className="w-full h-1/6 border-t-4 border-dashed border-black dark:border-white"></div>
                        <div className="w-full h-1/6 relative">
                            <div className="absolute top-1/2 w-full border-t-4 border-dashed border-black dark:border-white"></div>
                        </div>
                        <div className="w-full h-1/6 border-b-4 border-dashed border-black dark:border-white"></div>
                </div>
                <div className='absolute hidden md:flex flex-row h-full justify-between top-0 bottom-0 left-0 right-0'>
                    <div className={`self-end h-1/2 ${styles.w_custom} border-r-4 border-dashed border-black dark:border-white`}></div>
                    <div className={`h-1/2 ${styles.w_custom} border-l-4 border-dashed border-black dark:border-white`}></div>
                </div>
                <div className='absolute hidden md:block top-full -bottom-1/2 left-3/4 right-0'>
                    <div className={`h-1/2 ${styles.m_custom} border-r-4 border-b-4 rounded-br-[25px] border-dashed border-black dark:border-white`}></div>
                </div>
                <div className='absolute hidden md:block top-full -bottom-full left-1/2 right-1/4'>
                    <div className={`${styles.h_custom} m-1/2`}></div>
                    <div className={`h-1/2 m-1/2 border-l-4 border-t-4 rounded-tl-[25px] border-dashed border-black dark:border-white`}></div>
                </div>
                <div className='absolute md:hidden md:block top-0 -bottom-32 left-0 right-1/2 border-r-4 border-dashed border-black dark:border-white'>
                </div>
                <div className={`grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-16 w-full relative`}>
                    <div className={`py-5 px-20 text-xl text-white text-center rounded-md ${styles.bg_blue}`}>
                        <p className={`font-bold mb-2`}>
                            Waktu
                        </p>
                        <p>
                            Kegiatan
                        </p>
                    </div>
                    <div className={`py-5 px-20 text-xl text-white text-center rounded-md  ${styles.bg_yellow}`}>
                        <p className={`font-bold mb-2`}>
                            Waktu
                        </p>
                        <p>
                            Kegiatan
                        </p>
                    </div>
                    <div className={`py-5 px-20 text-xl text-white text-center rounded-md  ${styles.bg_green}`}>
                        <p className={`font-bold mb-2`}>
                            Waktu
                        </p>
                        <p>
                            Kegiatan
                        </p>
                    </div>
                    <div className={`py-5 px-20 text-xl text-white text-center rounded-md  ${styles.bg_blue}`}>
                        <p className={`font-bold mb-2`}>
                            Waktu
                        </p>
                        <p>
                            Kegiatan
                        </p>
                    </div>
                    <div className={`py-5 px-20 text-xl text-white text-center rounded-md  ${styles.bg_green}`}>
                        <p className={`font-bold mb-2`}>
                            Waktu
                        </p>
                        <p>
                            Kegiatan
                        </p>
                    </div>
                    <div className={`py-5 px-20 text-xl text-white text-center rounded-md  ${styles.bg_yellow}`}>
                        <p className={`font-bold mb-2`}>
                            Waktu
                        </p>
                        <p>
                            Kegiatan
                        </p>
                    </div>
                    <div className={`py-5 px-20 text-xl text-white text-center rounded-md  ${styles.bg_blue}`}>
                        <p className={`font-bold mb-2`}>
                            Waktu
                        </p>
                        <p>
                            Kegiatan
                        </p>
                    </div>
                    <div className={`py-5 px-20 text-xl text-white text-center rounded-md  ${styles.bg_yellow}`}>
                        <p className={`font-bold mb-2`}>
                            Waktu
                        </p>
                        <p>
                            Kegiatan
                        </p>
                    </div>
                    <div className={`py-5 px-20 text-xl text-white text-center rounded-md  ${styles.bg_green}`}>
                        <p className={`font-bold mb-2`}>
                            Waktu
                        </p>
                        <p>
                            Kegiatan
                        </p>
                    </div>
                </div>
            </div>
            <div className='p-20'>
            </div>
                <div className={`${styles.bg_combine} p-2 rounded-md relative`}>
                    <div className={`py-10 px-10 bg-white/90 dark:bg-black/90 text-2xl text-center font-bold rounded-md`}>
                        Main Event
                    </div>
                </div>
        </div>
    );
}

export default TimelineSection