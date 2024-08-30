import { Link } from "react-router-dom";
function Customer()
{
    return (
      <div>
        <Link to="/insertcustomer">Add new Customer</Link>
        <ol>
          <li>
            sanika |<Link to="/customerdetails">Details</Link> |
            <Link to="/updatecustomer">update</Link> |
          </li>
          <li>sumit</li>
          <li>disha</li>
          <li>payal</li>
          <li>snehal</li>
        </ol>
      </div>
    );
}

export default Customer;

