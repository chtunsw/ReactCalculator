import React, { useState } from "react";
import Screen from "./Screen";
import BasicButtonGroup, { ActionName } from "./BasicButtonGroup";
import ScientificButtonGroup from "./ScientificButtonGroup";
import History, { Record } from "./History";
import "./index.css";

type Operator = "+" | "-" | "*" | "/";
type NumberPointer = "result" | "optNumber";

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
    }
  };
  return (
    <div className="calculator-container">
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
