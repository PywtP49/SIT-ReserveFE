import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Firstpage from "./Firstpage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Firstpage />
    </>
  );
}

export default App;
