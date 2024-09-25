import { Component } from "react";

class StateExample extends Component {
    constructor() {
        super()
        this.state = { count: 0 }
    }
    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 })
    }
    handleDecrement = () => {
        this.setState({ count: this.state.count - 1 })
    }
    handleReset = () => {
        this.setState({ count: 0 })
    }
    handleDisplay = (val) => {
        this.setState((prevState) => ({ count: prevState.count + val }))
    }


    render() {
        return (
            <div>
                <h4 style={{ backgroundColor: "orangered", width: '400px' }}>Example of the Class Component</h4>
                <h2>Count:{this.state.count}</h2>
                <button className="btn btn-primary" onClick={this.handleIncrement}>Increment</button>
                <button className="btn btn-success" onClick={this.handleDecrement}>Decrement</button>
                <button className="btn btn-secondary" onClick={this.handleReset}>Reset</button>
                <button className="btn btn-warning" onClick={() => this.handleDisplay(1)}>Display +Ve</button>
                {/* <button className="btn btn-secondary" onClick={()=>this.handleDisplay(-1)}>Display -Ve </button> */}


            </div>
        )
    }
}
export default StateExample;
