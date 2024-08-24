import "A:/TAP/GitHub/React-JS/First-App/src/App.css";

import {  BrowserRouter as Router, Link } from "react-router-dom";

function navBar() 
{
  <div class="logo">
    <img
      src="/images/transflower_logo.jpg"
      height="100"
      width="100"
      alt="logo"
    />
    <h2>Transflower Learning Pvt. Ltd.</h2>
  </div>;

  <Router>
    <nav>
      |<Link to="/">Home</Link>|<Link to="/about">About Us</Link>|
      <Link to="/contact">contact</Link>|<Link to="/services">services</Link>|
      <Link to="/login">Login</Link> |<Link to="/register">Register</Link>|
    </nav>
    <hr></hr>
    <hr></hr>
  </Router>;
}

export default navBar;



 

