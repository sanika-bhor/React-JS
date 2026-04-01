import Product from "../Componets/Product";
import data from "../data/product.json";

const ProductList = () => {
  const products = data;

  return (
    <div className="container">
      <h1 className="text-center m-5">Products</h1>

      <div className="row g-4">
        {products.map((product) => (
          <div className="col-md-4" key={product.id}>
            <Product
              id={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              quantity={product.quantity}
              price={product.unitprice}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
