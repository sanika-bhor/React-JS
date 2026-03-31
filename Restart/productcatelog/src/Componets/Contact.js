const ContactUs = () => {
  return (
    <div className="container mt-5">
      {/* 🔷 Heading */}
      <h2 className="text-center mb-4">Contact Us</h2>

      <div className="row">
        {/* 📩 Contact Form */}
        <div className="col-md-4">
          <div className="card p-4 shadow">
            <h4 className="mb-3">Send Message</h4>

            <form>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <button className="btn btn-primary w-100">Submit</button>
            </form>
          </div>
        </div>

        {/* 📍 Contact Info */}
        <div className="col-md-4">
          <div className="card p-4 shadow">
            <h4 className="mb-3">Get in Touch</h4>

            <p>
              <strong>📍 Address:</strong> Pune, Maharashtra, India
            </p>
            <p>
              <strong>📞 Phone:</strong> +91 98765 43210
            </p>
            <p>
              <strong>📧 Email:</strong> support@example.com
            </p>

            <hr />

            <h5>Business Hours</h5>
            <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
            <p>Sat: 10:00 AM - 4:00 PM</p>
            <p>Sun: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
