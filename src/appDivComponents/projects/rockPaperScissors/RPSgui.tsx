import React, { useState, FC } from "react";
import RPScore from "./RPScore";
import "./RPSgui.css";
import RPSscoreScreen from "./RPSscoreScreen";

export const RPSgui: FC = () => {
	const [stageState, setStageState] = useState<string>("Welkomen");
	const [passingScoreState, setPassingScoreState] = useState<string>("");
	const introScreen: JSX.Element = (
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
			return (
				<RPScore
					postScoreInterface={setStageState}
					passingScore={setPassingScoreState}
				/>
			);
		} else if (stageState === "scoreScreen") {
			return <RPSscoreScreen score={passingScoreState} />;
		}
	};
	console.log(passingScoreState);

	return changeTheStage();
};
