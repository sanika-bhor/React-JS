import Counter from "./counter";

function App() {
  const title="transflower Pvt Ltd."
  var likes=100;


  return (
    <div className="App">
      <h1>{title}</h1>

      <Counter likes={likes}/>
    </div>
  );
}

export default App;
