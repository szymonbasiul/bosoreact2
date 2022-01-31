import React from "react";
import "./RPSscoreScreen.css";

function RPSscoreScreen(props) {
	const scoreScreen = (
		<div className="scoreShape">
			<div className="score">
				Players Scoreboard
				<div className="passedScore">{props.score}</div>
				<div className="userScore">
					<label className="lName">Your Nickname</label>
					<input type="text" className="write" id="put-in" />
				</div>
				<input type="submit" value="Send Score" id="send" />
			</div>
		</div>
	);

	return <div>{scoreScreen}</div>;
}

export default RPSscoreScreen;
