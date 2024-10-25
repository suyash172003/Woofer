import React, { useEffect, useState } from 'react';
import { AiOutlineSearch, AiFillStar, AiFillPlayCircle } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

function Searched() {
  const location = useLocation();
  const initialKeyword = location.state?.keyword || '';
  const [keyword, setKeyword] = useState(initialKeyword);
  const [track, setTrack] = useState([]);

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
    <div className='w-screen h-screen flex flex-row'>
      <div className='w-1/6 h-screen'>
        <Navbar />
      </div>
      <div className="p-5 w-full h-full flex flex-col gap-4">
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
            {track.map((element, index) => (
              <div key={index} className='container h-1/3 w-1/5'>
                <div className='rounded-xl w-full h-full container bg-fuchsia-500 flex flex-col justify-center items-center'>
                  <div className='h-full w-full flex flex-row justify-center'>
                    <AiFillStar className='mt-7 text-white text-xl' />
                    <img src={element.album.images[0].url} alt="Music Icon" className="ml-5 mt-3 rounded-xl h-1/2 w-1/3 z-10" />
                    <AiFillPlayCircle className='mt-3 ml-10 text-white text-xl' />
                  </div>
                  <span className='-mt-20 text-white font-extralight'>{element.name}</span>
                  <audio className="h-5 w-52 text-black" src={element.preview_url} controls={true}></audio>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searched;
