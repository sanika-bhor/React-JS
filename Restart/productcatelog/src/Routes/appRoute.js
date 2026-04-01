import { BrowserRouter as Router, Route,Routes } from "react-router-dom"
import LoginPage from "../Page/LoginPage"
import RegisterPage from "../Page/RegisterPage"
import Navbar from "../Layout/Navbar";
import Home from "../Componets/Home";
import AboutUs from "../Componets/About";
import ContactUs from "../Componets/Contact";
import ProductList from "../Page/ProductListPage";
const AppRoute=()=>{
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/products" element={<ProductList />} />
          </Routes>
        </Router>
      </div>
    );
}

export default AppRoute;