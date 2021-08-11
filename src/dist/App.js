"use strict";
exports.__esModule = true;
var React = require("react");
var react_1 = require("react");
require("./App.css");
var react_2 = require("react");
function App() {
    console.log("Zlo!");
    var _a = react_1.useState("white"), backgroundColorState = _a[0], setBackgroundColorState = _a[1];
    var mainRef = react_2.useRef();
    var test = function () {
        console.log(mainRef.current.style.backgroundColor);
    };
    var colorChanger = function () {
        mainRef.current.style.backgroundColor === "white" ? mainRef.current.style.backgroundColor = "black" : mainRef.current.style.backgroundColor = "white";
    };
    // const intro = "BoSo Company"
    var designer1 = "Bogdan T.";
    var designer2 = "Szymon B.";
    var backgroundColor1 = "black";
    var backgroundColor2 = "white";
    var default_text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, minima ullam? Tempora minima, dolorem eligendi maiores expedita rem quod dignissimos natus! Nisi sed, molestiae voluptatum in minima accusamus autem fugit.";
    var user_face = require("./img/default_user.jpg")["default"];
    var user_face2 = require("./img/default_user.jpg")["default"];
    var logo = require("./img/bosoreactprojectlogo.png")["default"];
    return (React.createElement("main", { ref: mainRef },
        React.createElement("button", { className: "color-mode", onClick: function () { colorChanger(); } }, "Color Mode"),
        React.createElement("img", { className: "logotype", src: logo, alt: "logo" }),
        React.createElement("div", { className: "personal-container" },
            React.createElement("div", { className: "person-one-container" },
                React.createElement("div", { className: "person-one" },
                    React.createElement("div", { className: "photo" },
                        React.createElement("img", { className: "person-img", src: user_face, alt: "user_face" })),
                    React.createElement("div", { className: "personal-info" }, default_text)),
                React.createElement("div", { className: "personal-bar-one" }, designer1)),
            React.createElement("div", { className: "person-two-container" },
                React.createElement("div", { className: "personal-bar-two" }, designer2),
                React.createElement("div", { className: "person-two" },
                    React.createElement("div", { className: "photo" },
                        React.createElement("img", { className: "person-img", src: user_face2, alt: "user_face2" })),
                    React.createElement("div", { className: "personal-info" }, default_text)))),
        React.createElement("div", { className: "footer" }, "logo/contact us/ yt-fb-tweeter")));
}
exports["default"] = App;
