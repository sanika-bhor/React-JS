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
   const[flowerDesc,setFlowerDesc]=useState(null);
  function handleClick() {
    setShowDetails(true);
   

  }
  return (
    <>
      <div className="section">
        <div className="cart" onClick={()=>{handleClick();setFlowerName("rose"); setFlowerDesc("A rose symbolizes love and beauty, admired for its soft, layered petals and rich fragrance. 🌹") }}>
          <img src={rose} width={100} height={200} alt="rose" />
          <br></br>
          <h3>Rose</h3>
        </div>

        <div class="cart"  onClick={()=>{handleClick();setFlowerName("Lily");setFlowerDesc("A lily stands for elegance and devotion, known for its tall stem and gentle scent. 🤍")}}>
          <img src={lily} width={200} height={200} alt="Lily" />
          <br></br>
          <h3>Lily</h3>
        </div>

        <div class="cart"  onClick={()=>{handleClick();setFlowerName("Lotus");setFlowerDesc("The lotus represents purity and peace, blooming gracefully above muddy water. 🌸")}}>
          <img src={lotus} width={200} height={200} alt="Lotus" />
          <br></br>
          <h3>Lotus</h3>
        </div>

        <div class="cart"  onClick={()=>{handleClick();setFlowerName("Mogra");setFlowerDesc("Mogra symbolizes purity and calm, famous for its small white flowers and soothing fragrance. 🌼")}}>
          <img src={mogra} width={200} height={200} alt="Mogra" />
          <br></br>
          <h3>Mogra</h3>
        </div>

        <div class="cart"  onClick={()=>{handleClick();setFlowerName("Tulip");setFlowerDesc("A tulip expresses perfect love and cheerfulness, blooming brightly with simple, graceful petals. 🌷")}}>
          <img src={tulip} width={200} height={200} alt="Tulip" />
          <br></br>
          <h3>Tulip</h3>
        </div>

        <div class="cart"  onClick={()=>{handleClick();setFlowerName("Hibiscus");setFlowerDesc("Hibiscus reflects delicate beauty and vitality, with large, vibrant, eye-catching petals. 🌺")}}>
          <img src={hibiscus} width={200} height={200} alt="Hibiscus" />
          <br></br>
          <h3>Hibiscus</h3>
        </div>
      </div>
      <div>
         {showDetails && <Details name={flowerName} description={flowerDesc}/>}
      </div>
    </>
  );
}

export default Catelog;
