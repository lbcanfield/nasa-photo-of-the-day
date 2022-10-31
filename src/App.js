import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import dummyData from './dummyData/dummyData';

function App() {
  // Variables local to the App component.
  const [someVar, setSomeVar] = useState(dummyData);
  console.log( someVar );
  
  /*useEffect(() => 
  {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then( response => 
      {
        console.log( response );
      })
    .catch( error  => console.error( error ))

  }, [])  //Using empty dependancy array to run once   */
  return (
    <div className="App">
      <p>
        {/* Read through the instructions in the README.md file to build your NASA */}
        {/* app! Have fun <span role="img" aria-label='go!'>🚀</span>! */}
      </p>
    </div>
  );
}

export default App;


