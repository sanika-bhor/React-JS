import customerService from "./customerDetails";
function InsertCustomer() {
     var handleSubmit = () => {
       // var product = { id: "6", title: "laptop", price: 50000, quantity: 5 };
       var id = document.getElementById("id").value;
       var title = document.getElementById("name").value;
       var age = document.getElementById("age").value;
       var email = document.getElementById("email").value;
       var password = document.getElementById("password").value;

       var product = {
         id: id,
         name: title,
         age: age,
         email: email,
         quantity: password,
       };
       customerService.insert(product);
     };

  return (
    <div className="Home">
      <div class="body">
        <center>
          <u>
            <h1>ADD NEW CUSTOMER</h1>
          </u>

          <form onSubmit={handleSubmit}>
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
                  <input type="text" id="Email" name="eSmail" />
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <b>Password:</b>
                  </p>
                </td>
                <td>
                  <input type="text" id="Password" name="password" />
                </td>
              </tr>
              <tr>
                <td> </td>
                <td>
                  <input class="button" type="submit" value="Insert New Data" />
                </td>
              </tr>
            </table>
          </form>
        </center>
      </div>
    </div>
  );
}

export default InsertCustomer;