import React from 'react'

const CompC = (props) => {
    // props = {propsB={'React}}
    console.log("C : ",props);
    
  return (
    <div>
      <h2>Its C Component</h2>
      <h3>Cource Name is {props.cn}</h3>
    </div>
  )
}

export default CompC
