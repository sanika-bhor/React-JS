import Counter from "./counter";
import Details from "./details";

function App() {

  var product=[
    {productName:"lotus", discription:"beautiful flower",price:50, stock:89 },
  ]
  const title="transflower Pvt Ltd."
  var likes=100;
  // var productName="rose";
  // var discription="red flower";
  // var price=50;
  // var stock=250;

  return (
    <div className="App">
      <h1>{title}</h1>

      <Counter likes={likes}/>
      {/* <Details productName={productName} discription={discription} price={price} stock={stock}/> */}
      <Details productName={product[0].productName} discription={product[0].discription} price={product[0].price} stock={product[0].stock}/>
    </div>
  );
}

export default App;
