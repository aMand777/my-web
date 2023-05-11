import React from 'react';

const BgImage = ({ className }) => {
  return (
    <div className={`${className} w-11/12 mt-3 mx-auto rounded-lg h-20 overflow-hidden bg-cover bg-[url("/img/bg-img02.jpg")]`}>
      <div className={`mx-auto mt-4 w-14 h-14 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-center bg-cover bg-[url("/img/pic-landing-page.jpg")]`}></div>
    </div>
  );
};

export default BgImage;
