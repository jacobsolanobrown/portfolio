'use client';

import React from 'react';
import { useEffect } from 'react';

interface TextScrambleProps {
  // Add your props here
  text: string;
}

const TextScramble: React.FC<TextScrambleProps> = ({ text }) => {
  const [displayedText, setDisplayedText] = React.useState('');

  useEffect(() => {
    // logic to scramble the text and update displayedText over time
    // basically have chars scramble for a bit and then reveal the correct char one by one until the full text is revealed -
    // have two timers, one for scrambling and one for revealing, and clear them when the component unmounts or when the text changes
    //
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const scrambleInterval = 50;
    let charsRevealed = 0;

    // this function scrambles all chars at the same time, we call it until the timeout is reached, then we start revealing chars one by one
    function scrambleAllChars() {
      // This function will scramble all chars at the same time,
      let result = '';
      // this builds the scrambled string
      for (let i = 0; i < text.length; i++) {
        const randomChar =
          characters[Math.floor(Math.random() * characters.length)];
        result += randomChar;
      }
      // this is update to the string that is being displayed, it will show the scrambled version of the text
      setDisplayedText(result);
      // this shows the interval repeating 
      console.log(result);
    }

    const myInterval = setInterval(scrambleAllChars, scrambleInterval);
    const myTimeout = setTimeout(() => {
      // clear the interval 
      clearInterval(myInterval);
      console.log('done scrambling');
    }, 2000);

    // cleanup
    return () => {
      // unmount logic here, clear timers etc
      clearInterval(myInterval);
      clearTimeout(myTimeout);
    };
  }, [text]);

  return (
    <div>
      <h1 className='tracking-widest text-3xl'>{displayedText}</h1>
    </div>
  );
};

export default TextScramble;
