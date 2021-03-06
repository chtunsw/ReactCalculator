import React from "react";
import MathJax from "react-mathjax";
import "./Button.css";

export type ButtonType = "number" | "operator" | "action" | "scientific";
export type ButtonSize = "small" | "large";

export interface Props {
  name: string;
  type?: ButtonType;
  size?: ButtonSize;
  action?: () => void;
}

const getButtonBodyClassName = (type: ButtonType, size: ButtonSize) => {
  const baseClassName = "button-body";
  let typeClassName = "";
  let sizeClassName = "";
  if (type === "operator") {
    typeClassName = "button-operator";
  } else if (type === "action") {
    typeClassName = "button-action";
  } else if (type === "scientific") {
    typeClassName = "button-scientific";
  } else {
    typeClassName = "button-number";
  }
  if (size === "large") {
    sizeClassName = "button-large";
  } else {
    sizeClassName = "button-small";
  }
  const bodyClassName = `${baseClassName} ${typeClassName} ${sizeClassName}`;
  return bodyClassName;
};

const Button = ({ name, type = "number", size = "small", action }: Props) => {
  return (
    <MathJax.Provider>
      <div className="button-container" onClick={action}>
        <div className={getButtonBodyClassName(type, size)}>
          <span>
            <MathJax.Node inline formula={name} />
          </span>
        </div>
      </div>
    </MathJax.Provider>
  );
};

export default Button;
