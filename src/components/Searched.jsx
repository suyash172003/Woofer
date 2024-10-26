import React, { useEffect, useState, useRef } from 'react';
import { AiOutlineSearch, AiFillStar, AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import {motion} from "framer-motion"

function Searched() {
  const location = useLocation();
  const initialKeyword = location.state?.keyword || '';
  const [keyword, setKeyword] = useState(initialKeyword);
  const [playing, setPlaying] = useState(false)
  const [track, setTrack] = useState([]);
  const audioRef= useRef(null)
  
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

  const fetchTrack = async (searchKeyword) => {
    if (!searchKeyword) return;

    try {
      const response = await fetch(`https://v1.nocodeapi.com/lavish/spotify/VgGwAlrpdAzVHKIX/search?q=${searchKeyword}&type=track`);
      const data = await response.json();
      setTrack(data.tracks.items);
      console.log(data.tracks.items);
    } catch (error) {
      console.error("Error fetching track data:", error);
    }
  };

  const handleSearch = () => {
    fetchTrack(keyword);
  };

  useEffect(() => {
    fetchTrack(initialKeyword);
  }, [initialKeyword]);

  return (
    <div className='flex flex-row h-screen w-screen overflow-hidden'>
        <div className='w-1/6 h-screen fixed'>
          <Navbar/>
        </div>
        
      <div className="ml-72 p-5 w-full h-full flex flex-col gap-4">
        <div className='flex flex-row'>
          <div className='border-2 h-8 w-3/4 rounded-2xl flex justify-between items-center'>
            <input 
              type='text' 
              value={keyword} 
              onChange={(e) => setKeyword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Search albums, artists, songs..."
              className="ms-2 flex-grow outline-none"
            />
            <AiOutlineSearch onClick={handleSearch} className='mr-3 cursor-pointer' />
          </div>
          <div className='container w-1/5 h-8 flex flex-row gap-2'>
            <button className='w-full h-full rounded-xl bg-slate-50'>
              <h1 className='text-black'>Login</h1>
            </button>
            <button className='w-full h-full rounded-xl bg-cyan-500'>
              <h1 className='text-white'>Sign UP</h1>
            </button>
          </div>
        </div>
        <div className='w-full h-full'>
          <div className='ms-10 h-full w-full flex flex-wrap gap-8'>
            {track.filter(element=>element.preview_url!=null).map((element, index) => (
              <div key={index} className='container h-1/3 w-1/5'>
                <motion.div whileHover={{scale:1.1}} className='rounded-xl w-full h-full container bg-fuchsia-500 flex flex-col justify-center items-center'>
                  <div className='h-full w-full flex flex-row justify-center'>
                    <AiFillStar className='mt-7 text-white text-xl' />
                    <img src={element.album.images[0].url} alt="Music Icon" className="ml-5 mt-3 rounded-xl h-1/2 w-1/3 z-10" />
                    <AiFillPlayCircle className='mt-3 ml-10 text-white text-xl' />
                  </div>
                  <span className='-mt-20 text-white font-extralight'>{element.name}</span>
                  <button onClick={()=>handlePlayAudio(element.id, element.preview_url)} className='mt-2 p-2 bg-white rounded-full text-fuchsia-500 text-2xl'>{(playing == element.id)?(
                    <AiFillPauseCircle className='text-fuchsia-500 text-2xl'></AiFillPauseCircle>):
                    (<AiFillPlayCircle className='text-fuchsia-500 text-2xl'></AiFillPlayCircle>)}
                  </button>
                  <audio ref={audioRef}></audio>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searched;
