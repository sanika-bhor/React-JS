import AppRoutes from "./Router/AppRouter";
import navBar from "./Main/Components/navBar";
function App() {
  return (
    <div className="App">
      <navBar />
      <AppRoutes />
    </div>
  );
}

export default App;
