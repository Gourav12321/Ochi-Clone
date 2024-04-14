import React from 'react';

function About() {
  return (
    <div data-scroll data-scroll-speed=".1" data-scroll-section className="bg-[#CDEA68] w-full rounded-[2vw] pb-7 -mb-[3.3vw]">
      <div className='pt-[8vw] pr-[5vw] pb-[4vw]'>
        <h1 className='text-[4vw] tracking-tighter pl-[4.5vw] pr-[5vw] leading-[4.5vw]'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
      </div>
      <hr className='border-[1px] border-[#aec55b]' />
      <div className='flex flex-col md:flex-row pt-6 w-full px-6 md:px-12 pb-[9vw]'> 
        <div className='md:w-1/2'>
          <p>What you can expect:</p>
        </div>
        <div className='md:w-[21vw] mt-4 md:mt-0'>
          <div className='mb-6'>
            We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people.
          </div>
          <div>
            We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
          </div>
        </div>
        <div className='flex flex-col md:flex-row ml-0 md:ml-[9vw] mt-6 md:mt-0'>
          <p className='w-fit md:translate-y-[8vw] md:mr-3'>S:</p>
          {["instagram", "behance","facebook","Linkedin"].map((item,index)=>{
            return(
              <div key={index} className='w-fit md:translate-y-[11vw]'>
                <a className='underline capitalize'> {item}</a>
              </div>
            );
          })}
        </div>
      </div>
      <hr className='border-[1px] border-[#aec55b]' />
      <div className='w-full px-6 md:px-12 flex pb-10 pt-6 flex-col md:flex-row'>
        <div className='md:w-1/2'>
          <div className='w-full'>
            <h1 className=' text-[4vw] '>Our approach:</h1>
          </div>
          <div className='mt-4 w-fit'>
            <button className=' uppercase flex justify-center items-center rounded-full px-5 py-3 bg-black text-zinc-200 tracking-tighter'>Read more <span><div className='w-3 h-3 bg-zinc-200 ml-6 rounded-full'></div></span></button>
          </div>
        </div>
        <div className='md:w-1/2 mt-6 md:mt-0'>
          <img src='https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg' alt='' className='rounded-[1.5vw]'/>
        </div>
      </div>
    </div>
  );
}

export default About;
