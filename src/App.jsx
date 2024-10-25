import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Genres from './components/Genres'
import Albums from './components/Albums'
import Artists from './components/Artists'
import Songs from './components/Songs'
import Hindi from './components/Hindi'
import English from './components/English'
import Bhojpuri from './components/Bhojpuri'
import New_Songs from './components/New_Songs'
import Arjit from './components/Arjit'
import Searched from './components/Searched'

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/New_Songs' element={<New_Songs/>}></Route>
        <Route path='/Songs' element={<Songs/>}></Route>
        <Route path='/Arjit' element={<Arjit/>}></Route>
        <Route path='/Bhojpuri' element={<Bhojpuri/>}></Route>
        <Route path='/English' element={<English/>}></Route>
        <Route path='/Hindi' element={<Hindi/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Genres' element={<Genres/>}></Route>
        <Route path='/Albums' element={<Albums/>}></Route>
        <Route path='/Artists' element={<Artists/>}></Route>
        <Route path='/Searched' element={<Searched/>}></Route>
      </Routes>
    </Router>
  )
}

export default App