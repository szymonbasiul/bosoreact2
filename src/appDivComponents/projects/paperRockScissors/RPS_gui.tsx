import { useState } from "react";
import "./RPS_gui.css";
// import '../Calculator_gui.css'

interface TypesOfActionDisplayValue {
	rock: string;
	paper: string;
	scissors: string;
}

const RPS_gui = function () {
	const [rockPaperScissorsState, setRockPaperScissorsState] =
		useState<TypesOfActionDisplayValue>({
			rock: "",
			paper: "",
			scissors: "",
		});

	return (
		<div className="rpsShape">
            <div className="rpsActionButton Up"><img src={require("../../../img/stone.jpg").default} alt="stone" /></div>
            <div className="rpsActionButton Mid"><img src={require("../../../img/paper.png").default} alt="paper" /></div>
            <div className="rpsActionButton Down"><img src={require("../../../img/scissors.jpg").default} alt="scissors" /></div>
            <div className="rpsActionButton Up2"><img src={require("../../../img/cpu.png").default} alt="scissors" /></div>
            <div className="rpsActionButton Mid2"><div className="cpuAction">Akcja</div></div>
            <div className="scoreBoard">1:2</div>
		</div>
	);
};

export default RPS_gui;
