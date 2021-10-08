import { ButtonsObject } from "./ButtonsObject";
import './Calculator_gui.css'
import { useState } from "react";




const Calculator_gui = function() {

    const [actionDisplayValue, setActionDisplayValue] = useState<string>('');


    const arithmeticButtonAction = (operators: string) => {
        setActionDisplayValue(actionDisplayValue+operators)
    }


// jezli x bedzie '+' to ma sie wyswietlic w inpucie i czekac na wprowadzenie drugiego ciagu
    // po wprowadzeniu pierwszego ciagu i wcisnieciu 'plusa' ma zapisac pierwszy ciag liczb i zapamieta rodzaj dzialania (w 2 zmiennych)
    // podczas wpisywania drugiego ciagu liczb, poprzedni znika

    // po wpisaniu liczb ostatni klawisz dzialania determinuje wynik

    // po kliknieciu klawisza '=' programwykonuje dialania arytmetyczne na dwoch liczbach
    // rodzaj dzialan determinuje zapamietany/wpisany znak arytmetyczny i wyswietla w inpucie

    const AddValueToDisplay = (value:string) => {
        setActionDisplayValue(actionDisplayValue+value)
    }

    let ActiveArithmeticSign: string = ' ';
    let FirstSetOfNumbersForAction: string = ' ';

    const SaveArithmeticSign = (choosenSign:string) => {
        ActiveArithmeticSign = choosenSign;
    }

    const SaveDisplayValue = () => {
        
        FirstSetOfNumbersForAction = actionDisplayValue;
    }

    const arithmeticButtons
        = ButtonsObject.displayString.map(x => {
            if (x === '=') {
                return <div onClick={() => (AddValueToDisplay(x))} className='common-button wideButton'>{x}</div>
            }
            else {
                return <div onClick={() => (AddValueToDisplay(x))} className='common-button'>{x}</div>
            }
        })
    
    const numberButtons
        = ButtonsObject.displayNumbers.map(x => {
            if (x === '0') {
                return <div onClick={() => (setActionDisplayValue(actionDisplayValue + x))} className='common-button wideButton'>{x}</div>
            }
            else {
                return <div onClick={() => (setActionDisplayValue(actionDisplayValue + x))} className='common-button'>{x}</div>
            }
            
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