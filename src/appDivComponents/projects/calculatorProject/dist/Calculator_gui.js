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
    var arithmeticButtons = ButtonsObject_1.ButtonsObject.displayString.map(function (x) {
        if (x === '=') {
            return React.createElement("div", { onClick: function () { return (setActionDisplayValue(actionDisplayValue + x)); }, className: 'common-button wideButton' }, x);
        }
        else {
            return React.createElement("div", { onClick: function () { return (arithmeticButtonAction(x)); }, className: 'common-button' }, x);
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
