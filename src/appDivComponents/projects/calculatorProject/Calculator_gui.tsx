import { ButtonsObject } from "./ButtonsObject";
import './Calculator_gui.css'
import { useState } from "react";




const Calculator_gui = function() {

    const [actionDisplayValue, setActionDisplayValue] = useState<string>('');


    const arithmeticButtonAction = (operators: string) => {
        setActionDisplayValue(actionDisplayValue+operators)
    }



    const arithmeticButtons
        = ButtonsObject.displayString.map(x => {
            return <div onClick={()=>(arithmeticButtonAction(x))} className='common-button'>{x}</div>
        })
    const numberButtons
        = ButtonsObject.displayNumbers.map(x => {
            return <div onClick={()=>(setActionDisplayValue(actionDisplayValue+x))} className='common-button'>{x}</div>
        })
    return (
        <div className='calculatorShape'>
            <div className='input-field'>{ actionDisplayValue }</div>
            <div className="buttonFields">
            <div className='numberButtonContainer'>{numberButtons}</div>
            <div className='arithmeticButtonContainer'>{arithmeticButtons}</div>
            </div>
            <div className='enter-button'>enter button</div>
        </div>
    );
}

export default Calculator_gui;


/* 
1. Rozpoczecie dzialania po nacisnieciu guzika 
2. Wprowadzenie drugiej liczby
3. Pokaz wynik po kazdym dzialaniu
4. Wymaz wynik po nacisnieciu CE
*/