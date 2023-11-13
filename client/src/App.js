import axios from "axios";

function App() {

  const callfunction = () =>{
    const data = {name: "test", surname: "testing", pf: "TestIt" };
    axios 
      .post("http://localhost:4000/show", data)
      .then((res) => console.log(res))
      .catch((error) => {
        console.log(error);
      });
  }
return (

  <div>
    <button onClick={callfunction}>Call Function</button>
  </div>
    )
}

export default App