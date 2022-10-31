import React, { useState, useEffect } from "react";
import axios from 'axios';
import testData from './dummyData/dummyData';
import "./App.css";
import BuildPage from "./components/nasaPOTD";

function App() {
  const [data, setData] = useState(testData);
  return (
    <div className="App">
      <BuildPage data={data} />
    </div>
  );
}

export default App;




// <p>
//   Read through the instructions in the README.md file to build your NASA
//   app! Have fun <span role="img" aria-label='go!'>🚀</span>!
// </p>