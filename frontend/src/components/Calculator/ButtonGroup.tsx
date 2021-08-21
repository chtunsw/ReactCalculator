import { type } from "os";
import React from "react";
import Button, { Props as ButtonProps } from "./Button";
import "./ButtonGroup.css";

type ButtonRow = ButtonProps[];

interface Props {
  buttonGroup: ButtonRow[];
}

const ButtonGroup = ({ buttonGroup }: Props) => {
  return (
    <div className="button-group-container">
      {buttonGroup.map((buttonRow, index) => (
        <div key={index}>
          {buttonRow.map((button) => (
            <Button
              key={button.name}
              name={button.name}
              type={button.type}
              size={button.size}
              action={button.action}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ButtonGroup;
