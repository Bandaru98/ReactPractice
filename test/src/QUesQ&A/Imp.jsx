// 1. What is the starting file of a React Application?
// The starting file of a React application is typically index.js or app.js, located inside the src folder of a React project. 
// This file serves as the entry point for the application, where the root component is rendered into the DOM.

// Here's an example of what index.js might look like:

// javascript
// Copy code
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App'; // Import the main App component
// import './index.css';    // Optional: Global styles for the application

// // Render the App component into the root DOM node
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root') // The ID of the DOM element in the HTML file
// );
// index.html:Located in the public folder,this file contains a single <div> with an ID of root. The entire React app is rendered inside this <div>.
// html
// Copy code
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>React App</title>
// </head>
// <body>
//   <div id="root"></div> <!-- The root element -->
// </body>
// </html>

// 2. Difference between npm and npx?
// npm and npx are both command-line tools that come with Node.js, but they serve different purposes:

// npm (Node Package Manager):

// Purpose: npm is primarily used for managing packages (libraries or modules) in a Node.js environment.
// Functionality:
// Install Packages: Install libraries and dependencies locally or globally.
// Manage Dependencies: Automatically handles dependency versions and updates.
// Scripts: Run scripts defined in package.json.
// Example:
// bash
// Copy code
// npm install react   # Installs React library locally
// npm install -g create-react-app  # Installs create-react-app globally

// npx (Node Package Executor):

// Purpose: npx is used to execute Node packages without having to install them globally.
// Functionality:
// Execute Packages: Run commands from packages without installing them.
// Convenience: Useful for running one-off scripts or commands.
// Example:
// bash
// Copy code
// npx create-react-app my-app  # Creates a new React app without installing create-react-app globally
// Why Use npx?: It allows you to use the latest version of a package directly, avoiding potential issues with global installations.

// 3. What is VDOM?
// VDOM (Virtual DOM) is an abstract representation of the actual DOM. It allows React to optimize UI updates by minimizing 
// direct manipulations of the actual DOM, which can be slow.

// How It Works:

// When the state of a component changes, React creates a virtual representation of the DOM.
// The Virtual DOM is a lightweight copy of the actual DOM.
// React compares the new Virtual DOM with the previous one (a process called reconciliation).
// React determines the minimal set of changes required to update the actual DOM.
// Only those changes are applied to the real DOM, making updates efficient.
// Benefits:

// Performance: Minimizes direct DOM manipulations, reducing performance bottlenecks.
// Declarative UI: React abstracts away the details of DOM updates, allowing developers to focus on how the UI should look.

// 4. What are props?
// Props (short for "properties") are a way to pass data from parent components to child components in React. 
// They are immutable, meaning they cannot be changed by the child component that receives them.

// Usage:

// Props are used to customize or configure child components.
// They allow components to be reusable and modular.
// Props are passed as attributes to a component.
// Example:

// javascript
// Copy code
// function Greeting(props) {
//   return <h1>Hello, {props.name}!</h1>;
// }

// // Using the Greeting component
// <Greeting name="Alice" />
// Explanation: In the example above, the Greeting component receives a name prop and uses it to display a personalized message.

// 4.1. What are keys in Lists?
// Keys are special string attributes you need to include when creating lists of elements in React. They help React identify 
// which items have changed, are added, or are removed.

// Why Keys?:

// They provide a way to give elements a stable identity.
// Keys help optimize rendering performance by allowing React to identify which items have changed.
// Usage:

// javascript
// Copy code
// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) =>
//   <li key={number.toString()}>{number}</li>
// );
// Explanation: In the example above, each list item has a unique key derived from the number itself.

// 5. Write a syntax of class components and explain with props.
// Class components in React are a way to create components using JavaScript ES6 class syntax. They can manage their own state and 
// have lifecycle methods.

// Syntax:

// javascript
// Copy code
// import React, { Component } from 'react';

