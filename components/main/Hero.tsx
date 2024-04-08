import React from 'react'
import HeroContent from '../sub/HeroContent'

const Hero = () => {
  return (
    <div className='relative flex flex-col h-fit w-full'>
        <video 
        autoPlay
        muted
        loop
        className='rotate-180 absolute top-[-480px] left-0 z-[1] w-full h-fit object-cover'
        >
            <source src='/blackhole.webm' type='video/webm'/>
        </video>
        <HeroContent/>
    </div>
  )
}

export default Hero