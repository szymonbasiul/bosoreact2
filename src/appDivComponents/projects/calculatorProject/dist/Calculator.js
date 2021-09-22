"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Calculator_gui_1 = require("./Calculator_gui");
require("./Calculator.css");
var Calculator = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "calculatorButton" }, "Button1"),
        react_1["default"].createElement("div", { className: "calculatorContainer" },
            react_1["default"].createElement(Calculator_gui_1["default"], null))));
};
exports["default"] = Calculator;
/* przyklad */
// const Calculator: FC = ({currentChildHref, parentState}) => {
//     useEffect(() => {
//         parentState !== (window.location.href).substr(21) &&
//     currentChildHref((window.location.href).substr(21));
//     },[currentChildHref, parentState])
//     const [calculatorDisplay, setCalculatorDisplay] = useState({x:0, y:0, z:'', q:''});
//     const randomizedNumberPlusS = () => {
//         if (setRandomizeButtons) {
//             return Math.floor(Math.random() * 10).toString() + "s"
//         };
//     }
//     const stateModifier = (vx=0, vy=0, vz='', vq='') => {
//         return { x:  vx , y:  vy , z: vz, q: vq}
//     }
//     const mathOperation = (numberA, numberB, operator) => {
//         if (operator === '+') {
//             return numberA + numberB;
//         } else if (operator === '-') {
//             return numberA - numberB;
//         } else if (operator === '*') {
//             return numberA * numberB;
//         } else if (operator === '÷') {
//             return numberA / numberB;
//         } else {
//             return numberB;
//         }
//     }
//     const operatorCheck = (operator) => {
//         (operator === 'plus') ? (
//             setCalculatorDisplay(stateModifier(calculatorDisplay.x, calculatorDisplay.x, '+','+'))
//         ) : (operator === 'minus') ? (
//             setCalculatorDisplay(stateModifier(calculatorDisplay.x, calculatorDisplay.x, '-','-'))
//         ) : (operator === 'x') ? (
//             setCalculatorDisplay(stateModifier(calculatorDisplay.x, calculatorDisplay.x, '*','*'))
//         ) : (operator === 'divide') ? (
//             setCalculatorDisplay(stateModifier(calculatorDisplay.x, calculatorDisplay.x, '÷','÷'))
//         ) : (operator === 'equals') && (
//             setCalculatorDisplay(stateModifier(mathOperation(calculatorDisplay.y, (parseInt(calculatorDisplay.x)), calculatorDisplay.q)))
//         )
//     }
//     useEffect(() => {
//         (typeof(calculatorDisplay.x) === `string` && calculatorDisplay.z) && (
//             setCalculatorDisplay(stateModifier(parseInt(calculatorDisplay.x), parseInt(calculatorDisplay.x), calculatorDisplay.z, calculatorDisplay.q))
//         )
//     }, [calculatorDisplay])
//     const buttonTrigger = (event) => {
//         const buttonAlt = event.target.alt;
//         (buttonAlt === 'c') && (setCalculatorDisplay(stateModifier(0)))
//         operatorCheck(buttonAlt);
//         (!isNaN(buttonAlt)) && (
//             (calculatorDisplay.z)
//             ? setCalculatorDisplay(stateModifier(buttonAlt, calculatorDisplay.y, '', calculatorDisplay.q))
//             : setCalculatorDisplay(stateModifier(calculatorDisplay.x+buttonAlt, calculatorDisplay.y, calculatorDisplay.z, calculatorDisplay.q))
//         )
//     }
//     (calculatorDisplay.x.length === 2 && calculatorDisplay.x.charAt(0) === '0')
//         && setCalculatorDisplay(stateModifier(calculatorDisplay.x.substring(1)))
//     const buttonValues = [7, 8, 9, 'plus', 4, 5, 6, 'minus', 1, 2, 3, 'x', 'c', 0, 'equals', 'divide'];
//     const calculatorConstructor2 = () => {
//         return buttonValues.map(x => {
//             return (<div className="cal-btn" key={x}
//                 style={{ animationDuration: randomizedNumberPlusS() }}>
//                 <img alt={x} onClick={ e => buttonTrigger(e) } src={require(`../../../img/cb_${x}.jpg`).default } />
//             </div>)
//             }
//         )
//     }
//     const calculatorConstructor = (<div className="calculator-container">
//         <div className="calculator">
//             <div className="calc-body">
//                 <input id="display" type="text" name="display"
//                     value={`${calculatorDisplay.z} ${calculatorDisplay.x}`} readOnly={true} />
//                 <>{calculatorConstructor2()}</>
//             </div>
//         </div>
//     </div>)
//     return calculatorConstructor;
// }
