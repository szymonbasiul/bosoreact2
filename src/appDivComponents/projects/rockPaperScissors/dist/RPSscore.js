"use strict";
// w tym komponencie pobieramy dane o dzialaniach w core
// 1. Bierzemy wynik klikniecia buttonow playera i komputera - porównujemy to.
// 2. Po porównaniu przypisujemy wartość +1 do wygranej strony.
// 3. Gra toczy sie do 3 wygranych po ktorejs ze stron i konczy sie.
// 4. Po zakonczeniu pojawia sie opcja dodania usera do tablicy wynikow.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
//import {UseFetch} from "./fetch";
//import sendScoreToDatabase from "./fetch";
function RPSscore(props) {
    var _this = this;
    var _a = react_1.useState(0), userScore = _a[0], setUserScore = _a[1];
    var _b = react_1.useState(0), cpuScore = _b[0], setCpuScore = _b[1];
    props.displayChildString("cokolwiek");
    //props.childState(`${userScore}`)
    var userRPS = props.userResult;
    var cpuRPS = props.cpuResult;
    // 1. Bierzemy wynik klikniecia buttonow playera i komputera - porównujemy to.
    var crossCheckResult = function () {
        if (userRPS.rock === true)
            crossCheckRockResult();
        else if (userRPS.paper === true)
            crossCheckPaperResult();
        else
            crossCheckScissorsResult();
    };
    var crossCheckRockResult = function () {
        if (cpuRPS.rock)
            console.log("draw!");
        else if (cpuRPS.paper)
            setCpuScore(cpuScore + 1);
        else if (cpuRPS.scissors)
            setUserScore(userScore + 1);
    };
    var crossCheckPaperResult = function () {
        if (cpuRPS.paper)
            console.log("draw");
        else if (cpuRPS.rock)
            setUserScore(userScore + 1);
        else if (cpuRPS.scissors)
            setCpuScore(cpuScore + 1);
    };
    var crossCheckScissorsResult = function () {
        if (cpuRPS.scissors)
            console.log("draw");
        else if (cpuRPS.rock)
            setCpuScore(cpuScore + 1);
        else if (cpuRPS.paper)
            setUserScore(userScore + 1);
    };
    //UseFetch({player: `${userScore}`})-*+
    react_1.useEffect(function () {
        crossCheckResult();
    }, [cpuRPS]);
    var test = function (data) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("sending");
                    return [4 /*yield*/, fetch("http://localhost:8000/rpsplayer", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(data)
                        })
                            .then(function (x) { return x.json(); })
                            .then(function (y) {
                            console.log("Success:", y);
                        })["catch"](function (error) {
                            console.error("Error:", error);
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var showGameplayResults = function () {
        if (userScore === 3) {
            setTimeout(function () {
                props.passPostScoreInterface("scoreScreen");
            }, 1500);
            return react_1["default"].createElement("div", null, "Player Won!");
        }
        else if (cpuScore === 3) {
            return react_1["default"].createElement("div", null, "You lost the Game!");
        }
        else {
            return (react_1["default"].createElement("div", null,
                userScore,
                ":",
                cpuScore));
        }
    };
    return react_1["default"].createElement("div", null, showGameplayResults());
}
exports["default"] = RPSscore;
