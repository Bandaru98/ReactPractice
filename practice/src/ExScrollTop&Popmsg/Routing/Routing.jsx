import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Popup from '../Popup'
import Home from '../Home'

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/popmessage' element={<Popup/>}/>

      </Routes>
    </div>
  )
}

export default Routing
