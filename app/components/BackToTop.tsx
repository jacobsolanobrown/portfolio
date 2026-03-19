'use client';

import React from 'react';

const BackToTop: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    // Remove hash from URL if it's there
    if (window.history.pushState) {
      window.history.pushState(null, '', window.location.pathname);
    } else {
      window.location.hash = '';
    }
  };

  return (
    <a
      href='#top'
      onClick={scrollToTop}
      className='p-[15px_30px] rounded-[10px] border border-stone-400 border-solid bg-white text-black font-semibold hover:bg-blue-300 hover:text-white transition-colors cursor-pointer'
    >
      ↑ back to top
    </a>
  );
};

export default BackToTop;
