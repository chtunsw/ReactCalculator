import React, { useState } from "react";
import Screen from "./Screen";
import BasicButtonGroup, { ActionName } from "./BasicButtonGroup";
import ScientificButtonGroup from "./ScientificButtonGroup";
import History, { Record } from "./History";
import "./index.css";

type Operator = "+" | "-" | "\\times" | "\\div";
type NumberPointer = "result" | "optNumber";

const executeOperation = (a: number, b: number, operator: Operator) => {
  if (operator === "+") {
    return a + b;
  } else if (operator === "-") {
    return a - b;
  } else if (operator === "\\times") {
    return a * b;
  } else {
    return a / b;
  }
};

const Calculator = () => {
  const [result, setResult] = useState<string | null>("0");
  const [operator, setOperator] = useState<Operator | null>(null);
  const [optNumber, setOptNumber] = useState<string | null>(null);
  const [numberPointer, setNumberPointer] = useState<NumberPointer>("result");
  const [records, setRecords] = useState<Record[]>([]);
  const [screenValue, setScreenValue] = useState("0");

  const getNumAndSetNum = (
    numberPointer: NumberPointer
  ): [string | null, React.Dispatch<React.SetStateAction<string | null>>] => {
    if (numberPointer === "result") {
      return [result, setResult];
    } else {
      return [optNumber, setOptNumber];
    }
  };

  const useAction = (actionName: ActionName) => () => {
    const [num, setNum] = getNumAndSetNum(numberPointer);
    if (actionName === "C") {
      setResult("0");
      setOperator(null);
      setOptNumber(null);
      setNumberPointer("result");
      setScreenValue("0");
    } else if (actionName === "+/-") {
      if (num !== null) {
        if (num[0] !== "-") {
          setNum("-" + num);
          setScreenValue("-" + num);
        } else {
          setNum(num.slice(1));
          setScreenValue(num.slice(1));
        }
      }
    } else if (actionName === "\\%") {
      if (num !== null) {
        setNum(String(Number(num) / 100));
        setScreenValue(String(Number(num) / 100));
      }
    } else if (
      actionName === "=" ||
      actionName === "+" ||
      actionName === "-" ||
      actionName === "\\times" ||
      actionName === "\\div"
    ) {
      if (result !== null && optNumber !== null && operator !== null) {
        const newRes = executeOperation(
          Number(result),
          Number(optNumber),
          operator
        );
        setResult(String(newRes));
        setOperator(null);
        setOptNumber(null);
        setScreenValue(String(newRes));
      }
      if (actionName === "=") {
        setNumberPointer("result");
      } else {
        setOperator(actionName);
        setNumberPointer("optNumber");
      }
    } else if (actionName === ".") {
      if (num !== null && !num.includes(".")) {
        setNum(num + ".");
        setScreenValue(num + ".");
      }
    } else {
      if (num === "0" || num === "-0" || num === null) {
        setNum(actionName);
        setScreenValue(actionName);
      } else {
        setNum(num + actionName);
        setScreenValue(num + actionName);
      }
    }
  };
  return (
    <div className="calculator-container">
      {/* <div
        style={{
          color: "white",
        }}
      >
        <div>result: {result}</div>
        <div>operator: {operator}</div>
        <div>optNumber: {optNumber}</div>
        <div>numberPointer: {numberPointer}</div>
        <div>screenValue: {screenValue}</div>
      </div> */}
      <Screen value={screenValue} />
      <div>
        <ScientificButtonGroup />
        <BasicButtonGroup useAction={useAction} />
      </div>
      <History />
    </div>
  );
};

export default Calculator;
