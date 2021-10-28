import { ButtonsObject } from "./ButtonsObject";
import './Calculator_gui.css'
import { useState } from "react";



interface TypesOfActionDisplayValue {
    FirstSetOfNumbersForAction: string;
    ActiveArithmeticSign: string;
    SecondSetOfNumbersForAction: string;
}

// interface ListOfObjects extends Array<TypesOfActionDisplayValue> { }

const Calculator_gui = function () {

    const [actionDisplayValue, setActionDisplayValue] = useState<TypesOfActionDisplayValue>({
        FirstSetOfNumbersForAction: '0',
        ActiveArithmeticSign: ' ',
        SecondSetOfNumbersForAction: ' '
    });

    // const dodajLiczbe = () => {
    //     setActionDisplayValue({})
    // }


    // const arithmeticButtonAction = (operators: string) => {
    //     setActionDisplayValue(actionDisplayValue + operators)
    // }


    // jezli x bedzie '+' to ma sie wyswietlic w inpucie i czekac na wprowadzenie drugiego ciagu
    // po wprowadzeniu pierwszego ciagu i wcisnieciu 'plusa' ma zapisac pierwszy ciag liczb i zapamieta rodzaj dzialania (w 2 zmiennych)
    // podczas wpisywania drugiego ciagu liczb, poprzedni znika

    // po wpisaniu liczb ostatni klawisz dzialania determinuje wynik

    // po kliknieciu klawisza '=' program wykonuje dialania arytmetyczne na dwoch liczbach
    // rodzaj dzialan determinuje zapamietany/wpisany znak arytmetyczny i wyswietla w inpucie

    const addValueToDisplay = (value: string) => {
        if (actionDisplayValue.ActiveArithmeticSign === ' ') {
            setActionDisplayValue({ ...actionDisplayValue, ...{ FirstSetOfNumbersForAction: actionDisplayValue.FirstSetOfNumbersForAction + value } })
        }
        else if (actionDisplayValue.ActiveArithmeticSign === '+') {
            setActionDisplayValue({...actionDisplayValue, ...{ FirstSetOfNumbersForAction: actionDisplayValue.FirstSetOfNumbersForAction + '+'}})
        }
        else {
            setActionDisplayValue({ ...actionDisplayValue, ...{FirstSetOfNumbersForAction: actionDisplayValue.FirstSetOfNumbersForAction = value}})
        }
    }

    // KOPIA ZAPASOWA - Version 1
    // .............................
    // const addValueToDisplay = (value: string) => {
    //     if (actionDisplayValue.ActiveArithmeticSign === ' ') {
    //         setActionDisplayValue(() => {
    //         actionDisplayValue.FirstSetOfNumbersForAction += value;
    //             console.log(actionDisplayValue);
    //             return actionDisplayValue;
    //         })
    //     }
    //     else {
    //         setActionDisplayValue(() => {
    //             actionDisplayValue.FirstSetOfNumbersForAction = value;
    //             return actionDisplayValue;
    //         })
    //     }
    // }

    const doMathOperation = () => {
        
    }


    // const ClearInputDisplay = () => {
    //     setActionDisplayValue('0')
    // }

    // function saveDisplayValue(choosenSign: string) {
    //     // FirstSetOfNumbersForAction = actionDisplayValue;
    //     setActionDisplayValue(() => {
    //         actionDisplayValue.FirstSetOfNumbersForAction = actionDisplayValue;
    //         return actionDisplayValue;
    // })
    //     ActiveArithmeticSign = choosenSign;
    // }


    // const arithmeticSignAction = (choosenSign:string) => {
    //     saveDisplayValue(choosenSign);
    //     addValueToDisplay(choosenSign)
    // }

    // const equalActionDisplay = (value: string) => {
    //     console.log();

    // }

    const arithmeticButtons
        = ButtonsObject.displayString.map(x => {
            if (x === '=') {
                return <div key={x} onClick={() => { doMathOperation() }} className='common-button wideButton'>{x}</div>
            }
            else if (x === '+') {
                return <div key={x} onClick={() => { addValueToDisplay(x) }} className='common-button'>{x}</div>
            }
            else {
                return <div key={x} onClick={() => {}} className='common-button'>{x}</div>
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
            <div className='input-field'>{ actionDisplayValue.FirstSetOfNumbersForAction }</div>
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