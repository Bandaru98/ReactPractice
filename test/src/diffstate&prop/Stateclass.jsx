import React, { Component } from 'react'

export default class Stateclass extends Component {
    constructor() {
        super()
        this.state = {
            car: 'nano',
            bike: 'bullet'
        }
    }
    handlename() {
        this.setState({ car: 'sumo' })
        this.setState({ bike: 'tvs' })

    }
    render() {
        return (
            <div>
                <h1>{this.state.car}</h1>
                <h1>{this.state.bike}</h1>

                <button onClick={() => this.handlename()}>Change Names</button>
            </div>
        )
    }
}
