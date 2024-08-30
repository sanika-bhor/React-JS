import { useParams } from "react-router-dom";
import CatelogService from "../../Catelog/Services/CatelogService";
function CustomerDetails() {
    var {id}=useParams();
    var customer=CatelogService.getById(Number(id));
  return (
    <div>
      <p>name:{customer.name}</p>
      <p>age:{customer.age}</p>
      <p>Email:{customer.email}</p>
      <p>Password:{customer.password}</p>
    </div>
  );
}

export default CustomerDetails;
