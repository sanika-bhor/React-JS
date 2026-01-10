import { useState } from "react";
import "./Catelog.css";
import rose from "./assets/rose.png";
import lily from "./assets/lily.png";
import lotus from "./assets/lotus.png";
import mogra from "./assets/mogra.png";
import tulip from "./assets/tulip.png";
import hibiscus from "./assets/hibiscus.png";
import Details from "./Details";

function Catelog() {

   const [showDetails, setShowDetails] = useState(false);
   const[flowerName,setFlowerName]=useState(null);
  function handleClick() {
    setShowDetails(true);
   

  }
  return (
    <>
      <div className="section">
        <div className="cart" onClick={()=>{handleClick();setFlowerName("rose")}}>
          <img src={rose} width={100} height={200} alt="rose" />
          <br></br>
          <h3>Rose</h3>
        </div>

        <div class="cart"  onClick={()=>{handleClick();setFlowerName("Lily")}}>
          <img src={lily} width={200} height={200} alt="Lily" />
          <br></br>
          <h3>Lily</h3>
        </div>

        <div class="cart"  onClick={()=>{handleClick();setFlowerName("Lotus")}}>
          <img src={lotus} width={200} height={200} alt="Lotus" />
          <br></br>
          <h3>Lotus</h3>
        </div>

        <div class="cart"  onClick={()=>{handleClick();setFlowerName("Mogra")}}>
          <img src={mogra} width={200} height={200} alt="Mogra" />
          <br></br>
          <h3>Mogra</h3>
        </div>

        <div class="cart"  onClick={()=>{handleClick();setFlowerName("Tulip")}}>
          <img src={tulip} width={200} height={200} alt="Tulip" />
          <br></br>
          <h3>Tulip</h3>
        </div>

        <div class="cart"  onClick={()=>{handleClick();setFlowerName("Hibiscus")}}>
          <img src={hibiscus} width={200} height={200} alt="Hibiscus" />
          <br></br>
          <h3>Hibiscus</h3>
        </div>
      </div>
      <div>
         {showDetails && <Details name={flowerName} />}
      </div>
    </>
  );
}

export default Catelog;
