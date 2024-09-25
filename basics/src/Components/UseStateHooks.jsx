import React, { useState } from 'react'

const UseStateHooks = () => {
    let [counter, setCounter] = useState(0)

    const handleIncrement = () => {
        console.log('handleIncrement button clicked');
        setCounter(counter + 1)
    }
    const handleDecrement = () => {
        console.log('handleDecrement button clicked');
        setCounter(counter - 1)
    }
    const handleReset = () => {
        console.log('handleReset button clicked');
        setCounter(counter = 0)
    }
    const handleDisplay = () => {
        console.log('handleDisplay button clicked');
        if (counter > 0) {
            setCounter(counter - 1)
        } else {
            setCounter(counter = 0)
        }
    }

    return (
        <div>

            <h1>Use State Hook</h1>
            <h2>{counter}</h2>
            <button className="btn btn-primary m-2" onClick={handleIncrement}>Increment</button>
            <button className="btn btn-primary m-2" onClick={handleDecrement}>Decrement</button>
            <button className="btn btn-primary m-2" onClick={handleReset}>Reset</button>
            <button className="btn btn-primary m-2" onClick={handleDisplay}>Display +ve</button>

        </div>
    )
}

export default UseStateHooks
