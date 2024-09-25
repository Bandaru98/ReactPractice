import React, { useReducer } from 'react'

function UseReducerHook() {
    const reducer = (currentState, action) => {
        // console.log("currentState", currentState);
        // console.log("action", action);
        
        //------ Method-1: Passing only Type

        switch (action) {
            case 'Increment': return currentState + 1;
            case 'Decrement': return currentState - 1;
            case 'Reset': return 0
        }
    }
    const [state, dispatch] = useReducer(reducer, 0)

    //------Method-2:Passing both Type and Payload

    //     switch (action.type) {
    //         case 'Positive': return currentState + action.payload
    //         case 'Negative': return currentState - action.payload
    //         case 'Reset': return 0
    //         default: return currentState;
    //     }
    // }

    // const [count, dispatch] = useReducer(reducer, 0)

    return (
        <>
            <h2>Use Reducehook</h2>
            <h3>Counter:{state}</h3>
            <button className='btn btn-primary' onClick={() => dispatch('Increment')}>Increment</button>
            <button className='btn btn-primary ms-2' onClick={() => dispatch('Decrement')}>Decrement</button>
            <button className='btn btn-primary ms-2' onClick={() => dispatch('Reset')}>Reset</button>

            {/* Method-2 */}
            {/* <h2>Use Reducehook</h2>
            <h3>Counter:{count}</h3>
            <button className='btn btn-primary' onClick={() => dispatch({ type: 'Positive', payload: 5 })}>Positive</button>
            <button className='btn btn-primary ms-2' onClick={() => dispatch({ type: 'Negative', payload: 1 })}>Negative</button>
            <button className='btn btn-primary ms-2' onClick={() => dispatch({ type: 'Reset', payload: 0 })}>Reset</button> */}
        </>
    )
}
export default UseReducerHook


//---------------------------

// // Use reducer hook is same as useState hook, Which is used to update the state in functional component.
// BUt when it comes to use state it will handle more easier ste but useReducr is used to handle more complex state. (User Auth)

// /*
//     Synatx:
//     const reducerFunction = (currentState, action)=>{}

//     const [State, dispatch] = useReducer(reducerFunction, initialStateValue);

//     currentState = AT present what value is stored in state that is current state.
//     Action = > Action will get value from dispatch => You will be getting type and payload as an value for ACtion.
//     Type => What action we are performing that is Type. (Type of Action).
//     Payload => Based on type if we want specific value that will be payload.
//     State => It is an variable that holds the value.
//     Dispatch => When any action triggers we will dispatch type and payload to reducer function.
//     reducerFunction=> Its JS function which will be knowing "what to do".
//     initialStateValue => 0,[],{},null,undefined.
//     */