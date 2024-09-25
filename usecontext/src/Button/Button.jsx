import React, {  useContext } from 'react'
import { linkcontext } from '../App'

const Button = () => {
    const {setLinks}=useContext(linkcontext)
    const handlechange=(e)=>{
        setLinks(e.target.value)
    }
    return (
        <div>
            <button onClick={handlechange}>+</button>
            <input type="text" placeholder='onclick' onClick={handlechange} />
            <input type="text" placeholder='onchange' onChange={handlechange} />
        </div>
    )
}

export default Button
