import Counter from "./counter";
import Details from "./details";

function App() {

  // var product=[
  //   {productName:"lotus", discription:"beautiful flower",price:50, stock:89 ,},
  //   {productName:"rose", discription:"red flower",price:25, stock:130 },
  //   {productName:"sunflower", discription:"yellow flower",price:10, stock:901}
  // ]

  var product = [
    {
      id: 12,
      productName: "gerbera",
      discription: "wedding flower",
      price: 56,
      likes: 67567,
      imageurl: "/flowers/gerbera.jpg",
    },
    {
      id: 13,
      productName: "rose",
      discription: "valentine flower",
      price: 5,
      likes: 67567,
      imageurl: "/flowers/rose.jpg",
    },
    {
      id: 14,
      productName: "lotus",
      discription: "worship flower",
      price: 23,
      likes: 7867,
      imageurl: "/flowers/lotus.jpg",
    },
    {
      id: 15,
      productName: "jasmine",
      discription: "fregrance flower",
      price: 4,
      likes: 5670,
      imageurl: "/flowers/jasmine.jpg",
    },
    {
      id: 16,
      productName: "marigold",
      discription: "festival flower",
      price: 12,
      likes: 8900,
      imageurl: "/flowers/marigold.jpg",
    },
    {
      id: 16,
      productName: "dahlia",
      discription: "festival flower",
      price: 43,
      likes: 5645,
      imageurl: "/flowers/dahlia.jpg",
    },
  ];
  const title="transflower Pvt Ltd."
  var likes=100;
  // var productName="rose";
  // var discription="red flower";
  // var price=50;
  // var stock=250;

  return (
    <div className="App">
      <h1>{title}</h1>
      <h2>Today's Fresh Flowers</h2>
      <table cellPadding={10}>
        <tr>
          {product.map((products) => (
            <td>
              <Details
                productName={products.productName}
                discription={product.discription}
                price={products.price}
                likes={products.likes}
                image={products.imageurl}
              />
            </td>
          ))}
        </tr>
      </table>
      {/* <Details productName={productName} discription={discription} price={price} stock={stock}/> */}
      {/* <Details productName={product[0].productName} discription={product[0].discription} price={product[0].price} stock={product[0].stock}/>
      <Details productName={product[1].productName} discription={product[1].discription} price={product[1].price} stock={product[1].stock}/>
      <Details productName={product[2].productName} discription={product[2].discription} price={product[2].price} stock={product[2].stock}/> */}
    </div>
  );
}

export default App;
