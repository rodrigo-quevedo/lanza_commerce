import {Routes, Route } from 'react-router'

import Home from './pages/Home'
import MainLayout from './layouts/Main/MainLayout'
import { useState } from 'react'


function App() {
    const [isAuth, setIsAuth] = useState<boolean>(false)

  return (
    <Routes>
        
        <Route element={<MainLayout isAuth={isAuth} setIsAuth={setIsAuth}/>}>
            <Route index element={<Home/>}/>
        </Route>


    </Routes>
  )
}

export default App
