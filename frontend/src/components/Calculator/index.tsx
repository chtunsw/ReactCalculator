import React, { useState } from "react";
import Screen from "./Screen";
import BasicButtonGroup from "./BasicButtonGroup";
import ScientificButtonGroup from "./ScientificButtonGroup";
import History from "./History";
import "./index.css";

const Calculator = () => {
  const [screenValue, setScreenValue] = useState("0");
  return (
    <div className="container">
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
