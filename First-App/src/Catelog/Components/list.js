import CatelogService from "../Services/CatelogService";
import { Link } from "react-router-dom";
var product = CatelogService.getAll();
function Catelog() {
  return (
    <div>
      <h1>Product Catalog</h1>
      <Link to="/insert">Add new Product</Link>

      <ol>
        {product.map((products) => (
          <li>{products.title}</li>
        ))}

        {/* <li>
          Rose |<Link to="/details">details</Link>|
          <Link to="/update">Update</Link>|<Link to="/delete">delete</Link>|
        </li>
        <li>
          Lotus |<Link to="/details">Details</Link>|
          <Link to="/update">Update</Link>|<Link to="/delete">delete</Link>|
        </li>
        <li>
          Lily |<Link to="/details">Details</Link>|
          <Link to="/update">Update</Link>|<Link to="/delete">delete</Link>|
        </li>
        <li>
          Jasmine |<Link to="/details">Details</Link>|
          <Link to="/update">Update</Link>|<Link to="/delete">delete</Link>|
        </li>
        <li>
          Gerbera |<Link to="/details">Details</Link>|
          <Link to="/update">Update</Link>|<Link to="/delete">delete</Link>|
        </li>

        <li>
          Mogra |<Link to="/details">Details</Link>|
          <Link to="/update">Update</Link>|<Link to="/delete">delete</Link>|
        </li> */}
      </ol>
    </div>
  );
}
export default Catelog;
