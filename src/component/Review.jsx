import React from 'react';

function Review() {
    return (
        <div className='bg-zinc-200 w-full pt-10 md:pt-20'>
            <div className='px-4 md:px-10 pb-9'>
                <h1 className='text-3xl md:text-5xl'>Clients' reviews</h1>
            </div>
            <hr className='border-[0.2px] border-zinc-400' />
            <div className='px-4 md:px-10 py-5 flex flex-wrap'>
                <div className='w-full md:w-1/4 mb-6 md:mb-0'>
                    <p>Karman ventures</p>
                </div>
                <div className='w-full md:w-1/4'>
                    <p>Services:</p>
                    <div className='mt-3 md:mt-11'>
                        <button className='block uppercase text-xs md:text-sm tracking-tighter border-[1px] leading-6 px-3 rounded-full border-zinc-800 mb-2 md:mb-0 md:mr-2'>Investor Deck</button>
                        <button className='block uppercase text-xs md:text-sm tracking-tighter border-[1px] leading-6 px-3 rounded-full border-zinc-800'>Sales Deck</button>
                    </div>
                </div>
                <div className='w-full md:w-1/2 md:pl-10'>
                    <div className='flex justify-between'>
                        <p className='block text-sm md:text-base'>William Barnes</p>
                        <a className='text-zinc-400 uppercase'>Read</a>
                    </div>
                    <div className='mt-3 md:mt-11 w-2/3 mb-7'>
                        <img src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png" alt="" className='w-[6rem] h-[6rem] md:w-[10rem] md:h-[10rem] rounded-2xl' />
                    </div>
                    <div className='w-full md:w-2/3'>
                        <p className='text-sm md:text-base leading-5'>
                            They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5
                        </p>
                    </div>
                </div>
            </div>
            {/* Other reviews */}
            <div className='py-7'>
            <div className='border-y-zinc-400 flex px-[4vw] w-full border-t-[1px] py-[1vw] '>
                <div className='w-1/2 '>
                    <p>Planetly</p>
                </div>
                <div className='w-1/4'>
                    <p>Nina Walloch</p>
                </div>
                <div className='w-1/4 text-right'>
                    <p>READ</p>
                </div>
            </div>
            <div className='border-y-zinc-400 flex px-[4vw] w-full border-t-[1px] py-[1vw]'>
                <div className='w-1/2 '>
                    <p>Workiz Easy</p>
                </div>
                <div className='w-1/4'>
                    <p>Tomer Levy</p>
                </div>
                <div className='w-1/4 text-right'>
                    <p>READ</p>
                </div>
            </div>
            <div className='border-y-zinc-400 flex px-[4vw] w-full border-t-[1px] py-[1vw]'>
                <div className='w-1/2 '>
                    <p>Premium Blend</p>
                </div>
                <div className='w-1/4'>
                    <p>Ellen Kim</p>
                </div>
                <div className='w-1/4 text-right'>
                    <p>READ</p>
                </div>
            </div>
            <div className='border-y-zinc-400 flex px-[4vw] w-full border-t-[1px] py-[1vw]'>
                <div className='w-1/2 '>
                    <p>Hypercare Systems</p>
                </div>
                <div className='w-1/4'>
                    <p>Brendan Goss</p>
                </div>
                <div className='w-1/4 text-right'>
                    <p>READ</p>
                </div>
            </div>
            <div className='border-y-zinc-400 flex px-[4vw] w-full border-t-[1px] py-[1vw]'>
                <div className='w-1/2 '>
                    <p>Officevibe</p>
                </div>
                <div className='w-1/4'>
                    <p>Raff Labrie</p>
                </div>
                <div className='w-1/4 text-right'>
                    <p>READ</p>
                </div>
            </div>
            <div className='border-y-zinc-400 flex px-[4vw] w-full border-t-[1px] py-[1vw]'>
                <div className='w-1/2 '>
                    <p>Orderlion</p>
                </div>
                <div className='w-1/4'>
                    <p>Stefan Strohmer</p>
                </div>
                <div className='w-1/4 text-right'>
                    <p>READ</p>
                </div>
            </div>
            <div className='border-y-zinc-400 flex px-[4vw] w-full border-t-[1px] py-[1vw]'>
                <div className='w-1/2 '>
                    <p>Black Book</p>
                </div>
                <div className='w-1/4'>
                    <p>Jaci Smith</p>
                </div>
                <div className='w-1/4 text-right'>
                    <p>READ</p>
                </div>
            </div>
            <div className='border-y-zinc-400 flex px-[4vw] w-full border-y-[1px] py-[1vw]'>
                <div className='w-1/2 '>
                    <p>Trawa Energy</p>
                </div>
                <div className='w-1/4'>
                    <p>David Budde</p>
                </div>
                <div className='w-1/4 text-right'>
                    <p>READ</p>
                </div>
            </div>
            </div>
            <div className='px-4 md:px-10 py-20'>
                <div className='flex gap-2 flex-wrap'>
                    <div className='w-full md:w-[45%] md:mr-4 bg-[#004D43] h-[28vw] md:h-[30vw] flex justify-center items-center rounded-2xl relative'>
                        <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" className='w-1/4 md:w-1/3 flex'/>
                        <div className='absolute left-7 md:left-[7%] bottom-[15%] md:top-[85%] tracking-tighter border-[1px] border-[#CDEA68] text-[#CDEA68] px-3 text-xs md:text-sm rounded-full'>&copy;2019-2022</div>
                    </div>
                    <div className='w-full md:w-1/4 mt-4 md:mt-0 bg-[#212121] h-[28vw] md:h-[30vw] rounded-2xl relative flex justify-center items-center'>
                        <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" className='w-1/5 md:w-1/3 flex'/>
                        <div className='absolute left-7 md:left-[7%] bottom-[15%] md:top-[85%] tracking-tighter border-[1px] border-zinc-100 px-3 text-xs md:text-sm rounded-full text-zinc-100'>
                            <button className='uppercase tracking-tighter'>Rating 5.0 on clutch</button>
                        </div>
                    </div>
                    <div className='w-full md:w-1/4 mt-4 md:mt-0 bg-[#212121] h-[28vw] md:h-[30vw] rounded-2xl relative flex justify-center items-center'>
                        <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" className='w-1/5 md:w-1/3 flex'/>
                        <div className='absolute left-7 md:left-[7%] bottom-[15%] md:top-[85%] tracking-tighter border-[1px] border-zinc-100 px-3 text-xs md:text-sm rounded-full text-zinc-100'>
                            <button className='uppercase tracking-tighter'>Business Bootcamp alumni</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Review;
