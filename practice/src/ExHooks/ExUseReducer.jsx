import React, { useReducer } from 'react'

const ExUseReducer = () => {
    const reducerfunction = (currentstate, action) => {
        console.log(action);
        
        switch (action) {

            case 'Increment':
                return currentstate + 1

            case 'Decrement':
                if (currentstate > 0) {
                    return currentstate - 1
                }

            case 'Reset':
                return currentstate = 0
            default:
                return currentstate
        }
    }
    const [state, dispatch] = useReducer(reducerfunction, 0)
    return (
        <div>
            <h2>Counter: {state}</h2>
            <button onClick={() => dispatch('Decrement')}>Previous</button>
            <button onClick={() => dispatch('Increment')}>Next</button>
            <button onClick={() => dispatch('Reset')}>Reset</button>

        </div>
    )
}

export default ExUseReducer
