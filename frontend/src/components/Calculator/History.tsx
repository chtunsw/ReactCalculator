import React from "react";
import MathJax from "react-mathjax";
import "./History.css";

export interface Record {
  date: string;
  operation: string;
  result: string;
}

interface Props {
  records: Record[];
}

const History = ({ records }: Props) => {
  return (
    <MathJax.Provider>
      <div className="history-container">
        {records.map((record, index) => (
          <div className="history-record" key={index}>
            <div className={"history-operation"}>
              <MathJax.Node inline formula={record.operation} />
            </div>
            <div className={"history-result"}>
              <MathJax.Node inline formula={record.result} />
            </div>
          </div>
        ))}
      </div>
    </MathJax.Provider>
  );
};

export default History;
