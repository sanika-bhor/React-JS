import "./App.css";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Services from "./services";
import Login from "./login";
import Register from "./register";
import { Routes, BrowserRouter as Router, Link, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div class="logo">
        <img
          src="/images/transflower_logo.jpg"
          height="100"
          width="100"
          alt="logo"
        />
        <h2>Transflower Learning Pvt. Ltd.</h2>
      </div>
      <Router>
        <nav>
          |<Link to="/">Home</Link>|<Link to="/about">About Us</Link>|
          <Link to="/contact">contact</Link>|
          <Link to="/services">services</Link>|<Link to="/login">Login</Link> |
          <Link to="/register">Register</Link>|
        </nav>
        <hr></hr>
        <hr></hr>

        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
