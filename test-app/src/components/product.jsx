import { useState } from "react";
import Counter from "./counter";
const Product=({id1})=> 
{
    const [identity, setId] = useState(id1);
  const [ count, setCount]=useState(500);
    const onLikes=()=>{
        setCount(count+1);
    }

  return (
  <>
  <hr/>
    <img src="/public/flowers/gerbera.jpg" width={200} height={200}/>
    <h3>Tittle: gerbera</h3>
    <h3>Likes: {count}</h3>
    <h3>ID: {identity}</h3>

      <Counter  likes={count}  onChangeLikes={onLikes}/>
  </>
  );
}

export default Product;
