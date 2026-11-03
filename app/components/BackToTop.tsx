'use client';

import React from 'react';

const BackToTop: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
    // move keyboard focus to the top too, so the next Tab starts there instead of at the footer
    document.getElementById('top')?.focus({ preventScroll: true });
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
      className='p-[15px_30px] rounded-[10px] border border-stone-400 border-solid bg-white text-black font-semibold hover:bg-blue-700 hover:text-white transition-colors cursor-pointer'
    >
      <span aria-hidden='true'>↑ </span>back to top
    </a>
  );
};

export default BackToTop;
