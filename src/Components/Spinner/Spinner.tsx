import "./Spinner.css";
import Button from "../Button/Button";
import { telegram } from "../../Telegram/config";


function Card() {
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