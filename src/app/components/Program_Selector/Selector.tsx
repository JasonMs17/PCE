"use client"

import React from 'react'
import styles from './Selector.module.css'
import { useSelectorContext } from './Selector-Context'

const Selector = () => {
  const {selected, setSelected} = useSelectorContext();

  const handleSelector = (element: HTMLElement) => {
    const currentlySelected = document.querySelector(`.${styles.selected}`);
    if (currentlySelected) {
      currentlySelected.classList.remove(styles.selected);
    }

    let changed = element.ariaDescription || '';
    setSelected(parseInt(changed));

    element.classList.add(styles.selected);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    handleSelector(event.currentTarget as HTMLElement);
  };

  return (
    <div className='w-full flex '>
      <h2 aria-description='1' className={`${styles.selector} ${styles.selected}`} onClick={handleClick}>Class Program</h2>
      <h2 aria-description='2' className={`${styles.selector}`} onClick={handleClick}>Mentoring</h2>
      <h2 aria-description='3' className={`${styles.selector}`} onClick={handleClick}>Project-Based Internship</h2>
      <h2 aria-description='4' className={`${styles.selector}`} onClick={handleClick}>Main Event RSVP</h2>
    </div>
  )
}

export default Selector
