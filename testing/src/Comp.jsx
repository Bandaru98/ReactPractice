import React, { useEffect, useState } from 'react'

function Comp() {
    const [state,setState]=useState(false)

useEffect(()=>{
    const savedMode=localStorage.getItem('darkmode')==='true'
    setState(savedMode)
})
const handletoggle=()=>{
    setState((prevmode)=>{
        const newmode=!prevmode
        localStorage.setItem('darkmode',newmode)
        return(newmode)
    })
}
const backgroundColorClass = state ? "dark-mode" : "light-mode";
  return (
    <div className={`app-container ${backgroundColorClass}`}>

      {/* <button className='btn btn-success' onClick={handleChange}>
        Toggle
      </button> */}
    </div>
  )
}

export default Comp
