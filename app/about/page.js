import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/footer';

export const metadata = {
  title: 'About Me',
  description: 'My Web | About',
};

const About = () => {
  return (
    <>
      <div className="w-11/12 mx-auto rounded-lg overflow-hidden container -z-10 mt-3">
        <div className='justify-center w-full h-32 sm:h-40 relative bg-left overflow-hidden bg-cover bg-[url("/img/bg-img02.jpg")]'>
          <p className="absolute text-white text-sm font-semibold italic sm:hidden bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-0">Full Stack Developer</p>
          <div className='mt-3 mx-auto w-20 h-20 rounded-full text-center sm:hidden overflow-hidden bg-center bg-cover bg-[url("/img/pic-landing-page.jpg")]'></div>
        </div>
        <div className="w-full h-32 sm:grid grid-cols-3 gap-3 place-content-around hidden border-spacing-3">
          <div className="bg-slate-200 text-center">
            <div className='mx-auto w-44 h-44 rounded-full relative -top-24 text-center  bg-center bg-cover bg-[url("/img/pic-landing-page.jpg")] outline-double outline-white'></div>
            <span className="relative -top-20 font-bold italic text-xl rounded-lg shadow-xl">Full Stack Web Developer</span>
          </div>
          <div className="col-span-2 bg-slate-200 flex flex-row justify-around items-center">
            <div className="relative origin-top-right hover:-rotate-45 duration-1000 delay-300 w-14 h-14 overflow-hidden bg-cover bg-center rounded-lg">
              <Link href="https://www.w3schools.com/js" target="_blank">
                <Image src="/img/javascript-icon.png" alt="javascript-icon" fill={true} />
              </Link>
            </div>
            <div className="relative hover:scale-125 duration-1000 w-16 h-11 overflow-hidden bg-cover bg-center">
              <Link href="https://tailwindcss.com/docs/installation" target="_blank">
                <Image src="/img/tailwind-css-icon.png" alt="tailwind-css-icon" fill={true} />
              </Link>
            </div>
            <div className="relative hover:animate-spin duration-1000 w-14 h-14 overflow-hidden bg-cover bg-center">
              <Link href="https://react.dev" target="_blank">
                <Image src="/img/react-icon.png" alt="react-icon" fill={true} />
              </Link>
            </div>
            <div className="relative hover:-rotate-45 duration-1000 delay-300 hover:scale-0 w-14 h-14 overflow-hidden bg-cover bg-center">
              <Link href="https://nextjs.org/docs" target="_blank">
                <Image src="/img/nextjs-icon.png" alt="nextjs-icon" fill={true} />
              </Link>
            </div>
            <div className="relative hover:rotate-180 delay-300 duration-1000 origin-top hover:scale-50 overflow-hidden bg-cover bg-center w-14 h-14">
              <Link href="https://nodejs.org/en/docs" target="_blank">
                <Image src="/img/nodejs-icon.png" alt="nodejs-icon" fill={true} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden flex flex-row justify-around bg-slate-200 mt-3 p-3 items-center w-11/12 mx-auto rounded-lg">
        <Link href="https://www.w3schools.com/js" target="_blank">
          <Image src="/img/javascript-icon.png" alt="javascript-icon" width={30} height={30} className="rounded-full" />
        </Link>
        <Link href="https://tailwindcss.com/docs/installation" target="_blank">
          <Image src="/img/tailwind-css-icon.png" alt="tailwind-css-icon" width={30} height={30} />
        </Link>
        <Link href="https://react.dev" target="_blank">
          <Image src="/img/react-icon.png" alt="react-icon" width={30} height={30} />
        </Link>
        <Link href="https://nextjs.org/docs" target="_blank">
          <Image src="/img/nextjs-icon.png" alt="nextjs-icon" width={30} height={30} />
        </Link>
        <Link href="https://nodejs.org/en/docs" target="_blank">
          <Image src="/img/nodejs-icon.png" alt="nodejs-icon" width={30} height={30} />
        </Link>
      </div>
      <div className="mx-auto bg-slate-50 w-11/12 mt-1 sm:mt-4 container">
        <p className="top-1/4 left-1/4 italic text-xl font-base sm:text-2xl p-5 text-justify sm:p-10">
          Pada bagian kolom diatas adalah beberapa tools yang saya gunakan untuk membuat website ini, silahkan klik logo dari masing-masing teknologi tersebut jika ingin sama-sama belajar, karena sampai kapan pun teknologi pasti terus
          berkembang dan mengalami perubahan, jadi tidak ada alasan untuk merasa sudah cukup belajar.
        </p>
        <p className="sm:text-2xl italic font-base text-xl leading-loose p-5 text-justify sm:p-10">`Bagi saya solve problem itu pusing, tetapi rasa puas saat bertemu dengan cara solve nya lah yang membuat itu jadi candu.`</p>
      </div>
      <Footer />
    </>
  );
};

export default About;
