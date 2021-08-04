"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
function App() {
    // const intro = "BoSo Company"
    var designer1 = "Bogdan T.";
    var designer2 = "Szymon B.";
    var default_text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, minima ullam? Tempora minima, dolorem eligendi maiores expedita rem quod dignissimos natus! Nisi sed, molestiae voluptatum in minima accusamus autem fugit.";
    var user_face = require("./img/default_user.jpg")["default"];
    var user_face2 = require("./img/default_user.jpg")["default"];
    var logo = require("./img/bosoreactprojectlogo.png")["default"];
    return (react_1["default"].createElement("main", null,
        react_1["default"].createElement("div", { className: "personal-container" },
            react_1["default"].createElement("div", { className: "people" },
                react_1["default"].createElement("div", { className: "person-one" },
                    react_1["default"].createElement("div", { className: "photo" },
                        react_1["default"].createElement("img", { className: "person-img", src: user_face, alt: "user_face" })),
                    react_1["default"].createElement("div", { className: "personal-info" }, default_text)),
                react_1["default"].createElement("div", { className: "personal-bar" }, designer1)),
            react_1["default"].createElement("img", { className: "logotype", src: logo, alt: "logo" }),
            react_1["default"].createElement("div", { className: "people" },
                react_1["default"].createElement("div", { className: "personal-bar" }, designer2),
                react_1["default"].createElement("div", { className: "person-two" },
                    react_1["default"].createElement("div", { className: "photo" },
                        react_1["default"].createElement("img", { className: "person-img", src: user_face2, alt: "user_face2" })),
                    react_1["default"].createElement("div", { className: "personal-info" }, default_text)))),
        react_1["default"].createElement("div", { className: "footer" }, "logo/contact us/ yt-fb-tweeter")));
}
exports["default"] = App;
