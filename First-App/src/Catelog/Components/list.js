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
          <li>{products.title} | <Link to={`/details/${products.id}`}>Details</Link></li>
        ))}

      </ol>
    </div>
  );
}
export default Catelog;
