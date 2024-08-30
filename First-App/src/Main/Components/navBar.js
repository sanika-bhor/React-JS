import "A:/TAP/GitHub/React-JS/First-App/src/App.css";

import { Link } from "react-router-dom";

function navBar() 
{
  return (
    <div>
      <div class="logo">
        <img
          src="/images/transflower_logo.jpg"
          height="100"
          width="100"
          alt="logo"
        />
        <h2>Transflower Learning Pvt. Ltd.</h2>
      </div>
      ;
      <nav>
        |<Link to="/">Home</Link>|<Link to="/about">About Us</Link>|
        <Link to="/contact">contact</Link>|<Link to="/services">services</Link>|
        <Link to="/login">Login</Link> |<Link to="/register">Register</Link>|
        <Link to="/list">Catelog</Link>|<Link to="/dashboard">dashboard</Link>|
        <Link to="/customers">Customers</Link>|
      </nav>
      <hr></hr>
      <hr></hr>
    </div>
  );
 
}

export default navBar;



 

