import React,{useState,useEffect} from 'react'
import Navbar from './Navbar'
import Search from './Search'
import { AiFillStar,AiFillPlayCircle } from 'react-icons/ai'
import Music from '../assets/Music.png'
import { useNavigate } from 'react-router-dom'
import {motion} from "framer-motion"
function Artists() {
  const[keyword,setKeyword]=useState("")
  const navigate=useNavigate();

  return (
    <div className='flex flex-row h-screen w-screen overflow-hidden'>
        <div className='w-1/6 h-screen fixed'>
          <Navbar/>
        </div>
        <div className='ml-72 w-5/6 h-full flex flex-col'>
            <div className='w-full h-1/3'>
                <Search/>
            </div>
            <div className='-mt-20 w-full h-full'>
               <div className='ms-10 h-full w-full flex flex-wrap gap-8'>
                  {["English Songs","Hindi Songs","Bhojpuri Songs","Punjabi Songs","Haryanvi Songs"].map((element,index)=>(
                    <div key={index} onClick={()=>{
                      setKeyword(element)
                      navigate("/songs",{state:{keyword:element}});
                    }} className='container  h-1/3 w-1/5'>
                        <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}} className='rounded-xl w-full  h-full container bg-fuchsia-500 flex flex-col justify-center items-center'>
                            <div className='h-full w-full flex flex-row justify-center'>
                                <AiFillStar className='mt-7 text-white text-xl'></AiFillStar>
                                <img src={Music} alt="Music Icon" className="ml-5 mt-3 rounded-xl h-1/2 w-1/3 z-10"/>
                                <AiFillPlayCircle className='mt-3 ml-10 text-white text-xl'></AiFillPlayCircle>
                            </div>
                            <span className='-mt-20 -text-xl text-white font-extralight'>{element}</span>
                            
                        </motion.div>
                    </div>))}
               </div>
            </div>
        </div>
    </div>
  )
}

export default Artists