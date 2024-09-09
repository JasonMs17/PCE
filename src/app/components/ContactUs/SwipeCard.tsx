"use client";
import React, { useState, useRef } from 'react';
import BenefitCard from './BenefitCard';

const SwipeCards = () => {
  const [cards] = useState([
    {
      id: 1,
      description: 'In-touch Marketing PCE',
      src: '/images/notify-heart-dynamic-color.svg',
    },
    {
      id: 2,
      description: 'Brand awareness & Positioning Benefit',
      src: '/images/megaphone-dynamic-color.svg',
    },
    {
      id: 3,
      description: 'Building Professional Relationships',
      src: '/images/target-dynamic-color.svg',
    },
    {
        id: 4,
        description: 'Possibility for Growing Market Influence',
        src: '/images/rocket-dynamic-color.svg',
      },
      {
        id: 5,
        description: 'Shared Collaboration and Community Obligation',
        src: 'images/location-dynamic-color.svg',
      },
  ]);

  const scrollRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
  };

  const handleMouseUp = () => {
    isDown = false;
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={scrollRef}
      className="overflow-x-scroll lg:overflow-x-visible scrollbar-hide relative px-0.5"
      style={{ overflowY: 'hidden' }}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div className="flex snap-x snap-mandatory gap-5 w-full items-stretch">
        {cards.map((card) => (
          <div key={card.id} className={`flex-none snap-center`}>
            <BenefitCard  description={card.description} src={card.src} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SwipeCards;
