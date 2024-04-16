import { useState } from 'react'

import './App.css'
import Navbar from './component/navbar'
import Landing from './component/Landing-page'
import Marquee from './component/Marquee'
import About from './component/About'
import Eyes from './component/Eyes'
import Feature from './component/Feature'
import Review from './component/Review'
import Last from './component/Last'
import LocomotiveScroll from 'locomotive-scroll';
import MobilePopup from './popup'
function App() {
  

const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <div className="w-full min-h-screen bg-zinc-200"> 
      <MobilePopup/>
        <Navbar />
        <Landing/>
        <Marquee/>
        <About/>
        <Eyes/>
        <Feature/>
        <Review/>
        <Last/>
      </div>
    </>
  )
}

export default App
