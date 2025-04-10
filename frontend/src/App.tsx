import {BrowserRouter, Routes, Route } from 'react-router'

import Home from './pages/Home'
import MainLayout from './layouts/Main/MainLayout'


function App() {

  return (
    <Routes>
        
        <Route element={<MainLayout/>}>
            <Route index element={<Home/>}/>
        </Route>


    </Routes>
  )
}

export default App
