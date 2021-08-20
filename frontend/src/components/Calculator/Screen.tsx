import React from "react";
import "./Screen.css";

interface Props {
  value: string;
}

const Screen = ({ value }: Props) => {
  return <div className="screen-container">{value}</div>;
};

export default Screen;
