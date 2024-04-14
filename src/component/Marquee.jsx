import React from 'react'
import {motion} from 'framer-motion'
function Marquee() {
  return (
    <div data-scroll data-scroll-speed="-.2" data-scroll-section className="bg-[#004D43] w-full pt-10 pb-[4.5rem] rounded-t-2xl  ">
        <div className=" uppercase  flex  whitespace-nowrap border-t-2 border-b-2 mt-10 border-zinc-300 overflow-hidden ">
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity, duration:9}} className="text-[15vw] leading-none font-semibold text-zinc-200 pr-20">We  are ochi</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity, duration:9}} className="text-[15vw] leading-none font-semibold text-zinc-200 pr-20">We  are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee