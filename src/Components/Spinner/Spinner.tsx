import "./Spinner.css";
import Button from "../Button/Button";
import { telegram } from "../../Telegram/config";
import { Wheel } from 'react-custom-roulette';
import { useState } from "react";

const data = [
  { option: '0', style: { backgroundColor: 'green', textColor: 'black' } },
  { option: '1', style: { backgroundColor: 'white' } },
  { option: '2' },
]

function Card() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  
  const handleSpin = () => {
    telegram.MainButton.text = "You spinned";
    telegram.MainButton.show();
  };

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  }

  return (
    <div className="card">
      <div>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}

        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />
      </div>

      <div className="btn-container">
        <Button title={"spin"} onClick={handleSpinClick} type={"spin"} />
      </div>
    </div>
  );
}

export default Card;