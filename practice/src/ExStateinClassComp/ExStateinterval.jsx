import React, { Component } from 'react'
  
class ExStateinterval extends Component { 
  constructor(props){ 
    super(props) 
    this.state = {Number : 0} 
    this.makeTimer() 
  } 
  
  makeTimer(){ 
    setInterval(() => { 
      let rand = Math.floor(Math.random() * 10) + 1 
        this.setState({number: rand}) 
    }, 1000) 
  } 
  render(){ 
    return ( 
      <div> 
        <h1> 
          Random Number :  
          {this.state.number} 
        </h1> 
      </div> 
    ) 
  } 
} 
  
export default ExStateinterval