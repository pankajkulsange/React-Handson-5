import "./App.css";
import HOCdata from "./Components/HOCdata";
import PC from "./Components/PC";
import ClickCounter from "./Components/ClickCounter";
import HoverCounter from "./Components/HoverCounter";
import PCdata from "./Components/PCdata";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter((prevCounter) => prevCounter + 1);
  return (
    <div className="App">
      <div className="app-container ">
        <HOCdata />
        <div className="side-to-side">
          <ClickCounter />
          <HoverCounter />
        </div>
        <PCdata />
        <PC data={counter} />
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
}

export default App;
