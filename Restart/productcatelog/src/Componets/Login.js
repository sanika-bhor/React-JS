import "./Login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="cardpage">
      <div className="card p-4 shadow">
        <h3 className="text-center mb-4">Login</h3>

        <form>
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

          <button className="btn btn-success w-100">Login</button>
        </form>

        <div className="d-flex justify-content-between mt-3">
          <a href="#">Forgot Password</a>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
