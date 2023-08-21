import React, { FC } from "react";
import { ButtonParams } from "./IButton";
import './Button.css';
const Button: FC<ButtonParams> = (params) => {
  return (
    <button
      className={`btn ${
        (params.type === "spin" && "spin")
      }`}
      disabled={params.disable}
      onClick={params.onClick}
    >
      {params.title}
    </button>
  );
}

export default Button;