'use client';
import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const localTime = time.toLocaleString('id-ID', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  });

  return (
    <>
      <div className="w-full h-fit bg-green-200 opacity-20 relative -z-10">
        <div className="text-center text-4xl italic font-extrabold sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl">{localTime}</div>
      </div>
    </>
  );
};

export default Clock;
