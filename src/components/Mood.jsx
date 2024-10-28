import React,{useState,useEffect} from 'react'
import Navbar from './Navbar'
import Search from './Search'
import { AiFillStar,AiFillPlayCircle } from 'react-icons/ai'
import { FiActivity,FiMinus } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import {motion} from "framer-motion"
function Artists() {
  const[keyword,setKeyword]=useState("")
  const navigate=useNavigate();
  const images = ["https://songswave.com/album-images/vol32/1385/1385516/3256318-big/Party-Hits-On-The-Summer-CD2-cover.jpg",
    "https://i.ytimg.com/vi/R0YF_4qMwhQ/maxresdefault.jpg","https://getwallpapers.com/wallpaper/full/e/0/4/541764.jpg",
    "https://i.scdn.co/image/ab67616d0000b2731a6c0e90f57a3d555d5beba6","https://i.ytimg.com/vi/6_XMLX3d2eg/maxresdefault.jpg","https://i.ytimg.com/vi/y1kvr3gfvBU/maxresdefault.jpg"
  ]
  return (
    <div className='flex flex-row h-screen w-screen overflow-hidden'>
        <div className='w-1/6 h-screen fixed'>
          <Navbar/>
        </div>
        <div className='ml-72 w-5/6 h-full flex flex-col'>
            <div className='w-full h-1/3'>
                <Search/>
            </div>
            <div className='-mt-32 w-full h-full'>
            <div className='ms-10 flex flex-row gap-2'>
                  <h1 className='font-bold text-xl text-black'>On</h1>
                  <h1 className='font-bold text-xl text-fuchsia-500'>Moods</h1>
                </div>
              <div className='ms-10 mt-5 text-cyan-600 flex flex-row items-center opacity-95'>
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
               <div className='ms-10 mt-5  h-full w-full flex flex-wrap gap-8'>
                  {["Party Hits","Romantic Songs","Chill Vibes","Workout Beats","Sad Songs","Rainy Day"].map((element,index)=>(
                    <div key={index} onClick={()=>{
                      setKeyword(element)
                      navigate("/songs",{state:{keyword:element}});
                    }} className='ms-6 container  h-1/3 w-1/4'>
                        <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}} className='rounded-xl w-full  h-full container bg-fuchsia-500 flex flex-col justify-center items-center'>
                            <div className='h-full w-full flex flex-row justify-center'>
                                <AiFillStar className='mt-7 text-white text-xl'></AiFillStar>
                                <img src={images[index]} alt="Music Icon" className="ml-5 mt-3 rounded-xl h-1/2 w-1/3 z-10"/>
                                <AiFillPlayCircle className='mt-3 ml-10 text-white text-xl'></AiFillPlayCircle>
                            </div>
                            <span className='-mt-20 -text-xl text-white font-semibold'>{element}</span>
                            
                        </motion.div>
                    </div>))}
               </div>
            </div>
        </div>
    </div>
  )
}

export default Artists