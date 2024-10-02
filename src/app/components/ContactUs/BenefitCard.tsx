"use client"

import React from 'react'
import Image from 'next/image'
import styles from './contactus.module.css'

const BenefitCard = ({description = "Benefit Desc", src='/images/photoprofile.jpg'}) => {
    return (
        <div className={`flex flex-col ${styles.img_card_2} bg-white/80 rounded-[25px] p-5 overflow-hidden w-[280px] h-full`}>
                <div className={`relative w-64 h-64`}>
                    <Image
                        src={src}
                        alt="Image description"
                        height={500}
                        width={500}
                        className="absolute rounded-full"
                        draggable="false"
                        />
                </div>
                <div className={`w-full flex flex-col`}>
                    <h2 className={`text-xl text-black font-bold mb-2`}>{description}</h2>
                </div>
        </div>
    );
}

export default BenefitCard