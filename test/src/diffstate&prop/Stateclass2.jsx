import React, { Component } from 'react'

export default class Stateclass2 extends Component {
  constructor() {
    super()
    this.state = {
      fruit: 'Banana',
      sweet: 'keer',
      juice: 'grapes',
      food: 'curdrice'

    }
  }
  handleclick = () => {
    this.setState({ fruit: 'guava' })
    this.setState({ sweet: 'janri' })
    this.setState({ juice: 'fruitsalad' })
    this.setState({ food: 'brinjal' })

  }
  render() {
    return (
      <div>
        <p>{this.state.fruit}</p>
        <p>{this.state.sweet}</p>
        <p>{this.state.juice}</p>
        <p>{this.state.food}</p>

        <button className='btn btn-warning' onClick={() => this.handleclick()}>Click Me</button>
      </div>
    )
  }
}
