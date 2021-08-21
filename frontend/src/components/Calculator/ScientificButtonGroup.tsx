import React from "react";
import { ButtonType, ButtonSize } from "./Button";
import ButtonGroup from "./ButtonGroup";
import "./ScientificButtonGroup.css";

const ScientificButtonGroup = () => {
  const basicButtonGroup = [
    [
      {
        name: "C",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "+/-",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "%",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "÷",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
    ],
    [
      {
        name: "7",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "8",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "9",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "×",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
    ],
    [
      {
        name: "4",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "5",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "6",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "-",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
    ],
    [
      {
        name: "1",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "2",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "3",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "+",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
    ],
    [
      {
        name: "0",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: ".",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "=",
        action: undefined,
        type: "scientific" as ButtonType,
        size: "small" as ButtonSize,
      },
    ],
  ];
  return (
    <div className="scientific-button-group">
      <ButtonGroup buttonGroup={basicButtonGroup} />
    </div>
  );
};

export default ScientificButtonGroup;
