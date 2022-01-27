"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./RPSscoreScreen.css");
function RPSscoreScreen(props) {
    var scoreScreen = (react_1["default"].createElement("div", { className: "scoreShape" },
        react_1["default"].createElement("div", { className: "score" },
            "Players Scoreboard",
            react_1["default"].createElement("div", { className: "userScore" },
                react_1["default"].createElement("label", { className: "lName" }, "Your Nickname"),
                react_1["default"].createElement("input", { type: "text", className: "write", id: "put-in" })))));
    return react_1["default"].createElement("div", null, scoreScreen);
}
exports["default"] = RPSscoreScreen;
