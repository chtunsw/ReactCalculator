import React from "react";
import { ButtonType, ButtonSize } from "./Button";
import ButtonGroup from "./ButtonGroup";
import "./ScientificButtonGroup.css";

const ScientificButtonGroup = () => {
  const scientificButtonGroup = [
    [
      {
        name: "(",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: ")",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "mc",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "m+",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "m-",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "mr",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
    ],
    [
      {
        name: "2^{nd}",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "x^{2}",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "x^{3}",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "x^{y}",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "e^{x}",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "10^{x}",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
    ],
    [
      {
        name: "1/x",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "\\sqrt[2]{x}",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "\\sqrt[3]{x}",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "\\sqrt[y]{x}",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "ln",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "log_{10}",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
    ],
    [
      {
        name: "x!",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "sin",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "cos",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "tan",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "e",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "EE",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
    ],
    [
      {
        name: "Rad",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "sinh",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "cosh",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "tanh",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "\\pi",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "Rand",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
    ],
  ];
  return (
    <div className="scientific-button-group">
      <ButtonGroup buttonGroup={scientificButtonGroup} />
    </div>
  );
};

export default ScientificButtonGroup;
