import Home from "../Main/Components/home";
import About from "../Main/Components/about";
import Contact from "../Main/Components/contact"
import Services from "../Main/Components/services";
import Login from "../Membership/Components/login";
import Register from "../Membership/Components/register"
import Catelog from "../Catelog/Components/list";
import Dashboard from "../BI/Components/Dashboard"; 
import Barchart from "../BI/Components/BarChart";
import PieChart from "../BI/Components/PieChart";
import LineChart from "../BI/Components/LineChart";
import Details from "../Catelog/Components/details";
import Insert from "../Catelog/Components/insert";
import Update from "../Catelog/Components/update";
import Delete from "../Catelog/Components/delete";
import Customers from "../CRM/componant/customers"

import { Routes, Route } from "react-router-dom";

var AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/list" element={<Catelog />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/insert" element={<Insert />} />
      <Route path="/update" element={<Update />} />
      <Route path="/delete" element={<Delete />} />

      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="bar" element={<Barchart />} />
        <Route path="line" element={<LineChart />} />
        <Route path="pie" element={<PieChart />} />
      </Route>

      <Route path="/customers" element={<Customers />} />
    </Routes>
  );
};

export default AppRoutes;
