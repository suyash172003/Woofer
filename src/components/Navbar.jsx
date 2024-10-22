import React from 'react'
import Landing from './Landing'
import Music from '../assets/Music.png'
import { AiOutlineStepBackward,AiOutlinePlayCircle,AiOutlineHeart,AiOutlineStepForward, AiFillHeart, AiFillPlayCircle, AiOutlineForward, AiFillFastForward, AiFillBackward, AiFillFastBackward, AiOutlineReconciliation, AiOutlineReload, AiFillHome, AiFillFolder  } from "react-icons/ai";

import Playlists from './Playlists'

const logos=[AiFillHome,AiFillHome,AiFillFolder,AiFillHeart,AiFillHeart];

function Navbar() {
 
  
  return (
    <div className='w-full h-screen flex justify-between'>
      <div className="flex flex-col items-center justify-start navbar w-1/6 h-full bg-slate-50 gap-2 leading-none">
         <div className=' h-full w-full logo flex justify-center items-center gap-1 leading-tight'>
           <div className='h-6 w-6 rounded-full bg-cyan-500'></div>
           <div className='text-xl font-bold text-black-700 leading-tight'>Let's</div>
           <div className='text-xl font-bold text-fuchsia-500 leading-tight'>Play</div>
         </div>
         <div className="relative h-24 w-24 flex justify-center items-center">
          <div className="absolute inset-1 before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-gradient-to-r before:from-fuchsia-500 before:to-cyan-500 before:blur-lg before:animate-pulse"></div>
          <img src={Music} alt="Music Icon" className="h-20 w-20 rounded-full z-10" />
        </div>

         <div className="px-20 py-1 h-full w-full flex flex-col justify-center items-center gap-3">
            <div className='-text-xl font-semibold h-full w-full flex flex-col justify-center items-start text-black space-y-4'>{["Explore","Genres","Albums","Artists"].map((items,index)=>(<div className='flex items-center justify-between gap-4'><AiFillHeart className='text-fuchsia-500'></AiFillHeart><a href="#" key={items}>{items}</a></div>))}</div>
         </div>
        
         
         <div className="px-20 py-1 h-full w-full flex flex-col justify-center items-center gap-3">
            <div className='w-full flex items-start text-xl font-bold text-black'>Library</div>
            <div className='-text-xl font-semibold h-full w-full flex flex-col items-start text-black space-y-4'>{["Favorites","Popular","My Music"].map((items,index)=>(<div className='flex items-center justify-between gap-2'>{React.createElement(logos[index], { className: 'text-fuchsia-500' })}<a href="#" key={index}>{items}</a></div>))}</div>
         </div>
     
        <div className='h-full w-3/4 mb-3 bg-cyan-500 rounded-3xl'>
            <div className='flex items-start justify-center gap-4'>
              <AiFillFastBackward className='h-16 w-6 text-white'></AiFillFastBackward>
              <AiFillPlayCircle className='h-16 w-6 text-white'></AiFillPlayCircle>
              <AiFillFastForward className='h-16 w-6 text-white'></AiFillFastForward>
            </div>
            <div className='border-2 rounded-md border-white'></div>

        </div>
      </div>
    </div>
  )
}

export default Navbar