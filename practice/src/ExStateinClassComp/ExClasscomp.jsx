import { Component } from "react";
class ExClasscomp extends Component {
    constructor(props) {
        super(props)
        console.log(props.str);//props is an object 

    }
    render() {
        return (
            <div>
                <h2>hello</h2>
                <h3>string: {this.props.str}</h3>
                <h3>object: {this.props.obj.name}</h3>
                <h3>array: {this.props.arr[0]}</h3>
            </div>
        )
    }
}
export default ExClasscomp
