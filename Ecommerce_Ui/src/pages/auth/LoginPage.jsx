import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      credentials.email === "test@example.com" &&
      credentials.password === "password"
    ) {
      alert("login successful");
      navigate("/");
    } else {
      setError("invalid email or password");
    }
  };

  return (
    <div
      className="login-page container"
      style={{ maxWidth: "400px", marginTop: "2re," }}
    >
      <h1>Login</h1>
      {error && <p style={{ color: "red", margibBottom: "1rem" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>
      </form>

      <p style={{ marginTop: "1rem" }}>
        Don't have an account? <a href="/register">Register here</a>
      </p>
    </div>
  );
};
export default LoginPage;
