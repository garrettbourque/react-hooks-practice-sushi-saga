import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi, setSushi] = useState([]

  )

  useEffect(() =>{
    fetch(API)
    .then(resp => resp.json())
    .then(data => setSushi(data))
  },[] )

  return (
    <div className="app">
      <SushiContainer sushi={sushi}/>
      <Table />
    </div>
  );
}

export default App;