// class Welcome extends Component {
//   render() {
//     return <h1>Hello, {this.props.name}!</h1>;
//   }
// }

// export default Welcome;
// Explanation:

// class Welcome extends Component: Defines a class component named Welcome that extends React's Component class.
// render(): A method that returns JSX, which describes the component's UI.
// this.props: Accesses the props passed to the component, allowing it to use dynamic data.
// Using the Component:

// javascript
// Copy code
// <Welcome name="Bob" />
// Here, the Welcome component receives the name prop with the value "Bob" and renders "Hello, Bob!".

// 6. What is Life-cycle-methods in ReactJS Class Components?
// Lifecycle methods are hooks that allow developers to run specific code at different stages of a component's existence. 
// React class components have lifecycle methods to control the component's behavior during these stages.

// Lifecycle Phases:

// Mounting: When a component is being inserted into the DOM.
// constructor()
// static getDerivedStateFromProps()
// render()
// componentDidMount()

// Updating: When a component is being re-rendered due to changes in props or state.
// static getDerivedStateFromProps()
// shouldComponentUpdate()
// render()
// getSnapshotBeforeUpdate()
// componentDidUpdate()

// Unmounting: When a component is being removed from the DOM.
// componentWillUnmount()

// Error Handling: When an error occurs during rendering or lifecycle methods.
// static getDerivedStateFromError()
// componentDidCatch()
// Example:

// javascript
// Copy code
// import React, { Component } from 'react';

// class LifecycleDemo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { counter: 0 };
//   }

//   componentDidMount() {
//     console.log('Component did mount!');
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log('Component did update!');
//   }

//   componentWillUnmount() {
//     console.log('Component will unmount!');
//   }

//   render() {
//     return (
//       <div>
//         <h1>Counter: {this.state.counter}</h1>
//         <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>
//           Increment
//         </button>
//       </div>
//     );
//   }
// }

// export default LifecycleDemo;

// 7. In the mounting phase how methods will be executed?
// During the mounting phase, React executes a series of lifecycle methods in the following order:

// constructor(props):

// Initializes the component's state.
// Binds event handlers.
// Called before the component is mounted.
// javascript
// Copy code
// constructor(props) {
//   super(props);
//   this.state = { count: 0 };
// }
// static getDerivedStateFromProps(props, state):

// Invoked right before calling the render() method.
// Allows the component to update its state based on props.
// Rarely used; prefer to manage state in the constructor.
// javascript
// Copy code
// static getDerivedStateFromProps(props, state) {
//   return { count: props.initialCount };
// }
// render():

// Returns the JSX representing the component's UI.
// Pure and side-effect-free.
// javascript
// Copy code
// render() {
//   return <h1>Count: {this.state.count}</h1>;
// }
// componentDidMount():

// Invoked after the component is inserted into the DOM.
// Ideal for fetching data, subscribing to events, or performing other side effects.
// javascript
// Copy code
// componentDidMount() {
//   console.log('Component mounted!');
// }

// 8. Explain about updating phase with example?
// The updating phase occurs when a component's props or state change, causing the component to re-render. Here's a detailed explanation of how this phase works with an example:

// Lifecycle Methods in the Updating Phase:
// static getDerivedStateFromProps(props, state):

// Invoked before rendering when new props or state are received.
// Allows you to update state in response to prop changes.
// Rarely used; prefer using componentDidUpdate() for side effects.
// shouldComponentUpdate(nextProps, nextState):

// Determines whether the component should re-render.
// Returns true or false to indicate whether the update should proceed.
// Useful for performance optimization.
// render():

// Called to update the component's UI based on new state or props.
// getSnapshotBeforeUpdate(prevProps, prevState):

// Called right before the DOM is updated.
// Can capture information (e.g., scroll position) from the DOM.
// The return value is passed to componentDidUpdate().
// componentDidUpdate(prevProps, prevState, snapshot):

