import React from 'react'
import {cn} from './CompAA'

const CompCC = () => {
  return (
    <div>
      <cn.Consumer>
       {(value)=><h2>My Cource is {value}</h2>}
      </cn.Consumer>
    </div>
  )
}

export default CompCC
