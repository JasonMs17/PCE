import React from 'react';
import EventCard from '../components/Events/EventCard';
import EventSection from '../components/Events/EventSection';
import MainEventSection from '../components/Events/MainEventSection';
import TimelineSection from '../components/Events/TimelineSection';
import styles from './events.module.css';

const EventsPage = () => {
  return (
    <div className={`${styles.index_bg}`}>
      <div className={`container py-32 px-5 mx-auto`}>
        <div className={`py-5`}>
          <h2 className={`text-4xl font-bold mb-5`}>Upcoming Event</h2>
          <div className={`bg-white/20 rounded-[25px] dark:bg-black/20 p-5`}>
            <EventCard></EventCard>
          </div>
        </div>
        <div className={`py-5`}>
          <h2 className={`text-4xl font-bold mb-5`}>Pre-Event</h2>
          <div className={`flex flex-col gap-10`}>
            <EventSection></EventSection>
            <EventSection></EventSection>
            <EventSection></EventSection>
            <EventSection></EventSection>
          </div>
        </div>
        <div className={`py-5`}>
          <h2 className={`text-4xl text-center font-bold mb-5`}>Main Event</h2>
          <MainEventSection></MainEventSection>
        </div>
        <div className={`py-5`}>
          <h2 className={`text-4xl text-center font-bold mb-5`}>Timeline</h2>
          <TimelineSection></TimelineSection>
        </div>
      </div>
    </div>
  );
}

export default EventsPage;
