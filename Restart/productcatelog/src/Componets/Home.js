
const Home = () => {
  return (
    <div className="container mt-4">
      {/* 🔥 Hero Section */}
      <div className="text-center mb-5">
        <h1>Welcome to Our Store</h1>
        <p>Best products at the best prices</p>
        <button className="btn btn-primary">Shop Now</button>
      </div>

      {/* ⭐ Features Section */}
      <div className="row text-center mb-5">
        <div className="col-md-4">
          <h5>🚚 Fast Delivery</h5>
          <p>Get your orders quickly</p>
        </div>

        <div className="col-md-4">
          <h5>💳 Secure Payment</h5>
          <p>100% secure transactions</p>
        </div>

        <div className="col-md-4">
          <h5>📦 Quality Products</h5>
          <p>Best quality guaranteed</p>
        </div>
      </div>

    </div>
  );
};

export default Home;