// Invoked immediately after the component updates.
// Ideal for performing DOM operations, network requests, or logging.
// Receives snapshot from getSnapshotBeforeUpdate().
// Example:
// Here's an example of a component that demonstrates the updating phase lifecycle methods:

// javascript
// Copy code
// import React, { Component } from 'react';

// class UpdatingDemo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   static getDerivedStateFromProps(nextProps, prevState) {
//     // Update state based on props changes
//     if (nextProps.initialCount !== prevState.count) {
//       return { count: nextProps.initialCount };
//     }
//     return null;
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     // Prevent re-render if count hasn't changed
//     return nextState.count !== this.state.count;
//   }

//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     // Capture information before DOM updates
//     console.log('Previous Count:', prevState.count);
//     return prevState.count;
//   }

//   componentDidUpdate(prevProps, prevState, snapshot) {
//     // Perform operations after the update
//     console.log('Component did update!');
//     console.log('Snapshot (previous count):', snapshot);
//   }

//   increment = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     return (
//       <div>
//         <h1>Count: {this.state.count}</h1>
//         <button onClick={this.increment}>Increment</button>
//       </div>
//     );
//   }
// }

// export default UpdatingDemo;
// Explanation:
// getDerivedStateFromProps(): Updates the state if the initialCount prop changes.
// shouldComponentUpdate(): Determines whether the component should update based on the count change.
// getSnapshotBeforeUpdate(): Captures the previous count value before the DOM update.
// componentDidUpdate(): Logs the snapshot and performs operations after the update.

// 9. What is the use of componentDidUpdate?
// componentDidUpdate(prevProps, prevState, snapshot) is a lifecycle method in React that is called immediately after a component's updates
//  are flushed to the DOM.

// Purpose:

// Perform DOM operations or side effects after updates.
// Compare current props and state with previous ones.
// Execute network requests based on prop changes.
// Use Cases:

// Updating the DOM based on prop changes.
// Re-fetching data when a relevant prop changes.
// Animating DOM elements.
// Example:

// javascript
// Copy code
// componentDidUpdate(prevProps, prevState) {
//   if (this.props.userId !== prevProps.userId) {
//     this.fetchUserData(this.props.userId);
//   }
// }

// fetchUserData(userId) {
//   // Fetch user data based on the updated userId prop
// }

// 10. What are the parameters you expect in componentDidUpdate?
// The componentDidUpdate() method accepts three parameters:

// prevProps: An object containing the component's previous props before the update.
// prevState: An object containing the component's previous state before the update.
// snapshot: The value returned from getSnapshotBeforeUpdate(), if implemented.
// Example:
// javascript
// Copy code
// componentDidUpdate(prevProps, prevState, snapshot) {
//   if (prevProps.value !== this.props.value) {
//     console.log('Value changed from', prevProps.value, 'to', this.props.value);
//   }

//   if (snapshot) {
//     console.log('Snapshot from getSnapshotBeforeUpdate:', snapshot);
//   }
// }

// 11. What are Hooks in ReactJS? Why were hooks introduced although React had Life-cycle in Class components?
// Hooks are functions that allow you to use state and lifecycle features in functional components. They were introduced in React 
// 16.8 to simplify state management and side effects without using class components.

// Why Hooks?:

// Simplicity: Hooks simplify component logic by removing the need for class syntax.
// Reusability: Enable sharing stateful logic between components without HOCs or render props.
// Cleaner Code: Reduce the complexity of managing state and lifecycle methods.
// Common Hooks:

// useState(): Manage local component state.
// useEffect(): Perform side effects like data fetching and subscriptions.
// useContext(): Access React context values.
// useReducer(): Manage complex state logic with reducers.
// useRef(): Create mutable references to DOM elements or variables.
// Example:

// javascript
// Copy code
// import React, { useState, useEffect } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     document.title = `Count: ${count}`;
//   }, [count]);

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

