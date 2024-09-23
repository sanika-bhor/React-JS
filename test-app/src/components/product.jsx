import Counter from "./counter";
const Product=()=> 
{
  const like=200;
  return (
  <>
    <img src="/public/flowers/gerbera.jpg" width={200} height={200}/>
    <h3>Tittle: gerbera</h3>
    <h3>Likes: {like}</h3>

    <Counter likes={like}/>
  </>
  );
}

export default Product;
