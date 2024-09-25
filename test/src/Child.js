import React, { Component } from 'react'

export default class Child extends Component {
    render() {
        // constructor(props) {
        //     super(props)

        //   }
        //----
        //destructuring 
        const arraylist = this.props.passdata
        return (
            <div>

                {/* <p> {this.props.name}</p>
        <p>{this.props.name1.firstname1}</p>

        {this.props.ary.map((curelement) => (
          <p>{curelement}</p>
        ))} */}

                <table>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>City</th>
                    </tr>
                    {
                        arraylist.map((item) => (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.city}</td>
                            </tr>
                        ))
                    }
                </table>


            </div>
        )
    }
}
