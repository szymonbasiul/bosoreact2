"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("react");
var RPSscore_1 = require("./RPSscore");
//import sendScoreToDatabase from "./fetch";
var RPScore = function (props) {
    var _a = react_2.useState(new rpsObject()), rpsCpuChoice = _a[0], setRpsCpuChoice = _a[1];
    var _b = react_2.useState(""), randomComputerChoice = _b[0], setRandomComputerChoice = _b[1];
    var _c = react_2.useState(new rpsObject()), rPS = _c[0], setRPS = _c[1];
    //const [childscore, setChildScore] = useState('')
    function rpsObject() {
        this["rock"] = false;
        this["paper"] = false;
        this["scissors"] = false;
    }
    var createNewRPS = function (clickedElement) {
        var x = new rpsObject();
        x[clickedElement] = true;
        return x;
    };
    var test2 = function (x) { return console.log(x); };
    var createRandomComputerChoice = function () {
        var randomNumber = Math.floor(Math.random() * 3);
        var choosenRPS = Object.keys(new rpsObject())[randomNumber];
        setRandomComputerChoice(choosenRPS);
        setRpsCpuChoice(createNewRPS(choosenRPS));
    };
    var showRandomComputerChoosenImage = function () { return (react_1["default"].createElement("img", { src: require("../../../img/" + randomComputerChoice + ".png")["default"], alt: "" + randomComputerChoice })); };
    var cpuActionImage = randomComputerChoice === "" ? (react_1["default"].createElement("img", { src: require("../../../img/cpu.png")["default"], alt: "randomChoice" })) : (showRandomComputerChoosenImage());
    react_2.useEffect(function () {
        JSON.stringify(new rpsObject()) !== JSON.stringify(rPS) &&
            setTimeout(function () {
                createRandomComputerChoice();
            }, 100);
        console.log(rPS);
    }, [rPS]);
    var addRedFrame = function (mappingElement) {
        console.log(mappingElement, rPS[mappingElement]);
        if (rPS[mappingElement] === true) {
            return "redFrame";
        }
        else {
            return "rpsActionButton";
        }
    };
    var classnameCheckByRPS = function (mappingElement) {
        if (mappingElement === "rock")
            return "Up";
        if (mappingElement === "paper")
            return "Mid";
        if (mappingElement === "scissors")
            return "Down";
    };
    var rpsButtonDisplay = ["rock", "paper", "scissors"].map(function (mappingElement) {
        return (react_1["default"].createElement("button", { key: mappingElement, id: "rps", onClick: function () {
                //sendScoreToDatabase({player:childscore})
                setRPS(createNewRPS(mappingElement));
            }, className: addRedFrame(mappingElement) + " " + classnameCheckByRPS(mappingElement) },
            react_1["default"].createElement("img", { src: require("../../../img/" + mappingElement + ".png")["default"], alt: mappingElement })));
    });
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: "rpsShape" },
            rpsButtonDisplay,
            react_1["default"].createElement("div", { className: "rpsActionButton Up2" },
                react_1["default"].createElement("img", { src: require("../../../img/cpu.png")["default"], alt: "scissors" })),
            react_1["default"].createElement("div", { className: "rpsActionButton Mid2" },
                react_1["default"].createElement("div", { className: "cpuAction" }, cpuActionImage)),
            react_1["default"].createElement("div", { className: "scoreBoard" },
                react_1["default"].createElement(RPSscore_1["default"], { cpuResult: rpsCpuChoice, userResult: rPS, passPostScoreInterface: props.postScoreInterface, displayChildString: props.displayString })))));
};
// Po najechaniu kursorem na przycisk - dostaje CZERWONĄ ramkę.
// Po stronie CPU (w opoźnieniu 2 sekund) losuje sie jedna z 3 opcji i pokazuje sie na ekranie.
// Po sekundzie następuje sprawdzenie zmiennych wedle warunków i zaliczenie punktu zwyciezcy rundy.
// Gra konczy sie po 3 rundach zwycieskich ktoregos z graczy.
// Po wygranej wyskakuje napis: "Brawo TY".
exports["default"] = RPScore;
