// w tym komponencie pobieramy dane o dzialaniach w core
// 1. Bierzemy wynik klikniecia buttonow playera i komputera - porównujemy to.
// 2. Po porównaniu przypisujemy wartość +1 do wygranej strony.
// 3. Gra toczy sie do 3 wygranych po ktorejs ze stron i konczy sie.
// 4. Po zakonczeniu pojawia sie opcja dodania usera do tablicy wynikow.

import React, { useEffect, useState } from "react";
//import {UseFetch} from "./fetch";
//import sendScoreToDatabase from "./fetch";

function RPSscore(props) {
	const [userScore, setUserScore] = useState(0);
	const [cpuScore, setCpuScore] = useState(0);

	//props.childState(`${userScore}`)
	const userRPS = props.userResult;
	const cpuRPS = props.cpuResult;

	// 1. Bierzemy wynik klikniecia buttonow playera i komputera - porównujemy to.
	const crossCheckResult = () => {
		if (userRPS.rock === true) crossCheckRockResult();
		else if (userRPS.paper === true) crossCheckPaperResult();
		else crossCheckScissorsResult();
	};

	const crossCheckRockResult = () => {
		if (cpuRPS.rock) console.log("draw!");
		else if (cpuRPS.paper) setCpuScore(cpuScore + 1);
		else if (cpuRPS.scissors) setUserScore(userScore + 1);
	};

	const crossCheckPaperResult = () => {
		if (cpuRPS.paper) console.log("draw");
		else if (cpuRPS.rock) setUserScore(userScore + 1);
		else if (cpuRPS.scissors) setCpuScore(cpuScore + 1);
	};

	const crossCheckScissorsResult = () => {
		if (cpuRPS.scissors) console.log("draw");
		else if (cpuRPS.rock) setCpuScore(cpuScore + 1);
		else if (cpuRPS.paper) setUserScore(userScore + 1);
	};
	//UseFetch({player: `${userScore}`})-*+

	useEffect(() => {
		crossCheckResult();
	}, [cpuRPS]);
	const test = async (data: object) => {
		console.log("sending");
		await fetch("http://localhost:8000/rpsplayer", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((x) => x.json())
			.then((y) => {
				console.log("Success:", y);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	};
	const showGameplayResults = () => {
		if (userScore === 3) {
			setTimeout(() => {
				props.passPostScoreInterface("scoreScreen");
				props.passingScore(`${userScore}:${cpuScore}`);
			}, 1000);
			return <div>Player Won!</div>;
		} else if (cpuScore === 3) {
			setTimeout(() => {
				props.passPostScoreInterface("scoreScreen");
				props.passingScore(`${userScore}:${cpuScore}`);
			}, 1000);
			return <div>You lost the Game!</div>;
		} else {
			return (
				<div>
					{userScore}:{cpuScore}
				</div>
			);
		}
	};

	return <div>{showGameplayResults()}</div>;
}

export default RPSscore;
