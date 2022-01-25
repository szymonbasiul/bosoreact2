"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./RPSscoreScreen.css");
function RPSscoreScreen(props) {
    var scoreScreen = (react_1["default"].createElement("div", { className: "scoreShape" },
        react_1["default"].createElement("div", { className: "score" },
            "Dodaj swojego score'a!",
            react_1["default"].createElement("input", { type: "text", className: "write", id: "put-in" }),
            react_1["default"].createElement("input", { type: "text", className: "write", id: "put-in" }))));
    return react_1["default"].createElement("div", null, scoreScreen);
}
exports["default"] = RPSscoreScreen;
