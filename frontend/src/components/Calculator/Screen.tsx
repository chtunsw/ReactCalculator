import React from "react";
import "./Screen.css";

interface Props {
  value: string;
}

export default ({ value }: Props) => {
  return <div className="container">{value}</div>;
};
