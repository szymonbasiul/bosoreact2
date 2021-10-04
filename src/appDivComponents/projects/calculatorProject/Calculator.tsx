import React, { useState, useEffect, FC } from 'react';
import Calculator_gui from './Calculator_gui';
import './Calculator.css';





const Calculator: FC = () => {
    return (
        <>
        
        <div className="calculatorContainer">
        <Calculator_gui />
        </div>
        </>
        
    )


}

export default Calculator;


