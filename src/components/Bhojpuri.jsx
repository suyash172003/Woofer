import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Search from './Search'
import { AiFillPlayCircle,AiFillStar } from 'react-icons/ai'

function Bhojpuri() {
  const [track,setTrack]=useState([])
  const fetchTrack=async()=>{A
    const response=await fetch('https://v1.nocodeapi.com/dancho/spotify/duUezEoocvClHaZN/search?q=Bhojpuri&type=track')
    const data=await response.json()
    setTrack(data.tracks.items)
    console.log(data.tracks.items)
  }
  useEffect(()=>{
    fetchTrack()
  },[]);
  return (
    <div className='flex flex-row h-screen w-screen'>
        <div className='w-1/6 h-screen'>
          <Navbar/>
        </div>
        <div className='w-full h-full flex flex-col'>
            <div className='w-full h-1/3'>
                <Search/>
            </div>
            <div className='-mt-20 w-full h-full'>
               <div className='ms-10 h-full w-full flex flex-wrap gap-8'>
                  {track.map((element,index)=>(
                    <div key={index} className='container  h-1/3 w-1/5'>
                        <div className='rounded-xl w-full  h-full container bg-fuchsia-500 flex flex-col justify-center items-center'>
                            <div className='h-full w-full flex flex-row justify-center'>
                                <AiFillStar className='mt-7 text-white text-xl'></AiFillStar>
                                <img src={element.album.images[0].url} alt="Music Icon" className="ml-5 mt-3 rounded-xl h-1/2 w-1/3 z-10"/>
                                <AiFillPlayCircle className='mt-3 ml-10 text-white text-xl'></AiFillPlayCircle>
                            </div>
                            <span className='-mt-20 -text-xl text-white font-extralight'>{element.name}</span>
                            <audio className="h-5 w-52 text-black" src={element.preview_url} controls={true}></audio>
                        </div>
                    </div>))}
               </div>
            </div>
        </div>
    </div>  
    )
}

export default Bhojpuri