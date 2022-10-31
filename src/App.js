import React, { useState, useEffect } from "react";
import axios from 'axios';
// import testData from './dummyData/dummyData';
import "./App.css";
import BuildPage from "./components/nasaPOTD";

function App() {
  const [data, setData] = useState();

  useEffect( () => 
  {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then( response => 
        {
          setData(response.data);
        })
      .catch( error => console.error( error ))
  }, [] )    
  return (
    <div className="App">
      { data && <BuildPage data={data} /> }  {/*short circuit evaluation */}
    </div>
  );
}

const potdContent = document.querySelector('.contentWrapper');
const potdText = document.querySelector('.contentText');
const potdImage = document.querySelector('.contentImg');
const potdImg = document.querySelector('img');

//Garbage... doesn't work consistently




export default App;




// <p>
//   Read through the instructions in the README.md file to build your NASA
//   app! Have fun <span role="img" aria-label='go!'>🚀</span>!
// </p>