import React from "react";
import { FC, useState, useEffect } from "react";
import RPSscore from "./RPSscore";
//import sendScoreToDatabase from "./fetch";
const RPScore: FC = (props) => {
	const [rpsCpuChoice, setRpsCpuChoice] = useState(new rpsObject());
	const [randomComputerChoice, setRandomComputerChoice] = useState("");
	const [rPS, setRPS] = useState(new rpsObject());
	//const [childscore, setChildScore] = useState('')

	function rpsObject() {
		this["rock"] = false;
		this["paper"] = false;
		this["scissors"] = false;
	}

	const createNewRPS = (clickedElement: string) => {
		const x = new rpsObject();
		x[clickedElement] = true;
		return x;
	};
	const test2 = (x: string) => console.log(x);
	const createRandomComputerChoice = () => {
		const randomNumber = Math.floor(Math.random() * 3);
		const choosenRPS = Object.keys(new rpsObject())[randomNumber];
		setRandomComputerChoice(choosenRPS);
		setRpsCpuChoice(createNewRPS(choosenRPS));
	};

	const showRandomComputerChoosenImage = () => (
		<img
			src={require(`../../../img/${randomComputerChoice}.png`).default}
			alt={`${randomComputerChoice}`}
		/>
	);

	const cpuActionImage =
		randomComputerChoice === "" ? (
			<img src={require("../../../img/cpu.png").default} alt="randomChoice" />
		) : (
			showRandomComputerChoosenImage()
		);

	useEffect(() => {
		JSON.stringify(new rpsObject()) !== JSON.stringify(rPS) &&
			setTimeout(() => {
				createRandomComputerChoice();
			}, 100);
		console.log(rPS);
	}, [rPS]);

	const addRedFrame = (mappingElement: string) => {
		console.log(mappingElement, rPS[mappingElement]);
		if (rPS[mappingElement] === true) {
			return "redFrame";
		} else {
			return "rpsActionButton";
		}
	};

	const classnameCheckByRPS = (mappingElement: string) => {
		if (mappingElement === "rock") return "Up";
		if (mappingElement === "paper") return "Mid";
		if (mappingElement === "scissors") return "Down";
	};

	const rpsButtonDisplay = ["rock", "paper", "scissors"].map(
		(mappingElement) => {
			return (
				<button
					key={mappingElement}
					id="rps"
					onClick={() => {
						//sendScoreToDatabase({player:childscore})
						setRPS(createNewRPS(mappingElement));
					}}
					className={`${addRedFrame(mappingElement)} ${classnameCheckByRPS(
						mappingElement
					)}`}
				>
					<img
						src={require(`../../../img/${mappingElement}.png`).default}
						alt={mappingElement}
					/>
				</button>
			);
		}
	);

	return (
		<div>
			<div className="rpsShape">
				{rpsButtonDisplay}
				<div className="rpsActionButton Up2">
					<img src={require("../../../img/cpu.png").default} alt="scissors" />
				</div>
				<div className="rpsActionButton Mid2">
					<div className="cpuAction">{cpuActionImage}</div>
				</div>
				<div className="scoreBoard">
					<RPSscore
						cpuResult={rpsCpuChoice}
						userResult={rPS}
						passPostScoreInterface={props.postScoreInterface}
						passingScore={props.passingScore}
						//childState={setChildScore}
					/>
				</div>
			</div>
		</div>
	);
};

// Po najechaniu kursorem na przycisk - dostaje CZERWONĄ ramkę.
// Po stronie CPU (w opoźnieniu 2 sekund) losuje sie jedna z 3 opcji i pokazuje sie na ekranie.
// Po sekundzie następuje sprawdzenie zmiennych wedle warunków i zaliczenie punktu zwyciezcy rundy.
// Gra konczy sie po 3 rundach zwycieskich ktoregos z graczy.
// Po wygranej wyskakuje napis: "Brawo TY".

export default RPScore;
