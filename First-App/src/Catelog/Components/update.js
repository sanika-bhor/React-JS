import CatelogService from "../Services/CatelogService";

function Update() {
   var handleSubmit = () => {
     // var product = { id: "6", title: "laptop", price: 50000, quantity: 5 };
     var id = document.getElementById("id").value;
     var title = document.getElementById("title").value;
     var discription = document.getElementById("discription").value;
     var price = document.getElementById("price").value;
     var quantity = document.getElementById("quantity").value;

     var product = {
       id: id,
       title: title,
       discription: discription,
       price: price,
       quantity: quantity,
     };
     CatelogService.insert(product);
   };

  return (
    <div className="Home">
      <div class="body">
        <center>
          <u>
            <h1>UPDATE EXISTING PRODUCT</h1>
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
                    <b>Title:</b>
                  </p>
                </td>
                <td>
                  <input type="text" id="title" name="title" />
                </td>
              </tr>

              <tr>
                <td>
                  <p>
                    <b>Description:</b>
                  </p>
                </td>
                <td>
                  <input type="text" id="Description" name="Description" />
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <b>Price:</b>
                  </p>
                </td>
                <td>
                  <input type="text" id="Price" name="location" />
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <b>Quantity:</b>
                  </p>
                </td>
                <td>
                  <input type="text" id="quantity" name="Quantity" />
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

export default Update;
