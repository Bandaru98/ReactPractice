import React, { useState } from 'react';

function Exforms() {
    const [inputValue, setInputValue] = useState('');
    const [hoverText, setHoverText] = useState('Hover over me!');
    const [formSubmitted, setFormSubmitted] = useState(false);

    // Event handlers
    const handleClick = () => {
        alert('Button was clicked!');
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleMouseEnter = () => {
        setHoverText('You hovered over me!');
    };

    const handleMouseLeave = () => {
        setHoverText('Hover over me!');
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent form submission
        setFormSubmitted(true);
    };

    return (
        <div>
            <h1>React Events Example</h1>

            {/* onClick event */}
            <button onClick={handleClick}>Click me</button>

            <br />

            {/* onChange event */}
            <input
                type="text"
                placeholder="Type something..."
                value={inputValue}
                onChange={handleInputChange}
            />
            <p>You typed: {inputValue}</p>

            <br />

            {/* onMouseEnter and onMouseLeave events */}
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    width: '200px',
                    height: '100px',
                    border: '1px solid black',
                    textAlign: 'center',
                    lineHeight: '100px',
                    marginBottom: '20px',
                }}
            >
                {hoverText}
            </div>

            <br />

            {/* onSubmit event */}
            <form onSubmit={handleSubmit}>
                <button type="submit">Submit Form</button>
            </form>
            {formSubmitted && <p>Form submitted!</p>}
        </div>
    );
}

export default Exforms;