"use client"

import React from 'react'
import styles from './Download.module.css'

const Download = () => {
  return (
    <div className='flex justify-end'>
      <button className={`${styles.download_bg} md:px-10 md:py-3 p-2 rounded-[20em] flex gap-3 md:text-2xl text-m justify-center items-center text-white`}>
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 15V17.25C1 17.8467 1.23705 18.419 1.65901 18.841C2.08097 19.2629 2.65326 19.5 3.25 19.5H16.75C17.3467 19.5 17.919 19.2629 18.341 18.841C18.7629 18.419 19 17.8467 19 17.25V15M14.5 10.5L10 15M10 15L5.5 10.5M10 15V1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Download
      </button>
    </div>
  )
}

export default Download
