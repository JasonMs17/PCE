"use client"

import React from 'react'
import styles from './events.module.css'
import MapToggle from './MapToggle'
import Image from 'next/image'

const EventCard = ({ title = "Event Name", theme="" ,description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae at impedit enim a numquam eum suscipit, necessitatibus totam, laborum expedita iste aut aliquid reiciendis omnis, explicabo dolorem repellat quas doloribus.", time="Waktu", location="Lokasi", src= "/images/rektorat.png"}) => {
    return (
            <div className={`flex flex-col md:flex-row`}>
                    <Image
                        src={src}
                        alt="Image description"
                        height={500}
                        width={500}
                        className="w-full md:w-1/3 object-cover rounded-[20px]"
                        />
                <div className={`w-full md:w-2/3 p-5 flex flex-col justify-between`}>
                    <div className={`flex flex-col`}>
                        <div className={`flex gap-4`}>
                            <div className={`py-2.5 px-10 text-white text-center font-bold rounded-[100px]  ${styles.bg_blue}`}>
                                {time}
                            </div>
                            <MapToggle loc={location}/>
                        </div>
                        <div className={`py-5 px-5`}> 
                            <h2 className={`text-2xl font-bold`}>{title}</h2>
                            <h2 className={`text-xl font-bold mb-2`}>{theme ? `"${theme}"` : null}</h2>
                            <p>{description}</p>
                        </div> 
                    </div>
                    <div className={`py-2.5 px-5 text-white text-center font-bold rounded-[100px]  ${styles.bg_green}`}>
                        Register Now
                    </div>
                </div>
            </div>  
    );
}

export default EventCard