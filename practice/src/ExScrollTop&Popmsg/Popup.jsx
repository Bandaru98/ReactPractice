
// 1st method-----------

import React, { useEffect, useState } from 'react'

const Popup = () => {
    const [state, setState] = useState(false)

    useEffect(()=>{
        if (state) {
            const timer=setTimeout(()=>setState(false),3000)
            return ()=>clearTimeout(timer)
         }
    },[state])
    return (
        <div>
            <center>
            <button className='btn btn-info' onClick={()=>setState(true)}>Click here POpupmessage shows</button>
            <h2>{state && <div>Popupmessage</div>}</h2>
            </center>
        </div>
    )
}

export default Popup





// 2nd method-----------


// import React, { useState } from 'react'

// const Popup = () => {
//     const [state, setState] = useState('')

//     const handlebutton = () => {
//         if (state == '') {
//             setState('popupmessage')
//             setTimeout(() => {
//                 setState('')
//             }, 3000)
//         }
//         else {
//             if (state != '') {
//                 setState('')
//             }
//         }
//     }
//     return (
//         <div>
//             <center>
//             <button className='btn btn-info' onClick={handlebutton}>Click here POpupmessage shows</button>
//             <h2>{state}</h2>
//             </center>
//         </div>
//     )
// }

// export default Popup



// 3rd method-----------


// import React, { useState } from 'react'

// const Popup = () => {
//     const [state, setState] = useState('')

//     const handlebutton = () => {
//         setState('Popup message')
//         setTimeout(() => {
//             setState('')
//         }, 2000)

//     }
//     return (
//         <div>
//             <button className='btn btn-info' onClick={handlebutton}>Click here POpupmessage shows</button>
//             <h2>{state}</h2>
//         </div>
//     )
// }

// export default Popup

