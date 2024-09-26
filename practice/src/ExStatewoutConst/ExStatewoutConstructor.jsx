import React, { Component } from 'react'

export default class ExStatewoutConstructor extends Component {
    state={name:'Js',library:'React'}
handleclick(){
this.setState({name:'Javascript',library:'ReactJs'})
}
  render() {
    return (
      <div>
        <h3>See Change happen: {this.state.name}</h3>
        <h3>See Change happen: {this.state.library}</h3>

        <button onClick={()=>this.handleclick()}>Click me</button>
      </div>
    )
  }
}





/*
JSX is not a valid JavaScript code but to make the developer’s life easier BABEL takes all the responsibility to convert JSX into valid JavaScript code and allow the developers to write code in HTML-looking syntax
*/