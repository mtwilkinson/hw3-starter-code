import React from 'react';
import './App.css';
import {employeeFeedback} from "common/src/types";
import axios from "axios";

function App() {

  async function getData() {

    const data: employeeFeedback = {
      name: 'Mike',
      feedback: 'is an SA'
    }
    //sends a post request the /api/high-score
    const res = await axios.post("/api/example",data, {
      headers: {
        "Content-Type":"application/json"
      }
    });
    if(res.status === 200) {
      console.log("added feedback");
    }
    // const res = await axios.get("api/example");
  }

  async function postData() {
    const res = await axios.get("api/example");
    console.log(res.data);
  }

  return (
      <div className="App">
        <button onClick={getData}>post feedback</button>
        <button onClick={postData}>get feedback</button>
      </div>
  );
}

export default App;
