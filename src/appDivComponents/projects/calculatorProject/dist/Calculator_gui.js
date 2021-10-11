"use strict";
exports.__esModule = true;
var ButtonsObject_1 = require("./ButtonsObject");
require("./Calculator_gui.css");
var react_1 = require("react");
var Calculator_gui = function () {
    var _a = react_1.useState(''), actionDisplayValue = _a[0], setActionDisplayValue = _a[1];
    var arithmeticButtonAction = function (operators) {
        setActionDisplayValue(actionDisplayValue + operators);
    };
    // jezli x bedzie '+' to ma sie wyswietlic w inpucie i czekac na wprowadzenie drugiego ciagu
    // po wprowadzeniu pierwszego ciagu i wcisnieciu 'plusa' ma zapisac pierwszy ciag liczb i zapamieta rodzaj dzialania (w 2 zmiennych)
    // podczas wpisywania drugiego ciagu liczb, poprzedni znika
    // po wpisaniu liczb ostatni klawisz dzialania determinuje wynik
    // po kliknieciu klawisza '=' programwykonuje dialania arytmetyczne na dwoch liczbach
    // rodzaj dzialan determinuje zapamietany/wpisany znak arytmetyczny i wyswietla w inpucie
    var AddValueToDisplay = function (value) {
        setActionDisplayValue(actionDisplayValue + value);
    };
    var ActiveArithmeticSign = ' ';
    var FirstSetOfNumbersForAction = ' ';
    var ClearInputDisplay = function () {
        setActionDisplayValue('0');
    };
    var SaveDisplayValue = function (choosenSign) {
        ActiveArithmeticSign = choosenSign;
        FirstSetOfNumbersForAction = actionDisplayValue;
        AddValueToDisplay(choosenSign);
    };
    var arithmeticButtons = ButtonsObject_1.ButtonsObject.displayString.map(function (x) {
        if (x === '=') {
            return React.createElement("div", { onClick: function () { return (AddValueToDisplay(x)); }, className: 'common-button wideButton' }, x);
        }
        else {
            return React.createElement("div", { onClick: function () { return (SaveDisplayValue(x)); }, className: 'common-button' }, x);
        }
    });
    var numberButtons = ButtonsObject_1.ButtonsObject.displayNumbers.map(function (x) {
        if (x === '0') {
            return React.createElement("div", { onClick: function () { return (setActionDisplayValue(actionDisplayValue + x)); }, className: 'common-button wideButton' }, x);
        }
        else {
            return React.createElement("div", { onClick: function () { return (setActionDisplayValue(actionDisplayValue + x)); }, className: 'common-button' }, x);
        }
    });
    return (React.createElement("div", { className: 'calculatorShape' },
        React.createElement("div", { className: 'input-field' }, actionDisplayValue),
        React.createElement("div", { className: "buttonFields" },
            React.createElement("div", { className: 'numberButtonContainer' }, numberButtons),
            React.createElement("div", { className: 'arithmeticButtonContainer' }, arithmeticButtons)),
        React.createElement("div", { className: 'enter-button' }, "enter button")));
};
exports["default"] = Calculator_gui;
/*
1. Rozpoczecie dzialania po nacisnieciu guzika
2. Wprowadzenie drugiej liczby
3. Pokaz wynik po kazdym dzialaniu
4. Wymaz wynik po nacisnieciu CE
*/ 
