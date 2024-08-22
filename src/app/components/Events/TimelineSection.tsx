"use client"

import React from 'react'
import styles from './events.module.css'


const TimelineSection = () => {
    return (
        <div className={`flex flex-col gap-10`}>
            <div className={`grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-16`}>
                <div className={`py-10 px-10 text-xl text-white text-center font-bold rounded-md ${styles.bg_blue}`}>
                    1
                </div>
                <div className={`py-10 px-10 text-xl text-white text-center font-bold rounded-md  ${styles.bg_yellow}`}>
                    2
                </div>
                <div className={`py-10 px-10 text-xl text-white text-center font-bold rounded-md  ${styles.bg_green}`}>
                    3
                </div>
                <div className={`py-10 px-10 text-xl text-white text-center font-bold rounded-md  ${styles.bg_blue}`}>
                    4
                </div>
                <div className={`py-10 px-10 text-xl text-white text-center font-bold rounded-md  ${styles.bg_yellow}`}>
                    5
                </div>
                <div className={`py-10 px-10 text-xl text-white text-center font-bold rounded-md  ${styles.bg_green}`}>
                    6
                </div>
                <div className={`py-10 px-10 text-xl text-white text-center font-bold rounded-md  ${styles.bg_blue}`}>
                    7
                </div>
                <div className={`py-10 px-10 text-xl text-white text-center font-bold rounded-md  ${styles.bg_yellow}`}>
                    8
                </div>
                <div className={`py-10 px-10 text-xl text-white text-center font-bold rounded-md  ${styles.bg_green}`}>
                    9
                </div>
            </div>
            <div className={`${styles.bg_combine} p-2 rounded-md`}>
                <div className={`py-10 px-10 bg-white text-2xl text-black text-center font-bold rounded-md`}>
                    Main Event
                </div>
            </div>
        </div>
    );
}

export default TimelineSection