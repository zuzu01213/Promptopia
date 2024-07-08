"use client";

import React, { useEffect } from 'react';
import { animateHero } from '../animations/hero';

const Hero = () => {
  useEffect(() => {
    animateHero();
  }, []);

  return (
    <div className='hero-container'>
      <h1 className='head_text text-center '>
        Discover & Share{' '}
        <br className='max-md:hidden' />
        <span className='orange_gradient text-center'>
          AI-Powered Prompts
        </span>
      </h1>
      <p className='desc text-center secondary'>
        Promptopia is an open-source AI prompting tool for the modern world to discover, 
        create, and share creative prompts
      </p>
    </div>
  );
}

export default Hero;
