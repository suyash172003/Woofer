import React, { useState,useRef } from 'react'
import Playlists from './Playlists'
import Music from "../assets/Music.png"
import { AiFillHeart, AiFillPayCircle, AiFillPlayCircle, AiFillStar } from 'react-icons/ai'
import { FiActivity, FiMinus } from 'react-icons/fi'

function Landing() {
  const audioRef=useRef(null);

  const handlePlayAudio=()=>{
    const audioElement=audioRef.current
    if (audioElement) { 
    audioElement.src="https://p.scdn.co/mp3-preview/541e4aaccc03318918dabf72f93e02bca7dfedcc?cid=d70d86f359464fa7813434cedffcc29e";
    audioElement.play();
    }
  };
  
  return (
    
    <div className='-mt-24 h-full w-full px-4'>
        <div className='h-3/4 w-full flex flex-row'>
          <div className='flex flex-col gap-3'>
            <div className='flex flex-row gap-2'>
            <h1 className='font-bold text-xl text-black'>Best Of</h1>
            <h1 className='font-bold text-xl text-fuchsia-500'>2024</h1>
          </div>
          <div className='text-cyan-600 flex flex-row items-center opacity-95'>
             <FiMinus className='-mr-3 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-1 text-xl font-light'></FiMinus>
             <FiActivity className='-mr-1 text-xl font-light'></FiActivity>
             <FiMinus className='-mr-3 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-1 text-xl font-light'></FiMinus>
             <FiActivity className='-mr-1 text-xl font-light'></FiActivity>
             <FiMinus className='-mr-3 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-1 text-xl font-light'></FiMinus>
             <FiActivity className='-mr-1 text-xl font-light'></FiActivity>
             <FiMinus className='-mr-3 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-1 text-xl font-light'></FiMinus>
             <FiActivity className='-mr-1 text-xl font-light'></FiActivity>
             <FiMinus className='-mr-3 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-1 text-xl font-light'></FiMinus>
            </div>
          <div className='w-3/4 h-2/4 rounded-md bg-cyan-500 flex flex-row'>
            <div className='ms-18 flex flex-row gap-20'>
            <div className='ms-5 p-5 h-full w-full flex flex-col gap-2'>
            <div className='first-line h-1/4 w-full flex flex-row gap-2'>
              <span className='text-5xl text-white uppercase font-bold'>Enjoy the</span>
              <AiFillPlayCircle className='mt-1 text-5xl text-white uppercase'></AiFillPlayCircle>
            </div>
            <span className='ms-20 text-5xl text-white uppercase font-bold'>Collection</span>
            <div className='w-1/6 flex flex-row items-center gap-2'>
              <AiFillHeart className='-inset-0 stext-5xl text-white'></AiFillHeart>
              <span className='text text-white'>Likes</span>
            </div>
            <div className='text-white flex flex-row items-center opacity-95'>
            <div className='text-white flex flex-row items-center opacity-95'>
             <FiMinus className='-mr-3 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-1 text-xl font-light'></FiMinus>
             <FiActivity className='-mr-1 text-xl font-light'></FiActivity>
             <FiMinus className='-mr-3 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-1 text-xl font-light'></FiMinus>
             <FiActivity className='-mr-1 text-xl font-light'></FiActivity>
             <FiMinus className='-mr-3 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-1 text-xl font-light'></FiMinus>
             <FiActivity className='-mr-1 text-xl font-light'></FiActivity>
             <FiMinus className='-mr-3 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-1 text-xl font-light'></FiMinus>
             <FiActivity className='-mr-1 text-xl font-light'></FiActivity>
             <FiMinus className='-mr-3 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-1 text-xl font-light'></FiMinus>
            </div>
            </div>
            </div>
            
            <img src={Music} alt="Music Icon" className="-mr-1/3 h-full w-1/3  z-10" /></div>
          </div>
          </div>
          <div className='-ml-48 container h-4/5 w-full rounded-lg bg-cyan-500 flex flex-col gap-3'>
              <div className='p-3 flex flex-row gap-2'>
                <h1 className='text-xl font-bold text-black'>Recently</h1>
                <h1 className='text-xl font-bold text-fuchsia-500'>Played</h1>
              </div>
              <div className='text-fuchsia-500 flex flex-row items-center opacity-95'>
                  <FiMinus className='-mr-3 text-xl font-light'></FiMinus>
                  <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
                  <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
                  <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
                  <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
                  <FiMinus className='-mr-1 text-xl font-light'></FiMinus>
                  <FiActivity className='-mr-1 text-xl font-light'></FiActivity>
                  <FiMinus className='-mr-3 text-xl font-light'></FiMinus>
                  <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
                  <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
                  <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
                  <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
                  <FiMinus className='-mr-1 text-xl font-light'></FiMinus>
                  <FiActivity className='-mr-1 text-xl font-light'></FiActivity>
                  <FiMinus className='-mr-3 text-xl font-light'></FiMinus>
                  <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
                  <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
                  <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
                  <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
                  <FiMinus className='-mr-1 text-xl font-light'></FiMinus>
            </div>
              <div className='flex flex-col gap-5 ms-8 cards w-full'>
                <div className='bg-slate-50 p-3 rounded-2xl border w-4/5 h-1/5 flex flex-row items-center justify-between'>
                  <img src={Music} alt="Music Icon" className="h-full w-1/4 z-10" />
                  <h1 className='text'>Arjit Singh</h1>
                  <AiFillHeart className='text-red-600 text-2xl'/>
                  <button onClick={handlePlayAudio}>
                    <AiFillPlayCircle className='text-fuchsia-500 text-2xl'></AiFillPlayCircle>
                  </button>
                  <audio ref={audioRef}></audio>
                </div>
                <div className='bg-slate-50 p-3 rounded-2xl border w-4/5 h-1/5 flex flex-row items-center justify-between'>
                  <img src={Music} alt="Music Icon" className="h-full w-1/4 z-10" />
                  <h1 className='text'>Arjit Singh</h1>
                  <AiFillHeart className='text-red-600 text-2xl'/>
                  <button onClick={handlePlayAudio}>
                    <AiFillPlayCircle className='text-fuchsia-500 text-2xl'></AiFillPlayCircle>
                  </button>
                  <audio ref={audioRef}></audio>
                </div>
                <div className='bg-slate-50 p-3 rounded-2xl border w-4/5 h-1/5 flex flex-row items-center justify-between'>
                  <img src={Music} alt="Music Icon" className="h-full w-1/4 z-10" />
                  <h1 className='text'>Arjit Singh</h1>
                  <AiFillHeart className='text-red-600 text-2xl'/>
                  <button onClick={handlePlayAudio}>
                    <AiFillPlayCircle className='text-fuchsia-500 text-2xl'></AiFillPlayCircle>
                  </button>
                  <audio ref={audioRef}></audio>
                </div>
              </div>
          </div>
        </div>
        <div className='-mt-28 flex flex-col container gap-2'>
          <div className='flex flex-row gap-2'>
          <h1 className='font-bold text-xl text-black'>Today's Top</h1>
          <h1 className='font-bold text-xl text-fuchsia-500'>Chart</h1>
          </div>
          <div className='text-fuchsia-500 flex flex-row items-center opacity-95'>
          <div className='text-fuchsia-500 flex flex-row items-center opacity-95'>
             <FiMinus className='-mr-3 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-1 text-xl font-light'></FiMinus>
             <FiActivity className='-mr-1 text-xl font-light'></FiActivity>
             <FiMinus className='-mr-3 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-1 text-xl font-light'></FiMinus>
             <FiActivity className='-mr-1 text-xl font-light'></FiActivity>
             <FiMinus className='-mr-3 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-1 text-xl font-light'></FiMinus>
             <FiActivity className='-mr-1 text-xl font-light'></FiActivity>
             <FiMinus className='-mr-3 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-1 text-xl font-light'></FiMinus>
             <FiActivity className='-mr-1 text-xl font-light'></FiActivity>
             <FiMinus className='-mr-3 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-2 text-xl font-light'></FiMinus>
             <FiMinus className='-mr-1 text-xl font-light'></FiMinus>
            </div>
          </div>
          <div className='flex flex-row w-full h-60 gap-5'>
          <div className='rounded-xl w-full h-full container bg-cyan-500 flex flex-col  items-center'>
              <div className='h-full w-full flex flex-row justify-center'>
                <AiFillStar className='mt-7 text-white text-5xl'></AiFillStar>
                <img src={Music} alt="Music Icon" className="mt-10 h-1/2 w-1/3 z-10"/>
                <AiFillPlayCircle className='mt-3 ml-10 text-white text-3xl'></AiFillPlayCircle>
              </div>
              <span className='-mt-12 text-xl text-white font-semibold'>English Songs</span>
          </div>
          <div className='rounded-xl w-full h-full container bg-cyan-500 flex flex-col justify-center items-center'>
              <div className='h-full w-full flex flex-row justify-center'>
                <AiFillStar className='mt-7 text-white text-5xl'></AiFillStar>
                <img src={Music} alt="Music Icon" className="mt-10 h-1/2 w-1/3 z-10"/>
                <AiFillPlayCircle className='mt-3 ml-10 text-white text-3xl'></AiFillPlayCircle>
              </div>
              <span className='-mt-12 text-xl text-white font-semibold'>Hindi Songs</span>
          </div>
          <div className='rounded-xl w-full  h-full container bg-fuchsia-500 flex flex-col justify-center items-center'>
              <div className='h-full w-full flex flex-row justify-center'>
                <AiFillStar className='mt-7 text-white text-5xl'></AiFillStar>
                <img src={Music} alt="Music Icon" className="mt-10 h-1/2 w-1/3 z-10"/>
                <AiFillPlayCircle className='mt-3 ml-10 text-white text-3xl'></AiFillPlayCircle>
              </div>
              <span className='-mt-12 text-xl text-white font-semibold'>Punjabi Songs</span>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Landing