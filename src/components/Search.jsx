import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
function Search() {
  const[keyword,setKeyword]= useState("")
  const navigate = useNavigate();
  const fetchTrack=async()=>{
    if(keyword.trim())
        navigate('/searched', { state: { keyword } });
  }
  useEffect(()=>{
    fetchTrack()
  },[]);
  
  return (
    
    <div className='w-full h-full'>
        <div className="p-5 w-full h-full flex flex-row gap-4">
           <div className='border-2 h-8 w-3/4 rounded-2xl flex justify-between items-center'>
           <input 
              type='text' 
              value={keyword} 
              onChange={(e) => setKeyword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && fetchTrack()}
              placeholder="Search albums, artists, songs..."
              className="ms-2 flex-grow outline-none"
            />
            <AiOutlineSearch onClick={fetchTrack} className='mr-3 cursor-pointer' />
            </div>
            <div className='container w-1/5 h-1/4 flex flex-row gap-2'>
                <button className='w-full h-full rounded-xl bg-slate-50'>
                    <h1 className='text-black'>Login</h1>
                </button>
                <button className='w-full h-full rounded-xl bg-cyan-500'>
                    <h1 className='text-white'>Sign UP</h1>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Search