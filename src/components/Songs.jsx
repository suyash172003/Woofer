import React, { useEffect, useState, useRef} from 'react'
import Navbar from './Navbar'
import Search from './Search'
import { useLocation } from 'react-router-dom'
import { AiFillPlayCircle,AiFillStar,AiFillPauseCircle } from 'react-icons/ai'
import {motion} from "framer-motion"
function Songs() {
  const [track,setTrack]=useState([])
  const [playing,setPlaying]=useState(false)
  const location=useLocation()
  const audioRef = useRef(null)
  const keyword=location.state.keyword
  const handlePlayAudio=(id,preview_url)=>{
    if (playing === id) {
      audioRef.current.pause();
      setPlaying(null);
    } else {
      audioRef.current.src = preview_url; 
      audioRef.current.play();
      setPlaying(id);
    }
  }
  const fetchTrack=async()=>{
    const response=await fetch(`https://v1.nocodeapi.com/lavish/spotify/VgGwAlrpdAzVHKIX/search?q=${keyword}&type=track`)
    const data=await response.json()
    setTrack(data.tracks.items)
  }
  useEffect(()=>{
    fetchTrack()
  },[]);
  return (
    <div className='flex flex-row h-screen w-screen'>
        <div className='w-1/6 h-screen fixed'>
          <Navbar/>
        </div>
        <div className='ml-72 w-5/6 h-full flex flex-col'>
            <div className='w-full h-1/3'>
                <Search/>
            </div>
            <div className='-mt-20 w-full h-full'>
               <div className='ms-10 h-full w-full flex flex-wrap gap-8'>
                  {track.filter(element=>element.preview_url!=null).map((element,index)=>(
                    <div key={index} className='container  h-1/3 w-1/5'>
                        <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}} className='rounded-xl w-full  h-full container bg-fuchsia-500 flex flex-col justify-center items-center'>
                            <div className='h-full w-full flex flex-row justify-center'>
                                <AiFillStar className='mt-7 text-white text-xl'></AiFillStar>
                                <img src={element.album.images[0].url} alt="Music Icon" className="ml-5 mt-3 rounded-xl h-1/2 w-1/3 z-10"/>
                                <AiFillPlayCircle className='mt-3 ml-10 text-white text-xl'></AiFillPlayCircle>
                            </div>
                            <span className='-mt-20 -text-xl text-white font-extralight'>{element.name}</span>
                            <button onClick={()=>handlePlayAudio(element.id, element.preview_url)} className='mt-2 p-2 bg-white rounded-full text-fuchsia-500 text-2xl'>{(playing == element.id)?(
                                <AiFillPauseCircle className='text-fuchsia-500 text-2xl'></AiFillPauseCircle>):
                                (<AiFillPlayCircle className='text-fuchsia-500 text-2xl'></AiFillPlayCircle>)}
                            </button>
                            <audio ref={audioRef}></audio>  
                        </motion.div>
                    </div>))}
               </div>
            </div>
        </div>
    </div>  )
}

export default Songs