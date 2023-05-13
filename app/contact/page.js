import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BgImage from '../components/bg-image';
import Footer from '../components/footer';

export const metadata = {
  title: 'Contact at',
  description: 'My Web | Contact',
};

const Contact = () => {
  return (
    <>
      <BgImage className="mx-auto sm:w-1/2 sm:h-32" />
      <div className="w-11/12 sm:w-1/2 mx-auto bg-slate-200 mt-5 rounded-lg shadow-2xl">
        <h1 className="text-center text-xl sm:text-3xl font-semibold italic pt-3">Contact me at :</h1>
        <div className="grid grid-cols-3 gap-0 md:gap-2 lg:gap-3 items-center">
          <div className="relative w-8 h-8 sm:w-12 sm:h-12 bg-cover bg-center overflow-hidden hover:scale-125 hover:-rotate-12 duration-1000 delay-200 justify-self-end mt-5 mr-10">
            <Link href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=aman123456789777@gmail.com" target='_blank'>
              <Image src="/img/gmail-icon.png" alt="gmail-icon" fill={true} />
            </Link>
          </div>
          <span className="text-sm font-baase italic col-span-2 md:text-lg">aman123456789777@gmail.com</span>
          <div className="relative w-8 h-8 sm:w-12 sm:h-12 justify-self-end mt-5 mr-10 hover:rotate-12 hover:scale-110 duration-1000 delay-200">
          <Link href="https://www.linkedin.com/in/aman-3a934826b" target='_blank'>
            <Image src="/img/linkedin-icon.png" alt="linkedin-icon" fill={true} />
          </Link>
          </div>
          <span className="text-sm font-base italic col-span-2 sm:text-lg">Aman .</span>
          <div className="relative w-8 h-8 sm:w-12 sm:h-12 justify-self-end my-5 mr-10 hover:rotate-45 hover:scale-110 duration-1000 delay-200">
          <Link href="https://github.com/aMand777" target='_blank'>
            <Image src="/img/github-icon.png" alt="github-icon" fill={true} />
          </Link>
          </div>
          <span className="text-sm font-base italic col-span-2 sm:text-lg">amand777</span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
