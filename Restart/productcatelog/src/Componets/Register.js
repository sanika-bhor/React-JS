
import { Link } from "react-router-dom";
import "./Login.css";

const Register = () => {
  return (
    <div className="cardpage">
      <div className="card p-4 shadow">
        <h3 className="text-center mb-4">Register</h3>

        <form>
          <label htmlFor="yourname" className="form-label">
            Name
          </label>

          <input
            type="text"
            id="yourname"
            className="form-control"
            placeholder="Enter Your Name"
          />

          <br />
          <label htmlFor="username" className="form-label">
            UserName
          </label>

          <input
            type="text"
            id="username"
            className="form-control"
            placeholder="Enter UserName"
          />

          <br />

          <label htmlFor="password" className="form-label">
            Password
          </label>

          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Enter password"
          />

          <br />

          <label htmlFor="email" className="form-label">
            Email
          </label>

          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Enter email"
          />

          <label htmlFor="email" className="form-label">
            Address
          </label>

          <input
            type="text"
            id="address"
            className="form-control"
            placeholder="Enter Address"
          />

          <br />

          <button className="btn btn-success w-100">Register</button>
        </form>

        <div className="d-flex justify-content-between mt-3">
          <Link to="/login">SignUp</Link>
          
        </div>
      </div>
    </div>
  );
};

export default Register;
