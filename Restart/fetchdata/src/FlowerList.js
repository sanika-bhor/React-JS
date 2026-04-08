import { useEffect, useState } from "react";
import Flowers from "./Flowers";

const FlowerList=()=>{
    const [flowers,setFlower]=useState([]);

    useEffect(()=>{
   
        fetch("http://localhost:8000/flowers")
        .then(
           async (res)=>{
           const data=await res.json();
           if(!res.ok)
           {
            const err=(data && data.message) ||res.statusText;
            return Promise.reject(err);
           }
            setFlower(data);

        })
        .catch((err)=>{
            console.log(err);
        })
    }
    )
    return (
      <div>
        {flowers.map((flower) => (
          <Flowers
            id={flower.id}
            title={flower.title}
            description={flower.description}
            unitprice={flower.price}
            like={flower.likes}
          />
        ))}
      </div>
    );
}

export default FlowerList;