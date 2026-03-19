'use client';

import { clear } from 'console';
import React from 'react';
import { useEffect } from 'react';

interface TextScrambleProps {
  text: string;
  onComplete?: () => void;
}

const TextScramble: React.FC<TextScrambleProps> = ({ text, onComplete }) => {
  const [displayedText, setDisplayedText] = React.useState('');

  useEffect(() => {
    // logic to scramble the text and update displayedText over time
    // basically have chars scramble for a bit and then reveal the correct char one by one until the full text is revealed -
    // have two timers, one for scrambling and one for revealing, and clear them when the component unmounts or when the text changes

    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?'; // chars to use for scrambling
    const scrambleIntervalTime = 50; // how often to update the scrambled text
    const revealIntervalTime = 200; // how often to reveal chars after the timeout
    const revealTimeoutTime = 3000; // when to start revealing chars, after scrambling for a bit

    let charsRevealed = 0;

    // this function scrambles all chars at the same time, we call it until the timeout is reached, then we start revealing chars one by one
    function scrambleAllChars() {
      // This function will scramble all chars at the same time,
      let result = '';
      // this builds the scrambled string
      for (let i = 0; i < text.length; i++) {
        // if the char is already revealed, show the real char, otherwise show a random char
        if (i < charsRevealed) {
          result += text[i]; // real char
        }
        // scramble the char
        else {
          result += characters[Math.floor(Math.random() * characters.length)]; // random char
        }
      }
      // this is update to the string that is being displayed, it will show the scrambled version of the text
      setDisplayedText(result);
      // this shows the interval repeating
      console.log(result);
    }

    // interval 1: keeps rebuilding the display string
    const myScrambleInterval = setInterval(
      scrambleAllChars,
      scrambleIntervalTime,
    );

    // interval 2: after 2 seconds, start incrementing charsRevealed
    const revealTimeout = setTimeout(() => {
      // another interval to reveal the chars one by one using our
      const revealInterval = setInterval(() => {
        // increment the number of chars revealed (each time the interval runs, it will reveal one more char)
        charsRevealed++;
        // once the entire string is revealed, clear the intervals and set the displayed text to the final text to ensure it's clean
        if (charsRevealed >= text.length) {
          clearInterval(revealInterval);
          clearInterval(myScrambleInterval);
          setDisplayedText(text); // ensure final text is clean
          onComplete?.();
        }
      }, revealIntervalTime); // update the reveal interval time to control how fast chars are revealed
    }, revealTimeoutTime); // update the wait time to control how long the scrambling happens before revealing starts

    // cleanup
    return () => {
      // unmount logic here, clear timers etc
      clearInterval(myScrambleInterval);
      clearTimeout(revealTimeout);
    };
  }, [text]);

  return (
    <div>
      <h1 className='tracking-widest font-mono text-6xl'>{displayedText}</h1>
    </div>
  );
};

export default TextScramble;
