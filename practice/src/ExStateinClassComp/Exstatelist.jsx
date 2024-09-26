// // import React, { Component } from 'react'
  
// // class Exstatelist extends Component{ 
// //   constructor(props){ 
// //     super(props) 
  
// //     this.state = { task:'' } 
// //     this.handleChange = this.handleChange.bind(this) 
// //     this.handleSubmit = this.handleSubmit.bind(this) 
// //   } 
  
// //   handleChange(event){ 
// //     this.setState({ 
// //       [event.target.name] : event.target.value 
// //     }) 
// //   } 
  
// //   handleSubmit(event){ 
// //     event.preventDefault() 
// //     this.props.create(this.state) 
// //     this.setState({ task : '' }) 
// //   } 
  
// //   render(){ 
// //     return( 
// //       <form onSubmit={this.handleSubmit}> 
// //         <div> 
// //           <label htmlFor='task'>New Todo</label> 
// //           <input  
// //             name='task'
// //             value={this.state.task} 
// //             onChange={this.handleChange} 
// //           /> 
// //           <button>Add New Todo</button> 
// //         </div> 
// //       </form> 
// //     ) 
// //   } 
// // } 
  
// // export default Exstatelist


// import React, { Component } from 'react'
// import TodoForm from './TodoForm'
  
// class Exstatelist extends Component{ 
//   constructor(props){ 
//     super(props) 
//     this.state = { todos : [] } 
//     this.createTodo = this.createTodo.bind(this) 
//     this.renderTodos = this.renderTodos.bind(this) 
//   } 
  
//   createTodo(todo){ 
//     this.setState({ 
      
//       // Changing state with returning new list of todos 
//       // as a whole not modyfying the old list of todos 
//       todos : [...this.state.todos, todo] 
//     }) 
//   } 
  
  
//   renderTodos(){ 
//     const todos = this.state.todos.map(todo => ( 
//       <li key={todo}> 
//         {todo.task} 
//       </li> 
//     )) 
//     return <ul>{todos}</ul> 
//   } 
  
//   render(){ 
//     return( 
//       <div> 
//         <h1>Todo List</h1> 
//         {this.renderTodos()} 
//         <TodoForm create={this.createTodo}/> 
//       </div> 
//     ) 
//   } 
// } 
  
// export default Exstatelist