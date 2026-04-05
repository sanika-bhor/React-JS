import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
  
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Register/>}/>
        </Routes>


    </div>
  );
}

export default App;
