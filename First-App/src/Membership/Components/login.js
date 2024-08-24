import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="Home">
      <div class="body">
        <center>
          <u>
            <h1>Login</h1>
          </u>

          <table>
            <tr>
              <td>
                <p>
                  <b>Email Address:</b>
                </p>
              </td>
              <td>
                <input type="email" name="email" id="email" />
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <b>Password:</b>
                </p>
              </td>
              <td>
                <input type="password" name="password" id="password" />
              </td>
            </tr>
            <tr>
              <td>
                <button>login</button>
              </td>
              <td>
                <Link to="/register">Register here</Link>
              </td>
            </tr>
          </table>
        </center>
      </div>
    </div>
  );
}

export default Login;
