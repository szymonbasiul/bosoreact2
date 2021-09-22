import { ButtonsObject } from "./ButtonsObject";
import './Calculator_gui.css'
import { useState } from "react";




const Calculator_gui = function() {

    const [actionDisplayValue, setActionDisplayValue] = useState<string>('');





    const arithmeticButtons
        = ButtonsObject.displayString.map(x => {
            return <div className='common-button'>{x}</div>
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