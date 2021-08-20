import React from "react";
import "./Button.css";

interface Props {
  name: string;
  action: () => void;
}

const Button = ({ name, action }: Props) => {
  return (
    <div className="container" onClick={action}>
      {name}
    </div>
  );
};

export default Button;