// export default Counter;

// 12. Write a code to Toggle the dark and light theme using useState hook.
// Here's a simple example demonstrating how to toggle between dark and light themes using the useState hook:

// javascript
// Copy code
// import React, { useState } from 'react';

// function ThemeToggle() {
//   const [theme, setTheme] = useState('light');

//   const toggleTheme = () => {
//     setTheme(theme === 'light' ? 'dark' : 'light');
//   };

//   return (
//     <div className={`App ${theme}`}>
//       <h1>{theme === 'light' ? 'Light Theme' : 'Dark Theme'}</h1>
//       <button onClick={toggleTheme}>
//         Toggle Theme
//       </button>

//       {/* Sample styles to demonstrate theme change */}
//       <style jsx>{`
//         .App {
//           background-color: ${theme === 'light' ? '#fff' : '#333'};
//           color: ${theme === 'light' ? '#000' : '#fff'};
//           padding: 20px;
//           transition: background-color 0.3s ease;
//         }
//         button {
//           background-color: ${theme === 'light' ? '#333' : '#fff'};
//           color: ${theme === 'light' ? '#fff' : '#333'};
//           border: none;
//           padding: 10px 20px;
//           cursor: pointer;
//           transition: background-color 0.3s ease;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default ThemeToggle;

// 13. Write a code to demonstrate useState hook.
// Here's an example demonstrating the use of the useState hook in a simple counter application:

// javascript
// Copy code
// import React, { useState } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   );
// }

// export default Counter;

// 14. What is JSX?
// JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within React components.
//  It makes writing UI components more intuitive and expressive by allowing you to combine JavaScript logic with HTML-like syntax.

// Features:

// HTML-like Syntax: Looks like HTML but is written in JavaScript.
// JSX Elements: Can be assigned to variables, passed as props, or returned from functions.
// Expressions: Supports embedding JavaScript expressions within {}.
// Why Use JSX?:

// Readability: Makes code easier to read and write by visually resembling HTML.
// Component Structure: Clearly defines the structure and layout of components.
// Example:

// javascript
// Copy code
// import React from 'react';

// function Welcome(props) {
//   return <h1>Hello, {props.name}!</h1>;
// }

// export default Welcome;
// Explanation: In the example above, JSX is used to create an h1 element with dynamic content ({props.name}).

// 15. What is the use of Render method in React Class component?
// The render() method in a React class component is responsible for returning the JSX that defines the component's UI.

// Key Points:

// Must return valid JSX or null.
// Should be pure and side-effect-free.
// Can contain JavaScript expressions to render dynamic content.
// Example:

// javascript
// Copy code
// class Greeting extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}!</h1>;
//   }
// }
// Explanation: The render() method returns an h1 element with a personalized greeting using the name prop.

// 16. What is state in ReactJS?
// State is an object in React components that holds data that can change over time. It determines the component's behavior 
// and how it renders.

// Key Characteristics:

// Mutable: Can be changed using setState() in class components or useState() in functional components.
// Local: Exists only within the component it is defined in.
// Triggers Re-renders: Changes to state cause the component to re-render.
// Usage:

