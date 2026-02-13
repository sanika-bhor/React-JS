import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import AllSubject from "../pages/AllSubject";
function AppRoutes()
{
    return(
    <Router>
      <Routes>
        <Route path="/api/subjects" element={<AllSubject/>}>
        </Route>
      </Routes>
    </Router>
    );
}
export default AppRoutes;