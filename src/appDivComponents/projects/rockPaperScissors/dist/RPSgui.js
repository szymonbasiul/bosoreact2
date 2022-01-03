"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./RPS_gui.css");
var RPSgui = function () {
    var rpsObject = {
        rock: false,
        paper: false,
        scissors: false
    };
    var _a = react_1.useState(rpsObject), rockPaperScissorsState = _a[0], setRockPaperScissorsState = _a[1];
    // const answerTrigger = () => {
    // 	document.getElementById('rps')?.setAttribute("class", "rpsActionButtonClicked")
    // }
    // const saveMyHandToPlayWithCPU = () => {
    // 	rockPaperScissorsState =
    // }
    var getKeyValue = function (obj) {
        return function (key) {
            return obj[key];
        };
    };
    var toggleClickedRps = function (clickedElement) {
        return getKeyValue(rpsObject)(clickedElement);
    };
    console.log(toggleClickedRps("rock"));
    var _b = react_1.useState("Welkomen"), stageState = _b[0], setStageState = _b[1];
    var game = (React.createElement("div", { className: "rpsShape" },
        React.createElement("div", { id: "rps", onClick: function () { }, className: "rpsActionButton Up" },
            React.createElement("img", { src: require("../../../img/stone.jpg")["default"], alt: "stone" })),
        React.createElement("div", { id: "rps", onClick: function () { }, className: "rpsActionButton Mid" },
            React.createElement("img", { src: require("../../../img/paper.png")["default"], alt: "paper" })),
        React.createElement("div", { id: "rps", onClick: function () { }, className: "rpsActionButton Down" },
            React.createElement("img", { src: require("../../../img/scissors.jpg")["default"], alt: "scissors" })),
        React.createElement("div", { className: "rpsActionButton Up2" },
            React.createElement("img", { src: require("../../../img/cpu.png")["default"], alt: "scissors" })),
        React.createElement("div", { className: "rpsActionButton Mid2" },
            React.createElement("div", { className: "cpuAction" }, "Akcja")),
        React.createElement("div", { className: "scoreBoard" }, "1:2")));
    var introScreen = (React.createElement("div", { className: "introShape" },
        React.createElement("div", { className: "intro" }, "Witaj w Naszej grze!"),
        React.createElement("button", { onClick: function () {
                setStageState("RPS");
            } }, "Przejd\u017A do rozgrywki")));
    var changeTheStage = function () {
        if (stageState === "Welkomen") {
            return introScreen;
        }
        else if (stageState === "RPS") {
            return game;
        }
    };
    // Po najechaniu kursorem na przycisk - dostaje CZERWONĄ ramkę, a po kliknięciu efekt wciskanego guzika. Jednocześnie zapisuje sie nasz wybór w zmiennej.
    // Po stronie CPU (w opoźnieniu 2 sekund) losuje sie jedna z 3 opcji i zapisuje w zmiennej.
    // Po sekundzie następuje sprawdzenie zmiennych wedle warunków i zaliczenie punktu zwyciezcy rundy.
    // Gra konczy sie po 3 rundach zwycieskich ktoregos z graczy.
    // Po wygranej wyskakuje napis: "Brawo TY".
    return changeTheStage();
};
exports["default"] = RPSgui;
