import Counter from "./counter";
import Details from "./details";

function App() {
  const title="transflower Pvt Ltd."
  var likes=100;
  var productName="rose";
  var discription="red flower";
  var price=50;
  var stock=250;

  return (
    <div className="App">
      <h1>{title}</h1>

      <Counter likes={likes}/>
      <Details productName={productName} discription={discription} price={price} stock={stock}/>
    </div>
  );
}

export default App;
