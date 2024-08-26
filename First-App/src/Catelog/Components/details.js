function Details()
{

    const product={
        title:"rose",
        desc:"this is valintine flower",
        price:"50 rs",
        quatity:5210

    }
    const addToCart=()=>{
       // eslint-disable-next-line no-restricted-globals
       confirm("Are you really want to ADD this TO your CART");
    }
    return (
      <div>
        <h1>product details</h1>
        <p>Title:{product.title}</p>
        <p>Description:{product.desc}</p>
        <p>Price:{product.price}</p>
        <p>Quatity:{product.quatity}</p>

        <button onClick={addToCart}>Add to cart</button>
      </div>
    );
}

export default Details;