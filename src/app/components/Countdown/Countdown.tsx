'use client'
import React, { useMemo } from 'react'

function CountDown(props) {
    const padCount = useMemo(() => {
        return String(props.timer).padStart(2, '0');
    }, [props.timer]);

  return (
    <div className='w-fit h-fit text-white text-center font-bold'>
        <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'>{padCount}</h2>
    </div>
  )
}

export default CountDown