import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import DeliciasGourmet from './views/DeliciasGourmet'

function App() {
  return (
    <Routes>
      <Route path='/' element={<DeliciasGourmet/>}/>
    </Routes>
  )
}

export default App
