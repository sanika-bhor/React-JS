import AppRoutes from "./Router/AppRouter";
import NavBar from "./Main/Components/navBar"
import { BrowserRouter as Router } from "react-router-dom";


var App=()=> {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