// javascript
// Copy code
// import React, { Component } from 'react';

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   increment = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     return (
//       <div>
//         <h1>Count: {this.state.count}</h1>
//         <button onClick={this.increment}>Increment</button>
//       </div>
//     );
//   }
// }

// export default Counter;

// 17. Difference between state updating in class component and functional components?
// The main difference between state updating in class components and functional components is the method used to update the state:

// Class Components:

// Method: this.setState() is used to update state.
// Syntax: Takes an object or a function as an argument.
// Merge: setState() merges the new state with the previous state.
// Example:
// javascript
// Copy code
// this.setState({ count: this.state.count + 1 });

// Functional Components:

// Method: useState() hook returns a state variable and a setter function.
// Syntax: Uses the setter function to update the state.
// Overwrite: The setter function replaces the previous state with the new state.
// Example:
// javascript
// Copy code
// const [count, setCount] = useState(0);
// setCount(count + 1);

// 18. What are higher-order components?
// Higher-Order Components (HOCs) are advanced techniques in React for reusing component logic. An HOC is a function that takes a
//  component and returns a new component with additional props or functionality.

// Purpose:

// Reuse logic across multiple components.
// Enhance components with additional behavior.
// Abstract complex logic into reusable functions.
// Common Use Cases:

// Conditional Rendering: Show or hide components based on conditions.
// Data Fetching: Inject data into components via HOCs.
// Authentication: Wrap components with authentication checks.
// Example:

// javascript
// Copy code
// function withLoadingIndicator(WrappedComponent) {
//   return function EnhancedComponent({ isLoading, ...props }) {
//     if (isLoading) {
//       return <div>Loading...</div>;
//     }
//     return <WrappedComponent {...props} />;
//   };
// }

// const EnhancedComponent = withLoadingIndicator(MyComponent);

// 19. Difference between class component and functional components?
// Class components and functional components are two ways to define components in React, each with its own characteristics:

// Aspect	Class Components	Functional Components
// Syntax	Uses ES6 class syntax	Uses function syntax
// State	Managed with this.state and this.setState()	Managed with useState() hook
// Lifecycle Methods	Lifecycle methods like componentDidMount, componentDidUpdate, etc.	useEffect() for managing side effects
// this Keyword	Requires binding methods to this	No this keyword, uses hooks
// Complexity	More complex for simple components	Simpler and easier to read
// Memory Usage	May have a larger memory footprint	Generally lighter due to simpler structure
// React Features	Supports all React features	Supports hooks and most modern React features
// Performance	Potentially less performant for frequent updates	Often more performant with hooks
// Class Components Example:

// javascript
// Copy code
// import React, { Component } from 'react';

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   increment = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     return (
//       <div>
//         <h1>Count: {this.state.count}</h1>
//         <button onClick={this.increment}>Increment</button>
//       </div>
//     );
//   }
// }

// export default Counter;

// Functional Components Example:

// javascript
// Copy code
// import React, { useState } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// }

// export default Counter;

// 20. How to handle Lifecycle methods in Functional components?
// In functional components, lifecycle methods are managed using the useEffect hook. This hook allows you to perform side effects 
// in function components, similar to lifecycle methods in class components.

// useEffect Hook:

// Syntax:

// javascript
// Copy code
// useEffect(() => {
//   // Side effect logic

//   return () => {
//     // Cleanup logic
//   };
// }, [dependencies]);
// Parameters:

// Callback Function: Contains the side effect logic.
// Dependencies Array: Specifies when the effect should run.
// Lifecycle Methods Equivalent:

// componentDidMount: Execute logic when the component mounts.
// componentDidUpdate: Execute logic when dependencies change.
// componentWillUnmount: Execute cleanup logic when the component unmounts.
// Example:

// javascript
// Copy code
// import React, { useState, useEffect } from 'react';

// function Timer() {
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSeconds((prevSeconds) => prevSeconds + 1);
//     }, 1000);

//     return () => {
//       clearInterval(interval); // Cleanup on unmount
//     };
//   }, []); // Empty dependencies array for componentDidMount

//   return <h1>Timer: {seconds}s</h1>;
// }

// export default Timer;

// 21. What happens when we do not pass any dependencies in the useEffect hook? (Explain both when state changes and state does not change)
// When you do not pass any dependencies to the useEffect hook, the effect runs after every render, regardless of whether
//  the component's state or props change.

// No Dependencies:

// javascript
// Copy code
// useEffect(() => {
//   // Effect logic
// });
// Behavior:

// State Changes: The effect runs after every render caused by state changes.
// No State Changes: The effect still runs after every render, even if no state changes occur.
// Example:

// javascript
// Copy code
// import React, { useState, useEffect } from 'react';

// function ExampleComponent() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log('Effect ran');
//   });

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

// export default ExampleComponent;
// Explanation:

// The console.log('Effect ran') statement executes after every render, including the initial render and any subsequent updates.

//-----------------

// 22. How to define global state (variable) in ReactJS?
// In React, you can define global state using Context API or third-party libraries like Redux. These approaches allow you to share state across multiple components without prop drilling.

// 1. Context API:
// Context API: Provides a way to pass data through the component tree without passing props down manually.

// Steps:

// Create a context using React.createContext().
// Wrap the component tree with a Context.Provider.
// Use useContext() to access the context value in child components.
// Example:

// javascript
// Copy code
// import React, { createContext, useState, useContext } from 'react';

// // Create a Context
// const ThemeContext = createContext();

// // Theme Provider Component
// function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState('light');

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// // Child Component
// function ThemeToggler() {
//   const { theme, setTheme } = useContext(ThemeContext);

//   const toggleTheme = () => {
//     setTheme(theme === 'light' ? 'dark' : 'light');
//   };

//   return (
//     <button onClick={toggleTheme}>
//       Current Theme: {theme}
//     </button>
//   );
// }

// // App Component
// function App() {
//   return (
//     <ThemeProvider>
//       <ThemeToggler />
//     </ThemeProvider>
//   );
// }

// export default App;

// 2. Redux:
// Redux: A popular state management library for managing global state in complex applications.

// Steps:

// Define actions and reducers.
// Create a Redux store.
// Wrap the component tree with a Provider.
// Use useSelector() and useDispatch() hooks to interact with the store.
// Example:

// javascript
// Copy code
// import React from 'react';
// import { createStore } from 'redux';
// import { Provider, useSelector, useDispatch } from 'react-redux';

// // Initial State
// const initialState = { count: 0 };

// // Reducer
// function counterReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { count: state.count + 1 };
//     case 'DECREMENT':
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// }

// // Create Redux Store
// const store = createStore(counterReducer);

// // Counter Component
// function Counter() {
//   const count = useSelector((state) => state.count);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
//       <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
//     </div>
//   );
// }

// // App Component
// function App() {
//   return (
//     <Provider store={store}>
//       <Counter />
//     </Provider>
//   );
// }

// export default App;

//-------------------------------------------------------------

// 23. How to prevent multiple state updates in ReactJS?
// To prevent multiple state updates in ReactJS, consider the following strategies:

// Batching State Updates:

// React automatically batches state updates within event handlers.
// Use functional updates to ensure state changes are applied in sequence.
// Example:
// javascript
// Copy code
// setCount((prevCount) => prevCount + 1);
// setCount((prevCount) => prevCount + 1);
// Debouncing:

// Use debouncing to limit the rate of state updates triggered by frequent events.
// Example:
// javascript
// Copy code
// import { useState } from 'react';
// import { debounce } from 'lodash';

// function SearchComponent() {
//   const [query, setQuery] = useState('');

//   const handleSearch = debounce((value) => {
//     // Perform search or API call
//   }, 300);

//   const handleChange = (e) => {
//     setQuery(e.target.value);
//     handleSearch(e.target.value);
//   };

//   return <input type="text" value={query} onChange={handleChange} />;
// }
// Conditional Updates:

// Check conditions before updating the state to avoid unnecessary re-renders.
// Example:
// javascript
// Copy code
// if (newCount !== count) {
//   setCount(newCount);
// }
// Use useReducer() for Complex State Logic:

// Manage complex state transitions using the useReducer() hook.
// Example:
// javascript
// Copy code
// const initialState = { count: 0 };

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + 1 };
//     case 'decrement':
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// }

// function Counter() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <h1>Count: {state.count}</h1>
//       <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
//       <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
//     </div>
//   );
// }
// Optimize with React.memo():

// Use React.memo() to prevent re-renders of functional components if props do not change.

// Example:
// javascript
// Copy code
// const MemoizedComponent = React.memo(MyComponent);

// 24. Explain the useContext hook in ReactJS.
// The useContext hook allows you to access the context value within functional components. It simplifies the process of consuming 
// context values without the need for wrapper components or Consumer components.

// Syntax:

// javascript
// Copy code
// const value = useContext(MyContext);
// Parameters:

// MyContext: The context object created using React.createContext().
// Return Value:

// The current context value for the given context.
// Example:

// javascript
// Copy code
// import React, { createContext, useContext } from 'react';

// // Create a Context
// const UserContext = createContext();

// // User Provider Component
// function UserProvider({ children }) {
//   const user = { name: 'Alice', age: 30 };

//   return (
//     <UserContext.Provider value={user}>
//       {children}
//     </UserContext.Provider>
//   );
// }

// // Child Component
// function UserProfile() {
//   const user = useContext(UserContext);

//   return (
//     <div>
//       <h1>User Profile</h1>
//       <p>Name: {user.name}</p>
//       <p>Age: {user.age}</p>
//     </div>
//   );
// }

// // App Component
// function App() {
//   return (
//     <UserProvider>
//       <UserProfile />
//     </UserProvider>
//   );
// }

// export default App;
// Explanation: In the example above, the UserProfile component accesses the user object from UserContext using the useContext hook,
//  allowing it to display the user's name and age.


// 25. What is lazy loading in ReactJS?
// Lazy loading in ReactJS is a technique that allows you to load components only when they are needed, rather than loading them 
// all at once. This improves the performance and initial load time of your application by reducing the amount of code
//  that needs to be downloaded upfront.

// Purpose:

// Optimize loading performance.
// Reduce initial bundle size.
// Improve user experience by loading components on demand.
// Implementation:

// Use React.lazy() to define lazy-loaded components.
// Use Suspense to wrap lazy-loaded components with a fallback UI.
// Example:

// javascript
// Copy code
// import React, { Suspense, lazy } from 'react';

// // Lazy-loaded Component
// const LazyComponent = lazy(() => import('./LazyComponent'));

// function App() {
//   return (
//     <div>
//       <h1>Welcome to the App</h1>
//       <Suspense fallback={<div>Loading...</div>}>
//         <LazyComponent />
//       </Suspense>
//     </div>
//   );
// }

// export default App;
// Explanation:

// The LazyComponent is loaded only when needed, reducing the initial bundle size.
// The Suspense component provides a fallback UI (e.g., "Loading...") while the lazy component is being loaded.

//-----------------------------------------

// 26. What is a controlled component?
// A controlled component is a React component whose form elements are controlled by the component's state.
//  The value of the input field is driven by the state, making React the single source of truth for the component's data.

// Key Characteristics:

// Input values are controlled via state.
// Changes to input fields are handled through event handlers.
// Offers fine-grained control over form data.
// Example:

// javascript
// Copy code
// import React, { useState } from 'react';

// function ControlledForm() {
//   const [name, setName] = useState('');

//   const handleChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Submitted Name:', name);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" value={name} onChange={handleChange} />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default ControlledForm;
// Explanation:

// The input field's value is bound to the name state.
// The handleChange function updates the state, keeping the input field synchronized with the component's state.

// 27. What is an uncontrolled component?
// An uncontrolled component is a React component whose form elements are not controlled by React state. Instead, 
// the data is handled by the DOM itself, using references to access input values.

// Key Characteristics:

// Input values are managed by the DOM.
// Uses refs to access input values.
// Simpler for quick implementations, but less control over form data.
// Example:

// javascript
// Copy code
// import React, { useRef } from 'react';

// function UncontrolledForm() {
//   const inputRef = useRef(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Submitted Name:', inputRef.current.value);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" ref={inputRef} />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default UncontrolledForm;
// Explanation:

// The input field's value is accessed via the inputRef reference.
// The handleSubmit function retrieves the input value using inputRef.current.value.

// ----------------------

// 28. What is React Hook?
// React Hooks are functions that allow you to use state and other React features in functional components.
// Introduced in React 16.8, hooks enable functional components to manage state, side effects, and more, without the need for class components.

// Common Hooks:

// useState(): Manage state in functional components.
// useEffect(): Handle side effects, similar to lifecycle methods.
// useContext(): Access context values within functional components.
// useReducer(): Manage complex state logic with reducers.
// useRef(): Access and manipulate DOM elements or persist values across renders.
// useMemo(): Optimize performance by memoizing expensive calculations.
// Example:

// javascript
// Copy code
// import React, { useState, useEffect } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     document.title = `Count: ${count}`;
//   }, [count]);

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

// export default Counter;
// Explanation:

// useState(0) initializes the count state with a value of 0.
// useEffect() updates the document title whenever the count changes.
//-----------------------

// 29. Explain the useState hook in ReactJS.
// The useState hook in ReactJS is used to declare state variables in functional components. It provides a way to manage 
// component state and update it in response to user actions or events.

// Syntax:

// javascript
// Copy code
// const [state, setState] = useState(initialValue);
// Parameters:

// initialValue: The initial value of the state variable.
// Return Value:

// An array containing the current state value and a function to update the state.
// Example:

// javascript
// Copy code
// import React, { useState } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// }

// export default Counter;
// Explanation:

// useState(0) initializes the count state with a value of 0.
// setCount(count + 1) updates the count state by incrementing its value.
// 30. How do you update state in functional components?
// In functional components, state is updated using the useState hook, which returns a state variable and a setter function. 
// The setter function is used to update the state with a new value.

// Syntax:

// javascript
// Copy code
// const [state, setState] = useState(initialValue);

// setState(newValue);
// Functional Updates:

// Use a function within the setter to access the current state.
// Example:
// javascript
// Copy code
// setState((prevState) => prevState + 1);
// Example:

// javascript
// Copy code
// import React, { useState } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount((prevCount) => prevCount - 1);
//   };

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   );
// }

