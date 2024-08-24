function Register() {
  return (
    <div className="Home">
      

      <div class="body">
        <center>
          <u>
            <h1>Register</h1>
          </u>

          <form method="post" action="/register">
            <table>
              <tr>
                <td>
                  <p>
                    <b>Email Address:</b>
                  </p>
                </td>
                <td>
                  <input type="email" name="email" />
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <b>Password:</b>
                  </p>
                </td>
                <td>
                  <input type="password" name="password" />
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <b>Location:</b>
                  </p>
                </td>
                <td>
                  <input type="text" name="location" />
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <b>Age:</b>
                  </p>
                </td>
                <td>
                  <input type="number" name="age" />
                </td>
              </tr>
              <tr>
                <td> </td>
                <td>
                  <input class="button" type="submit" value="register" />
                </td>
              </tr>
            </table>
          </form>
        </center>
      </div>
    </div>
  );
}

export default Register;
