import { ButtonsObject } from "./ButtonsObject";
import './Calculator_gui.css'
import { useState } from "react";



interface TypesOfActionDisplayValue {
    firstSetOfNumbersForAction: string;
    activeArithmeticSign: string;
    secondSetOfNumbersForAction: string;
    resultForAction: number;
}

// interface ListOfObjects extends Array<TypesOfActionDisplayValue> { }

const Calculator_gui = function () {

    const [actionDisplayValue, setActionDisplayValue] = useState<TypesOfActionDisplayValue>({
        firstSetOfNumbersForAction:'0',
        activeArithmeticSign:' ',
        secondSetOfNumbersForAction:' ',
        resultForAction: 0
    });

    // const dodajLiczbe = () => {
    //     setActionDisplayValue({})
    // }


    // const arithmeticButtonAction = (operators: string) => {
    //     setActionDisplayValue(actionDisplayValue + operators)
    // }


    // jezli x bedzie '+' to ma sie wyswietlic w inpucie i czekac na wprowadzenie drugiego ciagu
    // po wprowadzeniu pierwszego ciagu i wcisnieciu 'plusa' ma zapisac pierwszy ciag liczb w FirstSetOfNumbers i zapamietac sign dzialania, a nastepnie przejsc do zapisywania w SecondSetOfNumbers
    // podczas wpisywania drugiego ciagu liczb, poprzedni znika

    // po wpisaniu liczb ostatni klawisz dzialania determinuje wynik

    // po kliknieciu klawisza '=' program wykonuje dialania arytmetyczne na dwoch liczbach
    // rodzaj dzialan determinuje zapamietany/wpisany znak arytmetyczny i wyswietla w inpucie

    const addValueToDisplay = (value: string) => {
        if (actionDisplayValue.activeArithmeticSign === ' ') {
            setActionDisplayValue({ ...actionDisplayValue, ...{firstSetOfNumbersForAction: actionDisplayValue.firstSetOfNumbersForAction+value } })
        }
        else {
            setActionDisplayValue({ ...actionDisplayValue, ...{secondSetOfNumbersForAction: actionDisplayValue.secondSetOfNumbersForAction+value}})
        }
    }

    const doMathOperation = (sign: string) => {
        setActionDisplayValue({ ...actionDisplayValue, ...{activeArithmeticSign: actionDisplayValue.activeArithmeticSign = sign}})
    }

    const resolveOperation = () => {
        const a = actionDisplayValue.firstSetOfNumbersForAction
        const b = actionDisplayValue.secondSetOfNumbersForAction
        setActionDisplayValue({ ...actionDisplayValue, ...{resultForAction: parseInt(a)+parseInt(b)}})

        setActionDisplayValue({ ...actionDisplayValue, ...{firstSetOfNumbersForAction: '0', secondSetOfNumbersForAction: '', activeArithmeticSign:''}})
    }

    const inputFieldResult = () => {
        if (actionDisplayValue.activeArithmeticSign === " "){
               return actionDisplayValue.firstSetOfNumbersForAction
            }
        else if (actionDisplayValue.activeArithmeticSign !== "="){
               return actionDisplayValue.secondSetOfNumbersForAction
            }
        else {
               return actionDisplayValue.resultForAction
            }
    }

    const arithmeticButtons
        = ButtonsObject.displayString.map(x => {
            if (x === '=') {
                return <div key={x} onClick={() => { resolveOperation() }} className='common-button wideButton'>{x}</div>
            }
            else {
                return <div key={x} onClick={() => { doMathOperation(x) }} className='common-button'>{x}</div>
            }
        })

    const numberButtons
        = ButtonsObject.displayNumbers.map(x => {
            if (x === '0') {
                return <div key={x} onClick={() => { addValueToDisplay(x) }} className='common-button wideButton'>{x}</div>
            }
            else {
                return <div key={x} onClick={() => { addValueToDisplay(x) }} className='common-button'>{x}</div>
            }

        })
    return (
        <div className='calculatorShape'>
            <div className='input-field'>{ inputFieldResult() }</div>
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