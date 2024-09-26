import React, { Component } from 'react'

export default class ExStateInClass extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            ChangeNums: 0,
            Incfive: 0,
            isToggleOn: "On",
            color: 'green',
        }
    }
    handleminus = () => {
        this.setState({ ChangeNums: this.state.ChangeNums - 1 })
    }
    handleplus = () => {
        this.setState({ ChangeNums: this.state.ChangeNums + 1 })
    }

    //------------- Incfive: 0------------
    Dec5 = () => {
        if (this.state.Incfive > 0) {
            this.setState({ Incfive: this.state.Incfive - 5 })
        }
    }
    Inc5 = () => {
        this.setState({ Incfive: this.state.Incfive + 5 })
    }
    Res = () => {
        this.setState({ Incfive: this.state.Incfive = 0 })
    }
    //------------IstoggleOn-------------
    handleclick = () => {
        // this.setState({ isToggleOn: this.state.isToggleOn === 'On' ? 'Off' : 'On' })

        if (this.state.isToggleOn === 'On') {
            this.setState({ isToggleOn: this.state.isToggleOn = 'Off' })
            this.setState({ color: this.state.color = 'red' })
        } else {
            this.setState({ isToggleOn: this.state.isToggleOn = 'On' })
            this.setState({ color: this.state.color = 'green' })

        }
    }

    render() {
        return (
            <div>
                <h3>{this.state.ChangeNums}</h3>
                <button className='btn btn-outline-success' onClick={this.handleplus}>Increment</button>
                <button className='btn btn-outline-success' onClick={this.handleminus}>Decrement</button>
                {/*  Incfive: 0------------ */}
                <h3>{this.state.Incfive}</h3>
                <button className='btn btn-outline-warning' onClick={this.Dec5}>Dec5</button>
                <button className='btn btn-outline-warning' onClick={this.Inc5}>Inc5</button>
                <button className='btn btn-outline-warning' onClick={this.Res}>Reset</button>

                {/* IsToggleon--------- */}
                <h2>IsTogglepoint:
                    <span style={{ backgroundColor: this.state.color, border: '1px solid' }}> {this.state.isToggleOn}</span>
                </h2>
                <button onClick={this.handleclick}>Toggle</button>


                
            </div>
        )
    }
}
