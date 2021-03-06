import React, { useState } from "react";
import moment from "moment";
import Screen from "./Screen";
import BasicButtonGroup, { ActionName } from "./BasicButtonGroup";
import ScientificButtonGroup from "./ScientificButtonGroup";
import History, { Record } from "./History";
import "./index.css";

type Operator = "+" | "-" | "\\times" | "\\div";
type NumberPointer = "result" | "optNumber";

const HISTORY_KEEPING_DAYS = 7;

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
  const [screenValue, setScreenValue] = useState("0");
  const today = moment(new Date());
  const todayString = today.format("YYYY-MM-DD");
  const calculatorHistory = localStorage.getItem("calculatorHistory");
  let historyRecords: Record[] =
    (calculatorHistory && JSON.parse(calculatorHistory)) || [];
  const filteredRecords = historyRecords.filter(
    (record) => today.diff(moment(record.date), "days") <= HISTORY_KEEPING_DAYS
  );
  const [records, setRecords] = useState<Record[]>(filteredRecords);

  const getNumAndSetNum = (
    numberPointer: NumberPointer
  ): [string | null, React.Dispatch<React.SetStateAction<string | null>>] => {
    if (numberPointer === "result") {
      return [result, setResult];
    } else {
      return [optNumber, setOptNumber];
    }
  };

  const reset = () => {
    setResult("0");
    setOperator(null);
    setOptNumber(null);
    setNumberPointer("result");
    setScreenValue("0");
  };

  const addRecord = (record: Record) => {
    const updatedRecords = [record, ...records];
    setRecords(updatedRecords);
    localStorage.setItem("calculatorHistory", JSON.stringify(updatedRecords));
  };

  const useAction = (actionName: ActionName) => () => {
    const [num, setNum] = getNumAndSetNum(numberPointer);
    if (actionName === "C") {
      reset();
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
        const newRecord = {
          date: todayString,
          operation: `${result} ${operator} ${optNumber} =`,
          result: String(newRes),
        };
        addRecord(newRecord);
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
      if (num !== null && !num.includes("Infinity") && !num.includes(".")) {
        setNum(num + ".");
        setScreenValue(num + ".");
      }
    } else {
      if (num === "0" || num === "Infinity" || num === null) {
        setNum(actionName);
        setScreenValue(actionName);
      } else if (num === "-0" || num === "-Infinity") {
        setNum("-" + actionName);
        setScreenValue("-" + actionName);
      } else {
        setNum(num + actionName);
        setScreenValue(num + actionName);
      }
    }
  };
  return (
    <div className="calculator-container">
      {/* FOR DEBUG ONLY */}
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
      <History records={records} />
    </div>
  );
};

export default Calculator;
