import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <div className="bg-indigo-700 w-screen flex flex-row justify-around rounded-md items-center fixed bottom-0 p-1 sm:p-0">
        <div className="relative w-5 h-5 sm:w-7 sm:h-7">
          <Link href="https://www.linkedin.com/in/aman-3a934826b" target="_blank">
            <Image src="/img/linkedin-icon.png" alt="linkedin-icon" fill={true} />
          </Link>
        </div>
        <div className="relative w-5 h-5 sm:w-7 sm:h-7">
          <Link href="https://github.com/aMand777" target="_blank">
            <Image src="/img/github-icon.png" alt="github-icon" fill={true} />
          </Link>
        </div>
        <div className="relative w-5 h-5 sm:w-7 sm:h-7">
          <Link href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=aman123456789777@gmail.com" target="_blank">
            <Image src="/img/gmail-icon.png" alt="gmail-icon" fill={true} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
