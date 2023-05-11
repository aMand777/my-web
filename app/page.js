import React from 'react';
import Time from './components/time';
import VideoWelcome from './components/video';

export const metadata = {
  title: 'Welcome Home',
  description: 'My Web | Home',
};

const HomePage = () => {
  return (
    <>
      <div className={`absolute w-screen h-screen overflow-hidden bg-cover bg-center bg-[url("/img/milkyway.jpg")] -z-50 top-0`}></div>
      <Time />
      <VideoWelcome />
    </>
  );
};

export default HomePage;
