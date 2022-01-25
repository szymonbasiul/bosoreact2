import React from "react";
import "./RPSscoreScreen.css";

function RPSscoreScreen(props) {
	const scoreScreen = (
		<div className="scoreShape">
			<div className="score">
				Dodaj swojego score'a!
				<input type="text" className="write" id="put-in" />
				<input type="text" className="write" id="put-in" />
			</div>
		</div>
	);

	return <div>{scoreScreen}</div>;
}

export default RPSscoreScreen;
