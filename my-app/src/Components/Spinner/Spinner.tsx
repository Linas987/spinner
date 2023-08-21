import React, { useState } from "react";
import "./Spinner.css";
import Button from "../Button/Button";


function Card() {
  const [count, setCount] = useState(0);

  const handleSpin = () => {
    telegram.MainButton.text = "Pay :)";
    telegram.MainButton.show();
  };

  return (
    <div className="card">
      <div className="image__container">
        
      </div>

      <div className="btn-container">
        <Button title={"spin"} onClick={handleSpin} type={"spin"} />
      </div>
    </div>
  );
}

export default Card;