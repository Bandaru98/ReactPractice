import React from 'react'
import CompC from './CompC'

const CompB = (props) => {
    console.log("B : ",props);
    
  return (
    <div>
      <CompC cn={props.cn}/>
    </div>
  )
}

export default CompB
