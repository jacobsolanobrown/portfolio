'use client';

import React, { useState } from 'react';
import TextScramble from './TextScramble';

const HeroText: React.FC = () => {
  const [showTagline, setShowTagline] = useState(false);

  return (
    <div className='flex flex-col gap-4'>
      <TextScramble text='jacob solano' onComplete={() => setShowTagline(true)} />
      <div
        className={`font-mono tracking-widest text-white text-xl transition-all duration-700 ${
          showTagline ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        cs @ brown · full-stack engineer
        <br />
        ux research + usability
      </div>
    </div>
  );
};

export default HeroText;
