
import { useState } from "react";
function Details({productName, discription ,price,stock}) {
    const [title, setProductName]=useState(productName);
    const [desc,setDescription]=useState(discription)
    const [productPrice,setPrice]=useState(price);
    const [stockCount, setStock]=useState(stock);
    

    const discount=()=>{
        setPrice(productPrice * 0.8);
    }

    const getFlower=()=>{
        setStock(stockCount-1);
    }
     return (
       <div>
         <h2>product details</h2>
         <p>Title:{title}</p>
         <p>Description:{desc}</p>
         <p>
           Price:{productPrice}
           <button onClick={discount}>with discount</button>
         </p>
         <p>Quatity:{stockCount}
             <button onClick={getFlower}>after purchase</button>
         </p>

         <button>Add to cart</button>
       </div>
     );

}

export default Details;
