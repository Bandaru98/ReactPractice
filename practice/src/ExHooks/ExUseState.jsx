import React, { useState } from 'react'


let fruitarr = ['Grapes', 'Pomegranate', 'Chiku', 'Dragon', 'Pineapple']

const ExUseState = () => {
    // const [state, setState] = useState('')
    const [state1, setState1] = useState(0)

    // function fruit(fvalue) {
    //     setState(fvalue)
    // }

    // function fruit(index) {
    //     setState(fruitarr[index])
    // }

    function fruit() {
        setState1(state1 + 1)
    }

    return (
        // <div>
        //     <h2>FruitNames: {state} </h2>
        //     <button onClick={() => fruit('Orange')}>Orange</button>
        //     <button onClick={() => fruit('Apple')}>Apple</button>
        //     <button onClick={() => fruit('Banana')}>Banana</button>
        //     <button onClick={() => fruit('Guava')}>Guava</button>
        // </div>


        // <div>
        //     <h2>FruitNames: {state} </h2>
        //     <button onClick={() => fruit(0)}>Grapes</button>
        //     <button onClick={() => fruit(1)}>Pomegranate</button>
        //     <button onClick={() => fruit(2)}>Chiku</button>
        //     <button onClick={() => fruit(3)}>Dragon</button>
        //     <button onClick={() => fruit(4)}>Pineapple</button>

        // </div>

        <div>
            <h2>FruitNames: {fruitarr[state1]} </h2>
            <button onClick={() => fruit()}>fruit</button>
        </div>


    )
}

export default ExUseState
