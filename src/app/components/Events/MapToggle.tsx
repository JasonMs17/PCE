"use client"

import React, { useState } from 'react';
import styles from './events.module.css';

interface LocationProps {
  loc: string;
  maps: string;
}

export default function MapToggle({loc, maps} : LocationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const transClass = isOpen || isHovered ? 'block' : 'hidden';

  return (
    <div className="relative">
      <div className={`py-2.5 px-10 text-white text-center font-bold rounded-[100px] ${styles.bg_green}`} onClick={toggle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {loc}
      </div>
      <div className={`absolute ${transClass} w-96 h-96 top-full left-0 p-5 bg-white rounded-[20px] shadow-md z-50`}>
      <iframe src={maps} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full h-full rounded-[20px]'></iframe>
      </div>
    </div>
  );
}