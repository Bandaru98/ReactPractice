import React, { Component } from 'react'

export default class ClassCompProp extends Component {
    constructor() {
        super()
    }


    render() {
        // destructure

        const { course, period } = this.props.ClassCompPropobj
        return (
            <div>
                {/* <h2>{this.props.money}</h2> */}
                <h2>{course}</h2>
                <h2>{period}</h2>
            </div>
        )
    }
}
