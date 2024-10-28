import React, { useState,useRef } from 'react'
import Music from "../assets/Music.png"
import { AiFillHeart, AiFillPauseCircle, AiFillPlayCircle, AiFillStar } from 'react-icons/ai'
import { FiActivity, FiMinus } from 'react-icons/fi'
import {motion} from "framer-motion"
import { useNavigate } from 'react-router-dom'
function Landing() {
  const navigate=useNavigate()
  const audioRefs = [useRef(null), useRef(null), useRef(null)];
  const [playingTracks, setPlayingTracks] = useState([false, false, false]);

  const handlePlayAudio = (index) => {
    const audio = audioRefs[index].current;
    const newPlayingTracks = [...playingTracks];

    if (newPlayingTracks[index]) {
      audio.pause();
      newPlayingTracks[index] = false;
    } else {
      audio.play();
      newPlayingTracks.fill(false); 
      newPlayingTracks[index] = true; 
    }

    setPlayingTracks(newPlayingTracks);
  };
  const tracks = [
    {
      title: "Aaj Ki Raat - Stree2",
      image: "https://i.scdn.co/image/ab67616d0000b2735e16168f7e8ff4fb8aace6cf",
      audioSrc: "https://p.scdn.co/mp3-preview/0c8d73b496ceccd574081fe7c82b56d1339e89d6?cid=d70d86f359464fa7813434cedffcc29e"
    },
    {
      title: "Sajni - Laapataa Ladies",
      image: "https://i.scdn.co/image/ab67616d0000b273f68efc7b536d5bfee4cf24ff",
      audioSrc: "https://p.scdn.co/mp3-preview/74556daea80817d8e2c167adc1d69ad030090846?cid=d70d86f359464fa7813434cedffcc29e"
    },
    {
      title: "O Maahi - Dunki",
      image: "https://i.scdn.co/image/ab67616d0000b273ab1e3b16de1c7ec009880e97",
      audioSrc: "https://p.scdn.co/mp3-preview/e0e74d21c75bb154407b8365e8df62f656a534d6?cid=d70d86f359464fa7813434cedffcc29e"
    }
  ];
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
          <motion.div whileTap={{scale:0.9}} className='w-3/4 h-2/4 rounded-md bg-cyan-500 flex flex-row'>
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
          </motion.div>
          </div>
          <div className='-ml-48 container h-4/5 w-full rounded-lg bg-cyan-500 flex flex-col gap-3'>
              <div className='p-3 flex flex-row gap-2'>
                <h1 className='text-xl font-bold text-black'>Top</h1>
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
            
      {tracks.map((track, index) => (
        <div key={index} className='bg-slate-50 p-3 rounded-2xl border w-4/5 h-1/5 flex flex-row gap-2 items-center justify-between'>
          <img src={track.image} alt="Music Icon" className="h-full w-1/4 z-10" />
          <h1 className='text'>{track.title}</h1>
          <AiFillHeart className='text-red-600 text-xl' />
          <button onClick={() => handlePlayAudio(index)}>
            {playingTracks[index] ? (
              <AiFillPauseCircle className='text-fuchsia-500 text-2xl' />
            ) : (
              <AiFillPlayCircle className='text-fuchsia-500 text-2xl' />
            )}
          </button>
          <audio ref={audioRefs[index]} src={track.audioSrc}></audio>
        </div>
      ))}
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
          <motion.div whileHover={{scale:0.9}} onClick={()=>{navigate("/songs",{state:{keyword:"Top 20 English Songs"}})}} className='rounded-xl w-full h-full container bg-cyan-500 flex flex-col  items-center'>
              <div className='h-full w-full flex flex-row justify-center'>
                <AiFillStar className='mt-7 text-white text-5xl'></AiFillStar>
                <img src="https://i.ytimg.com/vi/3C_bN5Gr6S0/maxresdefault.jpg" alt="Music Icon" className="mt-10 h-1/2 w-1/3 z-10"/>
                <AiFillPlayCircle className='mt-3 ml-10 text-white text-3xl'></AiFillPlayCircle>
              </div>
              <span className='-mt-12 text-xl text-white font-semibold'>Top 20 English Song</span>
          </motion.div>
          <motion.div whileHover={{scale:0.9}} onClick={()=>{navigate("/songs",{state:{keyword:"Top 20 Hindi Songs"}})}} className='rounded-xl w-full h-full container bg-cyan-500 flex flex-col justify-center items-center'>
              <div className='h-full w-full flex flex-row justify-center'>
                <AiFillStar className='mt-7 text-white text-5xl'></AiFillStar>
                <img src="https://i.ytimg.com/vi/DuwzigZO2Rg/maxresdefault.jpg" alt="Music Icon" className="mt-10 h-1/2 w-1/3 z-10"/>
                <AiFillPlayCircle className='mt-3 ml-10 text-white text-3xl'></AiFillPlayCircle>
              </div>
              <span className='-mt-12 text-xl text-white font-semibold'>Top 20 Hindi Songs</span>
          </motion.div>
          <motion.div whileHover={{scale:0.9}} onClick={()=>{navigate("/songs",{state:{keyword:"Top 20 Punjabi Songs"}})}}className='rounded-xl w-full  h-full container bg-fuchsia-500 flex flex-col justify-center items-center'>
              <div className='h-full w-full flex flex-row justify-center'>
                <AiFillStar className='mt-7 text-white text-5xl'></AiFillStar>
                <img src="https://i.scdn.co/image/ab67616d0000b2737ef09f5c235fc74a1b200858" alt="Music Icon" className="mt-10 h-1/2 w-1/3 z-10"/>
                <AiFillPlayCircle className='mt-3 ml-10 text-white text-3xl'></AiFillPlayCircle>
              </div>
              <span className='-mt-12 text-xl text-white font-semibold'>Top 20 Punjabi Songs</span>
          </motion.div>
          </div>
        </div>
    </div>
  )
}

export default Landing