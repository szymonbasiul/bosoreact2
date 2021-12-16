import React from "react";
import { FC, useState, useEffect } from "react";

const RPScore: FC = () => {
	let rpsObject: { [key: string]: boolean } = {
		rock: false,
		paper: false,
		scissors: false,
	};

	const [rPS, setRPS] = useState(rpsObject);

	const createNewRPS = (clickedElement: string) => {
		rpsObject[clickedElement] = true;
		return rpsObject;
	};

	const [rpsCpuChoice, setRpsCpuChoice] = useState(rpsObject);

	const [randomComputerChoice, setRandomComputerChoice] = useState("");

	const createRandomComputerChoice = () => {
		const randomNumber = Math.floor(Math.random() * 3);
		const choosenRPS = Object.keys(rpsObject)[randomNumber];
		console.log(choosenRPS);
		setRandomComputerChoice(choosenRPS);
		setRpsCpuChoice(createNewRPS(JSON.stringify(choosenRPS)));
	};

	const showRandomComputerChoosenImage = () => (
		<img
			src={require(`../../../img/${randomComputerChoice}.png`).default}
			// alt="`${randomComputerChoice}`"
		/>
	);

	const cpuActionImage =
		randomComputerChoice === "" ? (
			<img src={require("../../../img/cpu.png").default} alt="randomChoice" />
		) : (
			showRandomComputerChoosenImage()
		);

	useEffect(() => {
		const runChoice = () => {
			setTimeout(() => {
				createRandomComputerChoice();
			}, 500);
		};
		if (rPS.paper) {
			runChoice();
		}
		console.log(rPS);
	}, [rPS]);

	return (
		<div>
			const game = (
			<div className="rpsShape">
				<div
					id="rps"
					onClick={() => {
						setRPS(createNewRPS("rock"));
					}}
					className="rpsActionButton Up"
				>
					<img src={require("../../../img/rock.png").default} alt="rock" />
				</div>
				<div
					id="rps"
					onClick={() => {
						setRPS(createNewRPS("paper"));
					}}
					className="rpsActionButton Mid"
				>
					<img src={require("../../../img/paper.png").default} alt="paper" />
				</div>
				<div
					id="rps"
					onClick={() => {
						setRPS(createNewRPS("scissors"));
					}}
					className="rpsActionButton Down"
				>
					<img
						src={require("../../../img/scissors.png").default}
						alt="scissors"
					/>
				</div>
				<div className="rpsActionButton Up2">
					<img src={require("../../../img/cpu.png").default} alt="scissors" />
				</div>
				<div className="rpsActionButton Mid2">
					<div className="cpuAction">{cpuActionImage}</div>
				</div>
				<div className="scoreBoard">1:2</div>
			</div>
			);
		</div>
	);
};

// Po najechaniu kursorem na przycisk - dostaje CZERWONĄ ramkę.
// Po stronie CPU (w opoźnieniu 2 sekund) losuje sie jedna z 3 opcji i pokazuje sie na ekranie.
// Po sekundzie następuje sprawdzenie zmiennych wedle warunków i zaliczenie punktu zwyciezcy rundy.
// Gra konczy sie po 3 rundach zwycieskich ktoregos z graczy.
// Po wygranej wyskakuje napis: "Brawo TY".

export default RPScore;
