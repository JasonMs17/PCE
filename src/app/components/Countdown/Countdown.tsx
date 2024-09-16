'use client';
import React, { useMemo, useEffect, useState } from 'react';

function CountDown(props) {
  const [clientTimer, setClientTimer] = useState(null);

  useEffect(() => {
    // Hanya update nilai timer di sisi klien
    setClientTimer(props.timer);
  }, [props.timer]);

  const padCount = useMemo(() => {
    return String(clientTimer).padStart(2, '0');
  }, [clientTimer]);

  return (
    <div className='w-fit h-fit text-white text-center font-bold'>
      {clientTimer !== null && (
        <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'>{padCount}</h2>
      )}
    </div>
  );
}

export default CountDown;
