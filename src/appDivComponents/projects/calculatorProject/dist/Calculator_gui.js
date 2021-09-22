"use strict";
exports.__esModule = true;
var ButtonsObject_1 = require("./ButtonsObject");
require("./Calculator_gui.css");
var react_1 = require("react");
var Calculator_gui = function () {
    var _a = react_1.useState(0), actionDisplayValue = _a[0], setActionDisplayValue = _a[1];
    var arithmeticButtons = ButtonsObject_1.ButtonsObject.displayString.map(function (x) {
        return React.createElement("div", { className: 'common-button' }, x);
    });
    var numberButtons = ButtonsObject_1.ButtonsObject.displayNumbers.map(function (x) {
        return React.createElement("div", { className: 'common-button' }, x);
    });
    return (React.createElement("div", { className: 'calculatorShape' },
        React.createElement("div", { className: 'input-field' }, "pole z wynikiem"),
        React.createElement("div", { className: "buttonFields" },
            React.createElement("div", { className: 'numberButtonContainer' }, numberButtons),
            React.createElement("div", { className: 'arithmeticButtonContainer' }, arithmeticButtons)),
        React.createElement("div", { className: 'enter-button' }, "enter button")));
};
exports["default"] = Calculator_gui;
