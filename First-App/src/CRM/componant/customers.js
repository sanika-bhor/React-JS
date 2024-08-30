import { Link } from "react-router-dom";
function Customer()
{
    return (
      <div>
        <ol>
          <li>sanika |<Link to="/customerdetails">Details</Link> |</li>
          <li>sumit</li>
          <li>disha</li>
          <li>payal</li>
          <li>snehal</li>
        </ol>
      </div>
    );
}

export default Customer;