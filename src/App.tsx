import { Map } from "components/Map"
import { fromLonLat } from "ol/proj";
import { useState } from "react";
import './App.css'

function App() {
  const [center, setCenter] = useState([-94.9065, 38.9884]);
  const handleClick = () => {
    setCenter([-73.99, 40.41]);
  }
  
  return (
    <div className="App">
      <Map center={fromLonLat(center)}/>
      <div className="geo-form">
        <input className="geo-form__input"/>
        <button className="geo-form__btn" onClick={handleClick}>Submit</button>
      </div>
    </div>
  );
}

export default App;
