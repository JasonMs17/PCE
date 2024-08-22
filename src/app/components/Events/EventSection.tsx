"use client"

import React from 'react'
import EventCard from './EventCard'
import SpeakerCard from './SpeakerCard'

interface Speaker {
    id: string;
    name: string;
    description: string;
    src: string;
  }

interface EventSectionProps {
    title: string;
    description: string;
    src: string;
    time: string;
    speakers: Speaker[];
  }

const EventSection = ({ title, description, src, time, speakers = [{},{}] }: EventSectionProps) => {
    return (
        <div className={`flex flex-col gap-10 bg-white/20 rounded-[25px] dark:bg-black/20 p-5`}>
            <EventCard
                title={title}
                description={description}
                src={src}
                time={time}
            ></EventCard>
            <div className={`flex flex-row justify-center`}>
                <div className={`flex flex-col md:flex-row gap-20 py-10`}>
                    {speakers.map((speaker) => (
                        <SpeakerCard
                        name={speaker.name}
                        description={speaker.description}
                        src={speaker.src}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EventSection