import React, { FC } from "react";
import CalculatorGui from "./CalculatorGui";
import "./Calculator.css";

const Calculator: FC = () => {
  return (
    <>
      <div className="calculatorContainer">
        <CalculatorGui />
      </div>
    </>
  );
};

export default Calculator;
