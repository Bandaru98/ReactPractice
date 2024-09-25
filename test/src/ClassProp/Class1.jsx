import React, { Component } from 'react'
import Class2 from './Class2'

export default class Class1 extends Component {
    classobj = {
        num1: 100,
        num2: 200,
        marks: 50,
        marks: 70,
        percentage:'100%'

    }
    
    render() {
        return (
            <div>
                <Class2 city={'Banglore'} classobj={this.classobj} />
            </div>
        )
    }
}
