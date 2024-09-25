import React from 'react'
import CompBB from './CompBB'


export const cn=React.createContext()

const CompAA = () => {

  return (
    <div>
      <cn.Provider value = {'React'}>
      <CompBB/>
      </cn.Provider>
    </div>
  )
}

export default CompAA
