import { useState } from "react";
import Counter from "./Counter";

const Product=({id,title,description,quantity,image,price,like})=>
{
  const [likes, setLikes] = useState(like);
   
  function handler(data) {
    setLikes(data);
  }
  return (
    <div>
      <div className="card m-2 shadow">
        <img src={image} className="card-img-top" alt={title} height="250px" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">description: {description}</p>
          <p className="card-text">Quantity: {quantity}</p>
          <p className="card-text">Unit Price: {price}</p>
          <p className="card-text">Likes: {likes}</p>
          <Counter likes={likes} handler={handler} />
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;