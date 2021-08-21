import React from "react";
import "./Screen.css";

interface Props {
  value: string;
}

const Screen = ({ value }: Props) => {
  return (
    <div className="screen-container">
      <input className="screen-input" value={value} readOnly />
    </div>
  );
};

export default Screen;
