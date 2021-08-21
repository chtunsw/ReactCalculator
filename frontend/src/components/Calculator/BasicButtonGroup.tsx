import React from "react";
import { ButtonType, ButtonSize } from "./Button";
import ButtonGroup from "./ButtonGroup";

export type ActionName =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "C"
  | "+/-"
  | "\\%"
  | "\\div"
  | "\\times"
  | "-"
  | "+"
  | "="
  | ".";

interface Props {
  useAction: (actionName: ActionName) => () => void;
}

const BasicButtonGroup = ({ useAction }: Props) => {
  const basicButtonGroup = [
    [
      {
        name: "C",
        action: useAction("C"),
        type: "action" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "+/-",
        action: useAction("+/-"),
        type: "action" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "\\%",
        action: useAction("\\%"),
        type: "action" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "\\div",
        action: useAction("\\div"),
        type: "operator" as ButtonType,
        size: "small" as ButtonSize,
      },
    ],
    [
      {
        name: "7",
        action: useAction("7"),
        type: "number" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "8",
        action: useAction("8"),
        type: "number" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "9",
        action: useAction("9"),
        type: "number" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "\\times",
        action: useAction("\\times"),
        type: "operator" as ButtonType,
        size: "small" as ButtonSize,
      },
    ],
    [
      {
        name: "4",
        action: useAction("4"),
        type: "number" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "5",
        action: useAction("5"),
        type: "number" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "6",
        action: useAction("6"),
        type: "number" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "-",
        action: useAction("-"),
        type: "operator" as ButtonType,
        size: "small" as ButtonSize,
      },
    ],
    [
      {
        name: "1",
        action: useAction("1"),
        type: "number" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "2",
        action: useAction("2"),
        type: "number" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "3",
        action: useAction("3"),
        type: "number" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "+",
        action: useAction("+"),
        type: "operator" as ButtonType,
        size: "small" as ButtonSize,
      },
    ],
    [
      {
        name: "0",
        action: useAction("0"),
        type: "number" as ButtonType,
        size: "large" as ButtonSize,
      },
      {
        name: ".",
        action: useAction("."),
        type: "operator" as ButtonType,
        size: "small" as ButtonSize,
      },
      {
        name: "=",
        action: useAction("="),
        type: "operator" as ButtonType,
        size: "small" as ButtonSize,
      },
    ],
  ];
  return <ButtonGroup buttonGroup={basicButtonGroup} />;
};

export default BasicButtonGroup;
