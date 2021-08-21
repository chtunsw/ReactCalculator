import React from "react";
import { ButtonType, ButtonSize } from "./Button";
import ButtonGroup from "./ButtonGroup";

const BasicButtonGroup = () => {
  const basicButtonGroup = [
    [
      {
        name: "C",
        action: undefined,
        type: "action" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "+/-",
        action: undefined,
        type: "action" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "%",
        action: undefined,
        type: "action" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "÷",
        action: undefined,
        type: "operator" as ButtonType,
        size: "small" as ButtonSize,
      },
    ],
    [
      {
        name: "7",
        action: undefined,
        type: "number" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "8",
        action: undefined,
        type: "number" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "9",
        action: undefined,
        type: "number" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "×",
        action: undefined,
        type: "operator" as ButtonType,
        size: "small" as ButtonSize,
      },
    ],
    [
      {
        name: "4",
        action: undefined,
        type: "number" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "5",
        action: undefined,
        type: "number" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "6",
        action: undefined,
        type: "number" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "-",
        action: undefined,
        type: "operator" as ButtonType,
        size: "small" as ButtonSize,
      },
    ],
    [
      {
        name: "1",
        action: undefined,
        type: "number" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "2",
        action: undefined,
        type: "number" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "3",
        action: undefined,
        type: "number" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "+",
        action: undefined,
        type: "operator" as ButtonType,
        size: "small" as ButtonSize,
      },
    ],
    [
      {
        name: "0",
        action: undefined,
        type: "number" as ButtonType,
        size: "large" as ButtonSize,
      },
      {
        name: ".",
        action: undefined,
        type: "operator" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "=",
        action: undefined,
        type: "operator" as ButtonType,
        size: "small" as ButtonSize,
      },
    ],
  ];
  return <ButtonGroup buttonGroup={basicButtonGroup} />;
};

export default BasicButtonGroup;
