"use client"

import React, { useState } from 'react';
import styles from './events.module.css'
import Image from 'next/image';

export default function MapToggle() {
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
        Lokasi
      </div>
      <div className={`absolute ${transClass} w-96 h-96 top-full left-0 p-5 bg-white rounded-[25px] shadow-md z-50`}>
        <Image
          src={`/images/rektorat.png`}
          alt="Image description"
          height={500}
          width={500}
          className="h-full object-cover rounded-[25px]"
        />
      </div>
    </div>
  );
}