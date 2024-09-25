import React, { useEffect, useState } from 'react'

const ScrollTB = () => {
  const [showbutton, setShowbutton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowbutton(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.addEventListener('scroll', handleScroll)
  })
  return (
    <div>
      {showbutton &&
        (<button className='btn btn-info' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          ScrollTop to Bottom
        </button>)
      }
    </div>
  )
}

export default ScrollTB




//2nd method-----------
// import React, { useEffect, useState } from 'react';

// const ScrollTB = () => {
//     const [showButton, setShowButton] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             // Show the button if the user has scrolled down 100px or more
//             if (window.scrollY > 100) {
//                 setShowButton(true);
//             } else {
//                 setShowButton(false);
//             }
//         };

//         // Attach the event listener to the window
//         window.addEventListener('scroll', handleScroll);

//         // Clean up the event listener on component unmount
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []); // Empty dependency array ensures this effect runs only once after the initial render

//     return (
//         <div>
//             {showButton && (
//                 <button className='btn btn-info' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
//                     Scroll to Top
//                 </button>
//             )}
//         </div>
//     );
// };

// export default ScrollTB;










