import React from 'react'
import { Routes, Route} from "react-router-dom"
import Diary from './Diary'
import HomePage from './HomePage'
function Pages() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/diary/:date" element={<Diary />} />
    </Routes>
  )
}

export default Pages