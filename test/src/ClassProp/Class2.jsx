import React, { Component } from 'react'

export default class Class2 extends Component {
    constructor(props){
        super(props)
    
    }


  render() {
    return (
      <div>
     {this.props.city}
     <h2>{this.props.classobj.num1}</h2>
     <h2>{this.props.classobj.percentage}</h2>

      </div>
    )
  }
}
