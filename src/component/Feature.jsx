import React from 'react'
import style from './feature.module.css'
import { motion, useAnimation } from 'framer-motion';
function Feature() {
    const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];
    const onhandleHover = (index) => {
        cards[index].start({
            y: "0"
        })
    }

    const onhandlehoverend = (index) => {
        cards[index].start({ y: "100%" })
    }
    return (

        <div className='bg-zinc-200 rounded-t-3xl'>
            <div className=' pt-[5vw] pl-[4vw] pb-[4vw]'>
                <h1 className=' text-[3.5vw]'>Featured projects</h1>
            </div>
            <hr className=' border-[.5px] border-zinc-500' />
            <div className={` ${style.container1} w-full`} >
                <div className='relative '>

                    <motion.div 
                    onHoverStart={() => onhandleHover(0)} onHoverEnd={() => onhandlehoverend(0)} className={`${style.cards}`}>
                        <motion.h1 className='overflow-hidden tracking-tighter text-8xl absolute left-[100%]  -translate-x-1/2 top-1/2 -translate-y-[70%] text-[#CDEA68] z-10 hidden md:flex'>
                            {"FYDE".split('').map((item, index) => <motion.span key={index} initial={{ y: "100%" }} animate={cards[0]} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .1 }} className=' inline-block'> {item}</motion.span>)}
                        </motion.h1>
                        <div className='flex items-center '>
                            <div className='w-2 h-2 bg-zinc-800 rounded-full'></div>
                            <p className='pl-2'>  FYDE</p>
                        </div>
                        <div className='w-full h-[78vh] mt-4 rounded-2xl'>
                            <img src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png' className='w-full h-[78vh] rounded-2xl' />
                        </div>
                        <div className='flex gap-3'>
                            {["Audit", "copywriting", "sales deck", "slides design"].map((item, index) => {
                                return (
                                    <button className='text-[1.2vw] my-4  px-4 py-[.2vw] uppercase rounded-full border-zinc-800 border-[1.5px] tracking-tighter ' key={index}>
                                        {item}
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
                <div className='relative'>

                <motion.div 
                    onHoverStart={() => onhandleHover(1)} onHoverEnd={() => onhandlehoverend(1)} className={`${style.cards}`}>
                        <motion.h1 className='overflow-hidden tracking-tighter text-8xl absolute right-[100%] translate-x-1/2 top-1/2 -translate-y-[70%] text-[#CDEA68] hidden md:flex'>
                            {"VISE".split('').map((item, index) => <motion.span key={index} initial={{ y: "100%" }} animate={cards[1]} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .1 }} className=' inline-block'> {item}</motion.span>)}
                        </motion.h1>
                        <div className='flex items-center '>
                            <div className='w-2 h-2 bg-zinc-800 rounded-full'></div>
                            <p className='pl-2'>  VISE</p>
                        </div>
                        <div className='w-full h-[78vh] mt-4 rounded-2xl'>
                            <img src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png' className='w-full h-[78vh] rounded-2xl' />
                        </div>
                        <div className='flex gap-3'>
                            {["Audit", "copywriting", "sales deck", "slides design"].map((item, index) => {
                                return (
                                    <button className='text-[1.2vw] my-4  px-4 py-[.2vw] uppercase rounded-full border-zinc-800 border-[1.5px] tracking-tighter ' key={index}>
                                        {item}
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
                <div className='relative'>

                <motion.div 
                    onHoverStart={() => onhandleHover(2)} onHoverEnd={() => onhandlehoverend(2)} className={`${style.cards}`}>
                        <motion.h1 className='overflow-hidden tracking-tighter text-8xl absolute left-[100%] -translate-x-1/2 top-1/2 -translate-y-[70%] text-[#CDEA68] z-10 hidden md:flex'>
                            {"TRAWA".split('').map((item, index) => <motion.span key={index} initial={{ y: "100%" }} animate={cards[2]} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .1 }} className=' inline-block'> {item}</motion.span>)}
                        </motion.h1>
                        <div className='flex items-center '>
                            <div className='w-2 h-2 bg-zinc-800 rounded-full'></div>
                            <p className='pl-2'>  TRAWA</p>
                        </div>
                        <div className='w-full h-[78vh] mt-4 rounded-2xl'>
                            <img src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png' className='w-full h-[78vh] rounded-2xl' />
                        </div>
                        <div className='flex gap-3'>
                            {["Audit", "copywriting", "sales deck", "slides design"].map((item, index) => {
                                return (
                                    <button className='text-[1.2vw] my-4  px-4 py-[.2vw] uppercase rounded-full border-zinc-800 border-[1.5px] tracking-tighter ' key={index}>
                                        {item}
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
                <div className='relative'>

                <motion.div 
                    onHoverStart={() => onhandleHover(3)} onHoverEnd={() => onhandlehoverend(3)} className={`${style.cards}`}>
                        <motion.h1 className='overflow-hidden tracking-tighter text-8xl absolute right-[100%] translate-x-1/2 top-1/2 -translate-y-[70%] text-[#CDEA68] hidden md:flex'>
                            {"PREMIUM".split('').map((item, index) => <motion.span key={index} initial={{ y: "100%" }} animate={cards[3]} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .05 }} className=' inline-block'> {item}</motion.span>)}
                        </motion.h1>
                        <div className='flex items-center '>
                            <div className='w-2 h-2 bg-zinc-800 rounded-full'></div>
                            <p className='pl-2'>  PREMIUM BLEND</p>
                        </div>
                        <div className='w-full h-[78vh] mt-4 rounded-2xl'>
                            <img src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png' className='w-full h-[78vh] rounded-2xl' />
                        </div>
                        <div className='flex gap-3'>
                            {["Audit", "copywriting", "sales deck", "slides design"].map((item, index) => {
                                return (
                                    <button className='text-[1.2vw] my-4  px-4 py-[.2vw] uppercase rounded-full border-zinc-800 border-[1.5px] tracking-tighter ' key={index}>
                                        {item}
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className='w-full flex justify-center pb-[4vw] pt-7'>
                <div className=' bg-zinc-800 md:w-[19vw] w-1/3 p-3 rounded-full flex justify-between items-center px-7'>
                    <button className=' capitalize text-sm  text-zinc-100'>view all case study</button>
                    <div className='w-2 h-2 bg-white rounded-full'> </div>
                </div>
            </div>
        </div>
    )
}

export default Feature