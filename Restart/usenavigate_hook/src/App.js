import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Hello from "./Hello";
import GoodBye from "./GoodBye";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Hello/>}></Route>
          <Route path="/bye" element={<GoodBye/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
