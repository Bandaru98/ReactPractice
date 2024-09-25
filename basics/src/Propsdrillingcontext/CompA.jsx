import React from 'react'
import CompB from './CompB';
export const courseContext = React.createContext();

function CompA() {
  return (
    <div>
           <courseContext.Provider value={"ReactJS"}>
        <CompB />
      </courseContext.Provider>
    </div>
  )
}

export default CompA




  
