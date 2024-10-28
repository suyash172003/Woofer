import React,{useState,useEffect} from 'react'
import Navbar from './Navbar'
import Search from './Search'
import { AiFillStar,AiFillPlayCircle } from 'react-icons/ai'
import { FiMinus,FiActivity } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import {motion} from "framer-motion"
function Artists() {
  const[keyword,setKeyword]=useState("")
  const navigate=useNavigate();
  const images = ["https://1.bp.blogspot.com/-b6D8QPLFeQY/XUbTmdUJ_iI/AAAAAAAAA34/A2zhUn_fimcF7MO_ggUAEqvu0HyFgk3FgCLcBGAs/s1600/Naa%2Bsongs%2BEnglish.jpg",
    "https://www.helios7.com/storage/2020/07/hindi-songs.jpg",
    "https://c.saavncdn.com/443/Bhojpuri-New-Song-Bhojpuri-2022-20220620130326-500x500.jpg",
    "https://c.saavncdn.com/editorial/LatestPunjabiHits_20230411064330_500x500.jpg",
    "https://yt3.ggpht.com/a/AATXAJzuS9yNVlYGOAp2yuYwlswKeQ6-IFQoxPTXILOJ=s900-c-k-c0xffffffff-no-rj-mo",
    "https://i.ytimg.com/vi/HbL6YTqtUpI/maxresdefault.jpg"
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
                  <h1 className='font-bold text-xl text-black'>Best</h1>
                  <h1 className='font-bold text-xl text-fuchsia-500'>Albums</h1>
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
               <div className='mt-5 ms-10 h-full w-full flex flex-wrap gap-8'>
                  {["English Songs","Hindi Songs","Bhojpuri Songs","Punjabi Songs","Haryanvi Songs","South Songs"].map((element,index)=>(
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