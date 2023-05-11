import React from 'react';
import BgImage from '../components/bg-image';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/footer';

export const metadata = {
  title: 'My Project',
  description: 'My Web | Project',
};

const Project = () => {
  return (
    <div>
      <BgImage className="mx-auto sm:w-1/2 sm:h-32" />
      <div className="w-11/12 sm:w-1/2 mx-auto bg-slate-200 mt-5 rounded-lg shadow-2xl">
        <h1 className="text-center text-xl sm:text-3xl font-semibold italic pt-3">My Project</h1>
        <div className="grid grid-cols-3 gap-0 sm:gap-3 items-center">
          <div className="relative w-8 h-8 sm:w-12 sm:h-12 justify-self-end mt-5 mr-10 hover:-rotate-12 duration-1000 delay-200 hover:scale-110">
            <Link href="https://notes-app.amandd.online" target="_blank">
              <Image src="/img/note-icon.ico" alt="notes-icon" fill={true} />
            </Link>
          </div>
          <span className="text-sm font-thin italic sm:text-lg col-span-2">notes-app.amandd.online</span>
          <div className="relative w-8 h-8 sm:w-12 sm:h-12 justify-self-end mt-5 mr-10 hover:-rotate-12 duration-1000 delay-200 hover:scale-110">
            <Link href="https://books-app.amandd.online" target="_blank">
              <Image src="/img/book-icon.ico" alt="book-icon" fill={true} />
            </Link>
          </div>
          <span className="text-sm font-thin italic sm:text-lg col-span-2">books-app.amandd.online</span>
          <div className="relative w-8 h-8 sm:w-12 sm:h-12 my-5 justify-self-end mt-5 mr-10 hover:-rotate-12 duration-1000 delay-200 hover:scale-110">
            <Link href="/project">
              <Image src="/img/coming-soon01.png" alt="coming-soon" fill={true} />
            </Link>
          </div>
          <span className="text-sm font-thin italic sm:text-lg col-span-2">coming soon..</span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Project;
