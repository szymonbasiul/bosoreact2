"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("react");
var RPScore = function () {
    var rpsObject = {
        rock: false,
        paper: false,
        scissors: false
    };
    var _a = react_2.useState(rpsObject), rPS = _a[0], setRPS = _a[1];
    var createNewRPS = function (clickedElement) {
        rpsObject[clickedElement] = true;
        return rpsObject;
    };
    var _b = react_2.useState(rpsObject), rpsCpuChoice = _b[0], setRpsCpuChoice = _b[1];
    var _c = react_2.useState(""), randomComputerChoice = _c[0], setRandomComputerChoice = _c[1];
    var createRandomComputerChoice = function () {
        var randomNumber = Math.floor(Math.random() * 3);
        var choosenRPS = Object.keys(rpsObject)[randomNumber];
        console.log(choosenRPS);
        setRandomComputerChoice(choosenRPS);
        setRpsCpuChoice(createNewRPS(JSON.stringify(choosenRPS)));
    };
    var showRandomComputerChoosenImage = function () { return (react_1["default"].createElement("img", { src: require("../../../img/" + randomComputerChoice + ".png")["default"] })); };
    var cpuActionImage = randomComputerChoice === "" ? (react_1["default"].createElement("img", { src: require("../../../img/cpu.png")["default"], alt: "randomChoice" })) : (showRandomComputerChoosenImage());
    react_2.useEffect(function () {
        setTimeout(function () {
            createRandomComputerChoice();
        }, 500);
        console.log(rPS);
    }, [rPS]);
    return (react_1["default"].createElement("div", null,
        "const game = (",
        react_1["default"].createElement("div", { className: "rpsShape" },
            react_1["default"].createElement("div", { id: "rps", onClick: function () {
                    setRPS(createNewRPS("rock"));
                }, className: "rpsActionButton Up" },
                react_1["default"].createElement("img", { src: require("../../../img/rock.png")["default"], alt: "rock" })),
            react_1["default"].createElement("div", { id: "rps", onClick: function () {
                    setRPS(createNewRPS("paper"));
                }, className: "rpsActionButton Mid" },
                react_1["default"].createElement("img", { src: require("../../../img/paper.png")["default"], alt: "paper" })),
            react_1["default"].createElement("div", { id: "rps", onClick: function () {
                    setRPS(createNewRPS("scissors"));
                }, className: "rpsActionButton Down" },
                react_1["default"].createElement("img", { src: require("../../../img/scissors.png")["default"], alt: "scissors" })),
            react_1["default"].createElement("div", { className: "rpsActionButton Up2" },
                react_1["default"].createElement("img", { src: require("../../../img/cpu.png")["default"], alt: "scissors" })),
            react_1["default"].createElement("div", { className: "rpsActionButton Mid2" },
                react_1["default"].createElement("div", { className: "cpuAction" }, cpuActionImage)),
            react_1["default"].createElement("div", { className: "scoreBoard" }, "1:2")),
        ");"));
};
// Po najechaniu kursorem na przycisk - dostaje CZERWONĄ ramkę.
// Po stronie CPU (w opoźnieniu 2 sekund) losuje sie jedna z 3 opcji i pokazuje sie na ekranie.
// Po sekundzie następuje sprawdzenie zmiennych wedle warunków i zaliczenie punktu zwyciezcy rundy.
// Gra konczy sie po 3 rundach zwycieskich ktoregos z graczy.
// Po wygranej wyskakuje napis: "Brawo TY".
exports["default"] = RPScore;
