import {BrowserRouter, Routes, Route } from 'react-router'
import './App.css'

import Home from './layouts/Home'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
