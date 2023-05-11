'use client';
import React from 'react';
import { useState, useEffect } from 'react';

const VideoWelcome = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsHidden(true);
    }, 60000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={`cursor-pointer absolute top-0 w-screen h-screen overflow-hidden bg-center hidden xl:block ${isHidden ? 'xl:hidden' : ''}`}>
      <video src="/vid/landing-video.webm" type="video/webm" controls></video>
    </div>
  );
};

export default VideoWelcome;
