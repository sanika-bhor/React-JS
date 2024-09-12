import Counter from "./counter";
import { useState } from "react";
function Details({ productName, discription, price, likes, image }) {
  const [title, setProductName] = useState(productName);
  const [desc, setDescription] = useState(discription);
  const [productPrice, setPrice] = useState(price);
  const [like, setLike] = useState(likes);
  const [imgUrl, setImg] = useState(image);

const addToCart=()=>{
  alert("items added to the cart")
}
  return (
    <div>
      <table border="1">
        <tr>
          <td>
            <img src={imgUrl} width="100" height="100" />
          </td>
        </tr>
        <tr>
          <td>
            <center>
              <p>Title:{title}</p>
              <p>Description:{desc}</p>
              <p>Price:{productPrice}</p>
              <p>
                <Counter likes={like} />
              </p>
            </center>
          </td>
        </tr>
        <tr>
          <center>
            <button onClick={addToCart}>Add to cart</button>
          </center>
        </tr>
      </table>
    </div>
  );
}

export default Details;
