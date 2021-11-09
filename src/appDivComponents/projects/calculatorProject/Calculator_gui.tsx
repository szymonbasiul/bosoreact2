import { ButtonsObject } from "./ButtonsObject";
import './Calculator_gui.css'
import { useState } from "react";



interface TypesOfActionDisplayValue {
    firstSetOfNumbersForAction: string;
    activeArithmeticSign: string;
    secondSetOfNumbersForAction: string;
    resultForAction: number | undefined;
}

// interface ListOfObjects extends Array<TypesOfActionDisplayValue> { }

const Calculator_gui = function () {

    const [actionDisplayValue, setActionDisplayValue] = useState<TypesOfActionDisplayValue>({
        firstSetOfNumbersForAction:'0',
        activeArithmeticSign:' ',
        secondSetOfNumbersForAction:'',
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
        if (actionDisplayValue.firstSetOfNumbersForAction === '0') {
            setActionDisplayValue({ ...actionDisplayValue, ...{firstSetOfNumbersForAction: actionDisplayValue.firstSetOfNumbersForAction=value}})
        }
        else if (actionDisplayValue.activeArithmeticSign === ' ' && actionDisplayValue.firstSetOfNumbersForAction !== '0') {
            setActionDisplayValue({ ...actionDisplayValue, ...{firstSetOfNumbersForAction: actionDisplayValue.firstSetOfNumbersForAction+value } })
        }
        else {
            setActionDisplayValue({ ...actionDisplayValue, ...{secondSetOfNumbersForAction: actionDisplayValue.secondSetOfNumbersForAction+value}})
        }
    }

    const asignArithmeticSignToStateValue = (sign: string) => {
        setActionDisplayValue({ ...actionDisplayValue, ...{activeArithmeticSign: actionDisplayValue.activeArithmeticSign = sign}})
    }

    const clearState = () => {
        setActionDisplayValue({ ...actionDisplayValue, ...{firstSetOfNumbersForAction: '0', secondSetOfNumbersForAction: '', activeArithmeticSign:'=', resultForAction: 0 }})
    }

    const undoLastAction = () => {
        if (actionDisplayValue.activeArithmeticSign === " " && actionDisplayValue.resultForAction === 0){
            setActionDisplayValue({ ...actionDisplayValue, ...{firstSetOfNumbersForAction: actionDisplayValue.firstSetOfNumbersForAction = actionDisplayValue.firstSetOfNumbersForAction.substring(0, actionDisplayValue.firstSetOfNumbersForAction.length-1)}})
        }
        else if (actionDisplayValue.activeArithmeticSign !== "=" && actionDisplayValue.resultForAction === 0){
            setActionDisplayValue({ ...actionDisplayValue, ...{secondSetOfNumbersForAction: actionDisplayValue.secondSetOfNumbersForAction = actionDisplayValue.secondSetOfNumbersForAction.substring(0, actionDisplayValue.secondSetOfNumbersForAction.length-1)}})
         }
    //  else if (actionDisplayValue.resultForAction !== 0){
    //         return actionDisplayValue.resultForAction
    //      }
    }

    const doMathOperation = () => {
        const a = parseInt(actionDisplayValue.firstSetOfNumbersForAction)
        const b = parseInt(actionDisplayValue.secondSetOfNumbersForAction)
        switch (actionDisplayValue.activeArithmeticSign) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b;
        }
    }

    const asignMathOperationToResultForActionState = () => {
        setActionDisplayValue({ ...actionDisplayValue, ...{ resultForAction: actionDisplayValue.resultForAction = doMathOperation()}})
        // clearState()
    }

    const putResultIntoInputField = () => {
        if (actionDisplayValue.activeArithmeticSign === " " && actionDisplayValue.resultForAction === 0){
               return actionDisplayValue.firstSetOfNumbersForAction
            }
        else if (actionDisplayValue.activeArithmeticSign !== "=" && actionDisplayValue.resultForAction === 0){
               return actionDisplayValue.secondSetOfNumbersForAction
            }
        else if (actionDisplayValue.resultForAction !== 0){
               return actionDisplayValue.resultForAction
            }
    }

    const arithmeticButtons
        = ButtonsObject.displayString.map(x => {
            if (x === '=') {
                return <div key={x} onClick={() => { asignMathOperationToResultForActionState() }} className='common-button wideButton'>{x}</div>
            }
            else if (x === 'CE') {
                return <div key={x} onClick={() => { clearState() }} className='common-button'>{x}</div>
            }
            else if (x === 'C') {
                return <div key={x} onClick={() => { undoLastAction() }} className='common-button'>{x}</div>
            }
            else {
                return <div key={x} onClick={() => { asignArithmeticSignToStateValue(x) }} className='common-button'>{x}</div>
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
            <div className='input-field' >{ putResultIntoInputField() }</div>
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