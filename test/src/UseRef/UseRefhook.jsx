import React, { useEffect, useRef } from 'react'


const UseRefhook = () => {
    const userefvar = useRef([])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(userefvar.current.value);
    }
    useEffect(() => {
        userefvar.current.focus()
    })

    return (
        <div>
            <form>
                <input type="text" placeholder='Name' className='form-control m-2' />
                <input type="text" placeholder='last' className='form-control m-2' ref={userefvar} />
                <input type="password" placeholder='password' className='form-control m-2' />
                <button className='btn btn-primary' onClick={handleSubmit}>submit</button>

            </form>
        </div>
    )
}

export default UseRefhook
