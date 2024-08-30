function UpdateCustomer() {
  return (
    <div className="Home">
      <div class="body">
        <center>
          <u>
            <h1>UPDATE EXISTING CUSTOMER</h1>
          </u>

          <form>
            <table>
              <tr>
                <td>
                  <p>
                    <b>Id:</b>
                  </p>
                </td>
                <td>
                  <input type="text" id="id" name="title" />
                </td>
              </tr>

              <tr>
                <td>
                  <p>
                    <b>Name:</b>
                  </p>
                </td>
                <td>
                  <input type="text" id="name" name="name" />
                </td>
              </tr>

              <tr>
                <td>
                  <p>
                    <b>Age:</b>
                  </p>
                </td>
                <td>
                  <input type="text" id="age" name="age" />
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <b>Email:</b>
                  </p>
                </td>
                <td>
                  <input type="text" id="Email" name="Email" />
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <b>Password:</b>
                  </p>
                </td>
                <td>
                  <input type="text" id="Password" name="Password" />
                </td>
              </tr>
              <tr>
                <td> </td>
                <td>
                  <input class="button" type="submit" value="update customer Data" />
                </td>
              </tr>
            </table>
          </form>
        </center>
      </div>
    </div>
  );
}

export default UpdateCustomer;
