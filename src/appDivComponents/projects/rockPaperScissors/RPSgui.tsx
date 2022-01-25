import React, { useState } from "react";
import RPScore from "./RPScore";
import "./RPSgui.css";
import sendScoreToDatabase from "./fetch";
import RPSscoreScreen from "./RPSscoreScreen";

export const RPSgui = () => {
	const [stageState, setStageState] = useState<String>("Welkomen");
	const introScreen = (
		<div className="introShape">
			<div className="intro">Witaj w Naszej grze!</div>
			<div
				className="gameStarterButton"
				onClick={() => {
					setStageState("RPS");
				}}
			>
				<button id="enter">Przejdź do rozgrywki</button>
			</div>
		</div>
	);

	const changeTheStage = () => {
		if (stageState === "Welkomen") {
			return introScreen;
		} else if (stageState === "RPS") {
			return <RPScore postScoreInterface={setStageState} />;
		} else if (stageState === "scoreScreen") {
			return <RPSscoreScreen />;
		}
	};

	return changeTheStage();
};
