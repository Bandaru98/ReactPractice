import React, { Component } from 'react'
class ExStateimg extends Component{
  constructor(props){ 
    super(props) 
     
    // Initializing states
    this.state = {height:null, width:null}
     
    // Bind context of 'this'
    this.handleZoomIn = this.handleZoomIn.bind(this)
    this.handleZoomOut = this.handleZoomOut.bind(this)
     
    // Create reference of DOM object
    this.imgRef = React.createRef()
  } 
 
  componentDidMount(){
    // Saving initial dimension of image as class properties
    this.initialHeight = this.imgRef.current.clientHeight
    this.initialWidth = this.imgRef.current.clientWidth
  }
 
  // Event handler callback for zoom in
  handleZoomIn(){
   
    // Fetching current height and width
    const height = this.imgRef.current.clientHeight
    const width = this.imgRef.current.clientWidth
     
    // Increase dimension(Zooming)
    this.setState({
      height : height + 10,
      width : width + 10,
    })  
  }
 
  // Event handler callback zoom out
  handleZoomOut(){
   
    // Assigning original height and width
    this.setState({
      height : this.initialHeight,
      width : this.initialWidth,
    })
  }
 
  render(){
    // Assign current height and width to the image
    const imgStyle = { height : this.state.height, width: this.state.width}
    return( 
      <div>
        <h2>GeeksforGeeks</h2>
        {/* Assign reference to DOM element     */}
        <img style={imgStyle} ref={this.imgRef} src=
'https://media.geeksforgeeks.org/wp-content/uploads/20200923125643/download.png' alt='gfg' />
        <div>
          <button onClick={this.handleZoomIn}>Zoom In</button>
          <button onClick={this.handleZoomOut}>Zoom Out</button>
        </div>
      </div>    
    )  
  } 
}
export default ExStateimg