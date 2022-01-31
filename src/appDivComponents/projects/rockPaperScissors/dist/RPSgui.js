"use strict";
exports.__esModule = true;
exports.RPSgui = void 0;
var react_1 = require("react");
var RPScore_1 = require("./RPScore");
require("./RPSgui.css");
var RPSscoreScreen_1 = require("./RPSscoreScreen");
exports.RPSgui = function () {
    var _a = react_1.useState("Welkomen"), stageState = _a[0], setStageState = _a[1];
    var introScreen = (react_1["default"].createElement("div", { className: "introShape" },
        react_1["default"].createElement("div", { className: "intro" }, "Witaj w Naszej grze!"),
        react_1["default"].createElement("div", { className: "gameStarterButton", onClick: function () {
                setStageState("RPS");
            } },
            react_1["default"].createElement("button", { id: "enter" }, "Przejd\u017A do rozgrywki"))));
    var test1 = function (text) {
        console.log(text);
    };
    var changeTheStage = function () {
        if (stageState === "Welkomen") {
            return introScreen;
        }
        else if (stageState === "RPS") {
            return (react_1["default"].createElement(RPScore_1["default"], { postScoreInterface: setStageState, displayChildString: true }));
        }
        else if (stageState === "scoreScreen") {
            return react_1["default"].createElement(RPSscoreScreen_1["default"], null);
        }
    };
    return changeTheStage();
};
