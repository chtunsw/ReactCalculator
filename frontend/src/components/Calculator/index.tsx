import React, { useState } from "react";
import Screen from "./Screen";
import BasicButtonGroup from "./BasicButtonGroup";
import ScientificButtonGroup from "./ScientificButtonGroup";
import History, { Record } from "./History";
import "./index.css";

type Operator = "+" | "-" | "*" | "/";
type NumberPointer = "result" | "optNumber";

const Calculator = () => {
  const [result, setResult] = useState("0");
  const [operator, setOperator] = useState<Operator | null>(null);
  const [optNumber, setOptNumber] = useState<string | null>(null);
  const [numberPointer, setNumberPointer] = useState<NumberPointer>("result");
  const [records, setRecords] = useState<Record[]>([]);
  const [screenValue, setScreenValue] = useState("0");
  return (
    <div className="calculator-container">
      <Screen value={screenValue} />
      <div>
        <ScientificButtonGroup />
        <BasicButtonGroup />
      </div>
      <History />
    </div>
  );
};

export default Calculator;
