import "./App.css";
import { use, useState ,useEffect } from "react";

function App() {
  const [text, setText] = useState('');

  function changeHandler(event) {
    setText(event.target.value);
    console.log(text);
  }
  //variation:1 Run on every render
  // useEffect(() => {
  //   console.log("Ui Rendered");
  // });

  //variation:2 First render
  // useEffect(() => {
  //   console.log("Ui Rendered");
  // },[]);
  
  //variation:3 First render + when text changes or dependency changes
  // useEffect(() => {
  //   console.log("Text Changed");
  // },[text]);
  
  //variation:4 to handle cleanup
  useEffect(() => {
    console.log("Ui Rendered");
    
    return () => {
      console.log("Clean up");
    }
  });



  return (
    <div className="app-container">
      <input className="input" type="text" onChange={changeHandler}></input>
    </div>
    
  );
}

export default App;
