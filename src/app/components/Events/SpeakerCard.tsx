"use client"

import React from 'react'
import styles from './events.module.css'
import Image from 'next/image'

const SpeakerCard = ({ name = "Speaker Name", description = "A Speaker", src= "/images/photoprofile.jpg" }) => {
    return (
        <div className={`flex flex-col bg-white/80 rounded-[25px] p-5 overflow-hidden ${styles.img_card} max-w-[296px]`}>
                <div className={`relative w-64 h-64`}>
                    <Image
                        src={src}
                        alt="Image description"
                        height={500}
                        width={500}
                        className="absolute rounded-full"
                        />
                </div>
                <div className={`w-full flex flex-col`}>
                    <h2 className={`text-2xl text-black text-center font-bold mb-2`}>{name}</h2>
                    <p className={`text-lg text-black break-words text-center font-bold mb-2`}>{description}</p>
                </div>
        </div>
    );
}

export default SpeakerCard