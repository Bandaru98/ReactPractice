import React from 'react'
import { Routes,Route} from 'react-router-dom'
import Home from './Home'
import Contactus from './Contactus'
import Popmessage from './Popmessage/Popmessage'


function Routing() {
  return (
   <>
   <Routes>
    <Route path="/home" element={<Home/>}/>
    <Route path="/contactus" element={<Contactus/>}/>
 <Route path="/popmessage" element={<Popmessage/>}/>



    
   </Routes>
   </>
  )
}

export default Routing

