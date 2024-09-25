import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './logo.png'
import { useEffect,useState } from 'react'



const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Load the preferred color mode from local storage on component mount
    useEffect(() => {
      const savedMode = localStorage.getItem('darkMode') === 'true';
      setIsDarkMode(savedMode);
    }, []);
  
    // Function to toggle the dark mode state
    const handleToggle = (e) => {
      e.preventDefault(); // Prevent the form from submitting
      setIsDarkMode((prevMode) => {
        const newMode = !prevMode;
        localStorage.setItem('darkMode', newMode);
        return newMode;
      });
    };
  
    // Set the CSS class based on the isDarkMode state
    const backgroundColorClass = isDarkMode ? 'dark-mode' : 'light-mode';
  
  

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">
                        <img src={Logo} alt={Logo} style={{height:'100px',width:'100px'}}/>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link  class="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
            
                            <li class="nav-item">
                                <Link class="nav-link" to="/popmessage">PopUp</Link>
                            </li>
                          

                        </ul>
                        <form class="d-flex">
                            <button class="btn btn-outline-success" onClick={handleToggle} type="submit">Toggle</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar