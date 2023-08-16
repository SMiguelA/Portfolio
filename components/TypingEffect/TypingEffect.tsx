'use client'

import Typewriter from 'typewriter-effect';

const TypingEffect = ({ words }:{words:Array<string>}) => {

  return (
    <Typewriter 
      options={{
        strings:words,
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default TypingEffect;
