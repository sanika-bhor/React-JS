import OOPConcept from "../../Entity/Services/OOPConcept";
function Home() {

  const performOpertaion =()=>
  {
    let Additon=OOPConcept.Addition(10,20);
    let Subtraction = OOPConcept.Subtraction(30,20);
    let Multiplication = OOPConcept.Multiplication(5, 2);
    let Division = OOPConcept.Division(10, 2);


    console.log("Addition: "+Additon);
    console.log("Subtraction: "+Subtraction);
    console.log("multiplication: "+Multiplication);
    console.log("division: "+Division);
  }
  return (
    <div className="Home">
     
      <div class="body">
        <center>
          <h2>
            Welcome to our platform. this is our new project name as
          </h2>
          <b>
            <i>
              <p>💰Net Banking Solution💰</p>
            </i>
          </b>

          <button onClick={performOpertaion}>Invoke OOP concept</button>
        </center>
      </div>
    </div>
  );
}

export default Home;