// export default Counter;
// Explanation:

// setCount(count + 1) directly updates the count state by incrementing its value.
// setCount((prevCount) => prevCount - 1) uses a functional update to decrement the count state, ensuring the correct state is used.
// 31. What is useEffect hook and how is it different from lifecycle methods?
// The useEffect hook in ReactJS allows you to perform side effects in functional components, such as data fetching, subscriptions, and manual DOM manipulations. It combines the behavior of lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount into a single API.

// Syntax:

// javascript
// Copy code
// useEffect(() => {
//   // Effect logic

//   return () => {
//     // Cleanup logic
//   };
// }, [dependencies]);
// Parameters:

// Effect Function: Contains side effect logic.
// Cleanup Function: Cleans up resources when the component unmounts or dependencies change.
// Dependencies Array: Controls when the effect runs.
// Differences from Lifecycle Methods:

// Unified API: Combines multiple lifecycle methods into one hook.
// Runs After Render: Executes after the component renders, similar to componentDidMount and componentDidUpdate.
// Dependencies: Runs only when specified dependencies change, unlike lifecycle methods that run on every update.
// Example:

// javascript
// Copy code
// import React, { useState, useEffect } from 'react';

// function Timer() {
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSeconds((prevSeconds) => prevSeconds + 1);
//     }, 1000);

//     return () => {
//       clearInterval(interval); // Cleanup on unmount
//     };
//   }, []); // Empty dependencies array for componentDidMount

//   return <h1>Timer: {seconds}s</h1>;
// }

// export default Timer;
// Explanation:

// The useEffect hook sets up a timer that increments the seconds state every second.
// The cleanup function clears the interval when the component unmounts, similar to componentWillUnmount.










