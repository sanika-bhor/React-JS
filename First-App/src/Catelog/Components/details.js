import { useParams } from "react-router-dom";
import CatelogService from "../Services/CatelogService";

function Details() {
  var {id}=useParams();
  var product = CatelogService.getById(Number(id));
  const addToCart = () => {
    // eslint-disable-next-line no-restricted-globals
    confirm("Are you really want to ADD this TO your CART");
  };
  return (
    <div>
      <h1>product details</h1>
      <p>Title:{product.title}</p>
      <p>Description:{product.desc}</p>
      <p>Price:{product.price}</p>
      <p>Quatity:{product.quantity}</p>

      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}

export default Details;
