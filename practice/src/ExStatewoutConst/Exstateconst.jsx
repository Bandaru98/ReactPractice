import React, { Component } from 'react'
 
class Exstateconst extends Component {
  static defaultProps = {
    courseContent : [
      'JSX', 'React Props', 'React State', 
      'React Lifecycle Methods', 'React Event Handlers',
      'React Router', 'React Hooks', 'Readux',
      'React Context'
    ]
  }
  // The class property proposal
  // The state initialization without 
  // constructor class
  state = {msg : 'React Course', content:''}
 
  renderContent(){
    return (
      <ul>
        {this.props.courseContent.map(content => (
          <li>{content}</li>
        ))}
      </ul>
    ) 
  }
  handleClick(){
    //changing state
    this.setState({
      msg : 'Course Content',
      content : this.renderContent()
    })
  }  
  render(){
    return (
      <div>
        <h2>Message :</h2>
<p>{this.state.msg}</p>
 
<p>{this.state.content}</p>
        {/* set click handler */}
        <button onClick={() => this.handleClick()}>
          Click here to know contents!
        </button>
      </div>
    )
  }
}
 
export default Exstateconst