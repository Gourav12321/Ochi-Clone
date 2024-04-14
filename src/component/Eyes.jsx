import React from 'react'
import Eyesballs from './Eyesballs'

function Eyes() {
  return (
    <div className='w-full h-screen relative overflow-hidden'>
        <div  data-scroll data-scroll-speed="-.5" data-scroll-section className='bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] w-full bg-cover bg-center h-full'>
        
            <Eyesballs />
            
        </div>
    </div>
  )
}

export default Eyes