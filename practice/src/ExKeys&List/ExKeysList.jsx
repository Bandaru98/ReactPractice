import React from 'react'

const ExKeysList = () => {
    const array=[1,2,3,4,5]
    const arr=[1,2,3,4,5,60]

  return (
    <div>
      {array.map((n)=>(
        <li key={n.toString()}>{n}</li>
      ))}
      {arr.map((n,index)=>(
        <li key={index}>{n}</li>
      ))}
    </div>
  )
}

export default ExKeysList
