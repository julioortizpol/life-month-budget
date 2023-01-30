import './App.css';
import {useEffect, useState} from "react";
import axios from 'axios'
const baseURL = "http://localhost:8000/api/expenses/resume/63d44d1802556286894e3c51";
function App() {

  useEffect(() => {
    axios.get(baseURL).then((response) => {
     console.log(response)
    });
  }, []);
  
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  );
}

export default App;
