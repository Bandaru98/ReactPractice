import React, { useEffect, useState } from 'react'
import Props2 from './Props2'

const Props1=() =>{
    //prop ex
    const obj = {
        abc: 'kadapa',
        state: 'Ap',
        special: {
            food: 'biryani',
            sys:'hp'
        }
    }
    // example state
    const [state, setState] = useState(0)
    const handleplus = () => {
        setState(state + 1)
    }
    const handlesubstract = () => {
        setState(state - 1)
    }
    const handlereset = () => {
        setState(0)
    }
    //fetch
    const [inistate,inisetState]=useState([])
    useEffect(()=>{
        getdata()
    },[])
    const getdata=async()=>{
        let data=await fetch('https://jsonplaceholder.typicode.com/users')
        let res=await data.json()
        console.log(res.data);
        inisetState(res)
    }


    return (
        <div>
        
            <button className='btn btn-primary' onClick={handleplus}>+</button>
            <button className='btn btn-primary ms-2' onClick={handlesubstract}>-</button>
            <button className='btn btn-primary ms-2' onClick={handlereset}>0</button>

            <Props2 objdata={obj} statevariable={state} course="FrontEnd" inistate={inistate}/>
           
        </div>
    )
}

export default Props1
