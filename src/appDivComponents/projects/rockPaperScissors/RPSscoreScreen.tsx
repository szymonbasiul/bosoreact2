import { stringify } from "querystring";
import React, { useState } from "react";
import { UseFetch } from "./fetch";
import "./RPSscoreScreen.css";

function RPSscoreScreen(props) {
	const [nickName, setNickName] = useState<string>();
	const userCredits = {
		userName: nickName,
		userScore: props.score,
	};
	console.log(nickName);
	const scoreScreen = (
		<div className="scoreShape">
			<div className="score">
				Players Scoreboard
				<div className="passedScore">{props.score}</div>
				<div className="userScore">
					<label className="lName">Your Nickname</label>
					<input
						type="text"
						className="write"
						id="put-in"
						onChange={(e) => setNickName(e.target.value)}
					/>
				</div>
				<input
					value="Send Score"
					id="send"
					onClick={() => {
						UseFetch(userCredits);
					}}
				/>
			</div>
		</div>
	);

	return <div>{scoreScreen}</div>;
}

export default RPSscoreScreen;
