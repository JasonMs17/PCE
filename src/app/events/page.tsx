import React from 'react';
import EventCard from '../components/Events/EventCard';
import EventSection from '../components/Events/EventSection';
import MainEventSection from '../components/Events/MainEventSection';
import TimelineSection from '../components/Events/TimelineSection';
import styles from './events.module.css';
import { PreEvents, UpcomingEvent } from '@/static/Events';

const EventsPage = () => {
  return (
    <div className={`${styles.index_bg}`}>
      <div className={`container py-32 px-5 mx-auto`}>
        <div className={`py-5`}>
          <h2 className={`text-4xl font-bold mb-5`}>Upcoming Event</h2>
          <div className={`bg-white/20 rounded-[25px] dark:bg-black/20 p-5`}>
            <EventCard 
              src={UpcomingEvent.image}
              title={UpcomingEvent.title}
              theme={UpcomingEvent.theme}
              description={UpcomingEvent.description}
              time={UpcomingEvent.textDate}
              location={UpcomingEvent.eventLocation}
              maps={UpcomingEvent.location}></EventCard>
          </div>
        </div>
        <div className={`py-5`}>
          <h2 className={`text-4xl font-bold mb-5`}>Pre-Event</h2>
          <div className={`flex flex-col gap-10`}>
            <EventSection
              src={PreEvents[0].image}
              title={PreEvents[0].title}
              theme={PreEvents[0].theme}
              description={PreEvents[0].description}
              time={PreEvents[0].textDate}
              location={PreEvents[0].eventLocation}
              maps={PreEvents[0].location}
              ></EventSection>
            <EventSection
              src={PreEvents[1].image}
              title={PreEvents[1].title}
              theme={PreEvents[1].theme}
              description={PreEvents[1].description}
              time={PreEvents[1].textDate}
              location={PreEvents[1].eventLocation}
              maps={PreEvents[1].location}
              ></EventSection>
            <EventSection
              src={PreEvents[2].image}
              title={PreEvents[2].title}
              theme={PreEvents[2].theme}
              description={PreEvents[2].description}
              time={PreEvents[2].textDate}
              location={PreEvents[2].eventLocation}
              speakers={[{},{},{}]}
              ></EventSection>
            <div className={`py-5`}>
          </div>
        </div>
        <div className={`py-5`}>
          <h2 className={`text-4xl text-center font-bold mb-5`}>Main Event</h2>
          <MainEventSection></MainEventSection>
        </div>
          <h2 className={`text-4xl text-center font-bold mb-5`}>Timeline</h2>
          <TimelineSection></TimelineSection>
        </div>
      </div>
    </div>
  );
}

export default EventsPage;
