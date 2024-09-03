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
            <EventSection
              title='Instagram TakeOver 1'
              theme='A Day in My Life as an Intern at a Company'
              description='Q&A program on Instagram with speaker from a specific industry where they share their experience at work as an intern at a company and answer questions that are given by the audience through a video.'
              time='8 September 2024'
            ></EventSection>
            <EventSection
              title='Mini Taskshow'
              theme='Maximize Experience to Navigate Success (Build a Good Personal Branding and Manage your Networks)'
              description='Webinar event series presenting speakers to provide tips to build a good personal branding through channels and how to maximize opportunities and experience to enhance professional networks'
              time='11 September 2024'
            ></EventSection>
            <EventSection
              title='Instagram TakeOver 2'
              theme='Chit-Chat with HR'
              description='Q&A program on Instagram with speaker from a specific industry where they share regarding recruitment tips and examples on how to build a good CV, resume, portofolio, etc. Speaker will also answer questions that are given by the audience through a video.'
              time='22 October 2024'
            ></EventSection>
            <EventSection
              title='Mentorship 1o1'
              theme=''
              description='Mentoring 1o1 with mentors from various industrial companies to share and learn with the mentees regarding the flow recruitment to experience in the workplace where the mentees select their preferred field of work to learn from the mentors and the mentors assign the mentees tasks regarding recruitment flow and review them.'
              speakers={[{},{},{}]}
            ></EventSection>
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
