import React, { useEffect, useReducer } from 'react'

const UseReducer = () => {
//     const reducer=(currentState,action)=>{
// switch(action){
// case 'Increment':return currentState+1
// case 'Decrement':return currentState-1
// case 'Reset':return 0
// }
    // }
    // const [count,dispatch]=useReducer(reducer,0)

// method2
const reducerfun=(currsentState,action)=>{
switch(action.type){
    case 'Positive':return currsentState+action.payload
    case 'Negative':return currsentState-action.payload
    case 'Reset':return 0
}
}
const [state,dispatch]=useReducer(reducerfun,0)
  return (
    // <div className='container'>
    //   <h2>Count:{count}</h2>
    //   <button className='btn btn-primary' onClick={()=>dispatch('Increment')}>+</button>
    //   <button className='btn btn-primary ms-2' onClick={()=>dispatch('Decrement')}>-</button>
    //   <button className='btn btn-primary ms-2' onClick={()=>dispatch('Reset')}>0</button>
    // </div>

    

    <div className="container"> 
        <h2>State:{state}</h2>
        <button className='btn btn-primary' onClick={()=>dispatch({type:'Positive',payload:5})}>+</button>
        <button className='btn btn-primary ms-2'onClick={()=>dispatch({type:'Negative',payload:5})}>-</button>
        <button className='btn btn-primary ms-2'onClick={()=>dispatch({type:'Reset',payload:5})}>0</button>
    </div>
  )
}

export default UseReducer



