import { Link } from "react-router-dom";


function Dashboard()
 {
    return(
        <div>
            <h1>Dashboard</h1>
            |<Link to="/pie">Pie chart</Link>|<Link to="/line">Line chart</Link>|<Link to="/bar">Bar chart</Link>|
        </div>
    );
 }
 export default Dashboard;