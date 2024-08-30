import CustomerService from "../service/customerService";
import { Link } from "react-router-dom";
function Customer() {
  var customer = CustomerService.getAll();
  return (
    <div>
      <Link to="/insertcustomer">Add new Customer</Link>
      <ol>
        {customer.map((customers) => (
          <li>
            {customers.name} |{" "}
            <Link to={`/details/${customer.id}`}>Details</Link> |
            <Link to="/update">update</Link> |
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Customer;
