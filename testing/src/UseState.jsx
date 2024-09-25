import React, { useState } from 'react'

const UseState = () => {
  const [state, setstate] = useState(0)

  const handlePositive = () => {
    setstate(state + 1)
  }
  const handleNegative = () => {
    setstate(state - 1)
  }
  const handleReset = () => {
    setstate(0)
  }
  const handleInt = () => {
    if (state < 0) {
      setstate(state + 1)
    }
    else {
      setstate(0)
    }
  }
  return (
    <div>
      <h2>UseState</h2>
      <h3>{state}</h3>
      <button className='btn btn-primary' onClick={handlePositive}>positive</button>
      <button className='btn btn-primary ms-1' onClick={handleNegative}>Negative</button>
      <button className='btn btn-primary ms-1' onClick={handleReset}>Reset</button>
      <button className='btn btn-primary ms-1' onClick={handleInt}>Negative</button>

    </div>
  )
}

export default UseState
