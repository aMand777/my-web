'use client';
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  console.log('isVisible :', isVisible);

  return (
    <>
      <nav className="bg-primary flex flex-row sticky h-10 z-50 top-0">
        <div className="w-full flex flex-row justify-between px-10 py-2">
          <div className="text-sm font-medium italic text-white">amandd.online</div>
          <div className="hidden md:block">
            <Link href="/">
              <span className="mx-3 cursor-pointer hover:underline hover:text-bold text-white">Home</span>
            </Link>
            <Link href="/about">
              <span className="mx-3 cursor-pointer hover:underline hover:text-bold text-white">About</span>
            </Link>
            <Link href="/contact">
              <span className="mx-3 cursor-pointer hover:underline hover:text-bold text-white">Contact</span>
            </Link>
            <Link href="/project">
              <span className="mx-3 cursor-pointer hover:underline hover:text-bold text-white">Project</span>
            </Link>
          </div>
        </div>
        <button onClick={handleClick} className="mr-10">
          <Image src="/img/menu-icon01.png" alt="menu-icon" width={20} height={20} className={`${isVisible ? 'hidden' : 'block'} cursor-pointer hover:scale-95 md:hidden `} />
          <Image src="/img/close-icon.png" alt="close-icon" width={15} height={15} className={`${!isVisible ? 'hidden origin-center rotate-45 duration-1000' : 'block'} cursor-pointer hover:scale-95 md:hidden`} />
        </button>
      </nav>
      <div
        className={`md:hidden transition-transform duration-1000 transform mt-1 ${
          !isVisible ? '-translate-y-44' : 'translate-y-0'
        } flex flex-col fixed bg-primary right-0 pr-20 pl-1 bg-opacity-70 font-semibold cursor-pointer rounded-tl-full rounded-br-full outline-double outline-green-200 z-40`}>
        <Link href="/" className="my-2">
          <span className="hover:scale-105 active:opacity-70 z-50 text-white">Home</span>
        </Link>
        <Link href="/about" className="my-2">
          <span className="hover:scale-105 active:opacity-70 z-50 text-white">About</span>
        </Link>
        <Link href="/contact" className="my-2">
          <span className="hover:scale-105 active:opacity-70 z-50 text-white">Contact</span>
        </Link>
        <Link href="/project" className="my-2">
          <span className="hover:scale-105 active:opacity-70 z-50 text-white">Project</span>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
