import Product from "./product";
import { useState } from "react";


function Products({products}) {
  const [product,setProduct]=useState(products)
  return (
    <div>
      <table border= {2}>
        <tr>
          {product.map((flower) => (
            <td>
              {" "}
              <Product
                id={flower.id}
                productName={flower.productName}
                discription={flower.discription}
                price={flower.price}
                likes={flower.likes}
                imageUrl={flower.imageurl}
              />{" "}
            </td>
          ))}
        </tr>
      </table>
    </div>
  );
}
export default Products;
