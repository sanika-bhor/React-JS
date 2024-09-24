import { useState } from "react";
import Counter from "./counter";
const Product=({id, productName, discription,price,likes,imageUrl})=> 
{
    const [identity, setId] = useState(id);
    const [title, setTittle] = useState(productName);
    const [dis, setDiscription] = useState(discription);
    const [prices, setPrice] = useState(price);
    const [like, setLikes] = useState(likes);
    const [image, setImage] = useState(imageUrl);
    const onLikes=()=>{
        setLikes(like+1);
    }

  return (
  <>
    <img src={image} width={200} height={200}/>
    {/* <h3>ID: {identity}</h3> */}
    <h3>Tittle: {title}</h3>
    <h3>Discription: {dis}</h3>
    <h3>Price: {prices}</h3>
    <h3>Likes: {like}</h3>

      <Counter  likes={like}  onChangeLikes={onLikes}/>
  </>
  );
}

export default Product;
