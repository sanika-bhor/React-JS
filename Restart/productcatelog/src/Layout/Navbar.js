import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          MyApp
        </a>

        {/* Navbar content */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/home" className="nav-link active">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="about" className="nav-link active">AboutUs</Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="nav-link active" >
                Contact US
              </Link>
            </li>

            <li className="nav-item">
              <Link to="products" className="nav-link active">
                Products
              </Link>
            </li>
          </ul>

          {/* Right side button */}
          <button className="btn btn-outline-success">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
