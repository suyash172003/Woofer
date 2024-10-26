import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Albums from './components/Albums'
import Artists from './components/Artists'
import Songs from './components/Songs'
import Searched from './components/Searched'
import Mood from './components/Mood'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/Songs' element={<Songs/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Mood' element={<Mood/>}></Route>
        <Route path='/Albums' element={<Albums/>}></Route>
        <Route path='/Artists' element={<Artists/>}></Route>
        <Route path='/Searched' element={<Searched/>}></Route>
      </Routes>
    </Router>
  )
}

export default App