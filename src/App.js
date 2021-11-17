import React from "react";
import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [image, setImage] = useState("");
  const clientId = "x82vIePhkV7BJIYN10AYmmNUamjxbZSubRtdVxcw8Is";
  const [result, setResult] = useState([]);
  const handleChange = (event) => {
    setImage(event.target.value);
  };
  const handleSubmit = () => {
    console.log(image);
    const url =
      "https://api.unsplash.com/search/photos?page=1&query=" +
      image +
      "&client_id=" +
      clientId;
    axios.get(url).then((response) => {
      console.log(response);
      setResult(response.data.results);
    });
  };
  return (
    <div className="App">
      <div className="container">
        <div className="input">
          <input
            onChange={handleChange}
            type="text"
            name="image"
            className="input1"
            placeholder="Search for images"
          />
          <button onClick={handleSubmit} type="submit" className="btn">
            Search
          </button>
        </div>

        <div className="result">
          {result.map((image) => (
            <>
              <div className="card" key={image.id}>
                <img
                  alt={image.alt_description}
                  src={image.urls.full}
                  className="card--image"
                  width="50%"
                  height="50%"
                />
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
