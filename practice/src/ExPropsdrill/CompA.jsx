import React from 'react'
import CompB from './CompB'

const CompA = (props) => {
console.log("A : ",props);

        
    
  return (
    <div>
      <CompB cn={props.cn}/>
    </div>
  )
}

export default CompA
