const AboutUs = () => {
  return (
    <div className="container mt-5">
      {/* 🔷 Heading */}
      <h2 className="text-center mb-4">About Us</h2>

      {/* 🔷 Intro Section */}
      <div className="text-center mb-5">
        <p>
          Welcome to our platform! We are dedicated to providing the best
          products and services with a focus on quality, reliability, and
          customer satisfaction.
        </p>
      </div>

      {/* 🔷 Mission & Vision */}
      <div className="row text-center mb-5">
        <div className="col-md-4">
          <div className="card p-4 shadow">
            <h4>Our Mission</h4>
            <p>
              To deliver high-quality products at affordable prices while
              ensuring a seamless shopping experience.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-4 shadow">
            <h4>Our Vision</h4>
            <p>
              To become a trusted global brand known for innovation, quality,
              and customer satisfaction.
            </p>
          </div>
        </div>
         <div className="col-md-4">
          <div className="card p-4 shadow">
            <h4>Our Goal</h4>
            <p>
              To become a trusted global brand known for innovation, quality,
              and customer satisfaction.
            </p>
          </div>
        </div>

      </div>

      

    </div>
  );
};

export default AboutUs;
