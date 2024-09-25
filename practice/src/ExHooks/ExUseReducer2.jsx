//Object using here 

import React, { useReducer } from 'react'

const ExUseReducer2 = () => {
    const reducerfunction = (currentstate, action) => {
        console.log(action);

        switch (action.type) {

            case 'Increment':
                return currentstate + action.payload

            case 'Decrement':
                if (currentstate > 1) {
                    return currentstate - action.payload
                }

            case 'Reset':
                return currentstate = action.payload
            default:
                return currentstate
        }
    }
    const [state, dispatch] = useReducer(reducerfunction, 0)
    return (
        <div>
            <h2>Counter: {state}</h2>
            <button onClick={() => dispatch({ type: 'Decrement', payload: 1 })}>Previous</button>
            <button onClick={() => dispatch({ type: 'Increment', payload: 5 })}>Next</button>
            <button onClick={() => dispatch({ type: 'Reset', payload: 0 })}>Reset</button>

        </div>
    )
}

export default ExUseReducer2