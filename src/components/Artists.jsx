import React,{useState,useEffect} from 'react'
import Navbar from './Navbar'
import Search from './Search'
import { AiFillStar,AiFillPlayCircle } from 'react-icons/ai'
import { FiMinus,FiActivity } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"

function Artists() {
  const[keyword,setKeyword]=useState("")
  const navigate=useNavigate();
  const images = ["https://images.indianexpress.com/2017/12/diljit-dosanjh-7591.jpg",
    "https://wallpaperaccess.com/full/1280821.jpg", 
    "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d3/08/bc/d308bc6a-20e1-6532-d933-35d1b429210e/5054197755538.jpg/1200x1200bf-60.jpg",
    "https://cdn.siasat.com/wp-content/uploads/2021/09/jubin-nautiyals.jpg", "https://i.dawn.com/large/2019/04/5caaf0059ef6a.png",
    "https://images.tv9marathi.com/wp-content/uploads/2022/11/22132514/Shreya-Ghoshal.jpg","https://www.radioandmusic.com/sites/www.radioandmusic.com/files/images/entertainment/2016/11/04/Ankit-Tiwari-sat.jpg",
    "https://wallpaperaccess.com/full/2781225.jpg"
  ]
  return (
    <div className='flex flex-row h-screen w-screen'>
        <div className='w-1/6 h-screen fixed'>
          <Navbar/>
        </div>
        <div className='ml-72 w-5/6 h-full flex flex-col'>
            <div className='w-full h-1/3'>
                <Search/>
            </div>
            <div className='-mt-32 w-full h-full'>
            
                <div className='ms-10 mt-5 flex flex-row gap-2'>
                  <h1 className='font-bold text-xl text-black'>Best</h1>
                  <h1 className='font-bold text-xl text-fuchsia-500'>Artists</h1>
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
                  {["Diljit Dosanjh","Arjit","Karan Aujla","Jubin Nautiyal","Atif Aslam","Shreya Goshal","Ankit Tiwari","Sonu Nigam"].map((element,index)=>(
                    <div key={index} onClick={()=>{
                      setKeyword(element)
                      navigate("/songs",{state:{keyword:element}});
                    }} className='container  h-1/3 w-1/5'>
                        <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}} className='rounded-xl w-full  h-full container bg-fuchsia-500 flex flex-col justify-center items-center'>
                            <div className='h-full w-full flex flex-row justify-center'>
                                <AiFillStar className='mt-7 text-white text-xl'></AiFillStar>
                                <img src={images[index]} alt="Music Icon" className="ml-5 mt-3 rounded-xl h-1/2 w-1/3 z-10"/>
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