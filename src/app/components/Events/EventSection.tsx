"use client"

import React from 'react'
import EventCard from './EventCard'
import SpeakerCard from './SpeakerCard'

interface Speaker {
    name: string;
    description: string;
    src: string;
  }

interface EventSectionProps {
    title: string;
    theme: string;
    description: string;
    src: string;
    time: string;
    location: string;
    maps: string;
    link: string;
    speakers?: Speaker[];
  }

const EventSection = ({ title, theme, description, src, time, location, maps, link, speakers = [] }: EventSectionProps) => {
    return (
        <div className={`flex flex-col gap-10 bg-white/20 rounded-[20px] dark:bg-black/20 p-5`}>
            <EventCard
                title={title}
                theme={theme}
                description={description}
                src={src}
                time={time}
                location={location}
                maps={maps}
                link={link}
            ></EventCard>
            {speakers?.length > 0 && (
            <div className={`flex flex-row justify-center`}>
                <div className={`flex flex-col lg:flex-row gap-20 py-10`}>
                { speakers.map((speaker, index) => (
                    <SpeakerCard
                        key={index}
                        name={speaker.name}
                        description={speaker.description}
                        src={speaker.src}
                    />
                ))}
                </div>
            </div>
            )}
        </div>
    )
}

export default EventSection