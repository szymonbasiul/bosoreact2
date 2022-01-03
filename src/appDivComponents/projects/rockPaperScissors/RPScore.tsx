import React from "react";
import { FC, useState, useEffect } from "react";

const RPScore: FC = () => {
	const [rpsCpuChoice, setRpsCpuChoice] = useState(new rpsObject());
	const [randomComputerChoice, setRandomComputerChoice] = useState("");
	const [rPS, setRPS] = useState(new rpsObject());

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

	const createRandomComputerChoice = () => {
		const randomNumber = Math.floor(Math.random() * 3);
		const choosenRPS = Object.keys(new rpsObject())[randomNumber];
		setRandomComputerChoice(choosenRPS);
		setRpsCpuChoice(createNewRPS(JSON.stringify(choosenRPS)));
	};

	const showRandomComputerChoosenImage = () => (
		<img
			src={require(`../../../img/${randomComputerChoice}.png`).default}
			alt="`${randomComputerChoice}`"
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
	const rpsShape = ["rock", "paper", "scissors"].map((x) => x);
	console.log(rpsShape);

	return (
		<div>
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
		</div>
	);
};

// Po najechaniu kursorem na przycisk - dostaje CZERWONĄ ramkę.
// Po stronie CPU (w opoźnieniu 2 sekund) losuje sie jedna z 3 opcji i pokazuje sie na ekranie.
// Po sekundzie następuje sprawdzenie zmiennych wedle warunków i zaliczenie punktu zwyciezcy rundy.
// Gra konczy sie po 3 rundach zwycieskich ktoregos z graczy.
// Po wygranej wyskakuje napis: "Brawo TY".

export default RPScore;
