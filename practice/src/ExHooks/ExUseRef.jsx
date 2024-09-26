import React, { useRef } from 'react'

const ExUseRef = () => {
    const focuspoint = useRef(null)
    function handler() {
        focuspoint.current.value = 'useRef is a hook that allows to directly create a reference to the DOM element in the functional component'
        focuspoint.current.focus()
    }

    return (
        <div>
            {/* <input type="text" ref={focuspoint} /> */}
            <textarea ref={focuspoint} />
            <button onClick={handler}>Click</button>
        </div>

    )
}

export default ExUseRef
