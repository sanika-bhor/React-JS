import Home from "../Main/Components/home";
import About from "../Main/Components/about";
import Contact from "../Main/Components/contact"
import Services from "../Main/Components/services";
import Login from "../Membership/Components/login";
import Register from "../Membership/Components/register"

import { Routes, Route } from "react-router-dom";

var AppRoutes = () => {
  <Routes>
    <Route index element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/services" element={<Services />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
  </Routes>;
};

export default AppRoutes;
