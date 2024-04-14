import React from 'react';
import Eyesballs from './Eyesballs';

function Last() {
    return (
        <div className='bg-[#CDEA68] w-full relative'>
            <div data-scroll data-scroll-speed=".3" data-scroll-section className='z-10 absolute md:bottom-[27vw] bottom-[100vw]  left-1/2'>
                <Eyesballs className='' />
            </div>
            <div className='h-screen pt-20 md:pt-32 flex justify-center items-center flex-col relative'>
                <h1 className='text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-center tracking-tighter leading-tight'>
                    READY<br />TO START<br />THE PROJECT?
                </h1>
            </div>
        </div>
    );
}

export default Last;
