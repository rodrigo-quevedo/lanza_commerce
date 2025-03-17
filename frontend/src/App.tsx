import {BrowserRouter, Routes, Route } from 'react-router'

import Home from './pages/Home'
import MainLayout from './layouts/MainLayout/MainLayout'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      
      <Route element={<MainLayout/>}>
        <Route index element={<Home/>}/>
      </Route>

        

    </Routes>
  </BrowserRouter>
  )
}

export default App
