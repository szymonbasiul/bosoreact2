import React, { useState } from "react";
import RPScore from "./RPScore";
import "./RPSgui.css";
import sendScoreToDatabase from "./fetch";

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

	const scoreScreen = (
		<div className="scoreShape">
			<div className="score">
				Wyświetl score'a!
				<input type="text" className="write" id="put-in" />
				<input type="text" className="write" id="put-in" />
			</div>
		</div>
	);

	const changeTheStage = () => {
		if (stageState === "Welkomen") {
			return introScreen;
		} else if (stageState === "RPS") {
			return <RPScore postScoreInterface={setStageState} />;
		} else if (stageState === "scoreScreen") {
			return scoreScreen;
		}
	};

	return changeTheStage();
};
