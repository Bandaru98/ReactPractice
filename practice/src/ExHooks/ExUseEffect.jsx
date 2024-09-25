import React, { useEffect, useState } from 'react'

const ExUseEffect = () => {
    const [value, setValue] = useState(0)
    const [pro, setPro] = useState({})

    useEffect(() => {
        getdata()
        // console.log(pro);

    }, [value])

    const getdata = async () => {
        let data = await fetch(`https://fakestoreapi.com/products`)
        let result = await data.json()
        console.log(result);
        setPro(result[value]);
    }

    function Increment() {
        setValue(value + 1)
    }
    function Decrement() {
        if (value > 0) {
            setValue(value - 1)
        }
    }
    return (
        <div>
            <img src={pro.image} alt="img" style={{ height: '150px', width: '150px' }} />
            <h3>{pro.title}</h3>
            <h4>{pro.price}</h4>
            <button onClick={() => Decrement()}>Previous</button>
            <button onClick={() => Increment()}>Next</button>

        </div>
    )
}

export default ExUseEffect
