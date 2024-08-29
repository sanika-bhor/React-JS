import CatelogService from "../Services/CatelogService";

function Insert() {
  var handleSubmit=()=>{
    var product = { id: "6", title: "laptop", price: 50000, quantity: 5 };
    CatelogService.insert(product);
  }
  return (
    <div className="Home">
      <div class="body">
        <center>
          <u>
            <h1>ADD NEW PRODUCT</h1>
          </u>

          <form onSubmit={handleSubmit}>
            <table>
              <tr>
                <td>
                  <p>
                    <b>Title:</b>
                  </p>
                </td>
                <td>
                  <input type="text" name="title" />
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <b>Description:</b>
                  </p>
                </td>
                <td>
                  <input type="text" name="Description" />
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <b>Price:</b>
                  </p>
                </td>
                <td>
                  <input type="text" name="location" />
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <b>Quatity:</b>
                  </p>
                </td>
                <td>
                  <input type="text" name="quatity" />
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

export default Insert;
