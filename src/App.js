import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  const [advice, setadvice] = useState();
  useEffect(() => {
    const fetchdata = async function () {
      const response = await axios.get("https://api.adviceslip.com/advice");

      const {
        data: {
          slip: { advice },
        },
      } = response;
      return advice;
    };
    fetchdata()
      .then((data) => {
        setadvice(data);
      })
      .catch((error) => console.log(error));
  }, [advice]);

  const handleclick = () => {
    setadvice("");
  };

  return (
    <div className="app">
      <div className="card">
        <h1>{advice}</h1>
        <button onClick={handleclick} className="button">
          <span>Give me advice</span>
        </button>
      </div>
    </div>
  );
}
