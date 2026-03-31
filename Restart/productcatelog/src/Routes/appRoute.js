import { BrowserRouter as Router, Route,Routes } from "react-router-dom"
import LoginPage from "../Page/LoginPage"
import RegisterPage from "../Page/RegisterPage"
const AppRoute=()=>{
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default AppRoute;