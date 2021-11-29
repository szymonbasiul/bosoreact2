import { useState, FC } from "react";
import "./RPS_gui.css";
// import '../Calculator_gui.css'

// interface TypesOfActionDisplayValue {
// 	rock: boolean;
// 	paper: boolean;
// 	scissors: boolean;
// }

const RPSgui = () => {
  let rpsObject: { [key: string]: boolean } = {
    rock: false,
    paper: false,
    scissors: false,
  };
  const [rockPaperScissorsState, setRockPaperScissorsState] =
    useState(rpsObject);

  // const answerTrigger = () => {
  // 	document.getElementById('rps')?.setAttribute("class", "rpsActionButtonClicked")
  // }

  // const saveMyHandToPlayWithCPU = () => {
  // 	rockPaperScissorsState =
  // }
  const getKeyValue =
    <T extends object, U extends keyof T>(obj: T) =>
    (key: U) =>
      obj[key];
  const toggleClickedRps = (clickedElement: string) => {
    return getKeyValue(rpsObject)(clickedElement);
  };
  console.log(toggleClickedRps("rock"));

  const [stageState, setStageState] = useState<String>("Welkomen");

  const game = (
    <div className="rpsShape">
      <div id="rps" onClick={() => {}} className="rpsActionButton Up">
        <img src={require("../../../img/stone.jpg").default} alt="stone" />
      </div>
      <div id="rps" onClick={() => {}} className="rpsActionButton Mid">
        <img src={require("../../../img/paper.png").default} alt="paper" />
      </div>
      <div id="rps" onClick={() => {}} className="rpsActionButton Down">
        <img
          src={require("../../../img/scissors.jpg").default}
          alt="scissors"
        />
      </div>
      <div className="rpsActionButton Up2">
        <img src={require("../../../img/cpu.png").default} alt="scissors" />
      </div>
      <div className="rpsActionButton Mid2">
        <div className="cpuAction">Akcja</div>
      </div>
      <div className="scoreBoard">1:2</div>
    </div>
  );

  const introScreen = (
    <div className="introShape">
      <div className="intro">Witaj w Naszej grze!</div>
      <button
        onClick={() => {
          setStageState("RPS");
        }}
      >
        Przejdź do rozgrywki
      </button>
    </div>
  );

  const changeTheStage = () => {
    if (stageState === "Welkomen") {
      return introScreen;
    } else if (stageState === "RPS") {
      return game;
    }
  };

  // Po kliku przycisk dostaje CZERWONĄ ramkę. Jednocześnie zapisuje sie nasz wybór w zmiennej.
  // Po stronie CPU (w opoźnieniu 2 sekund) losuje sie jedna z 3 opcji i zapisuje w zmiennej.
  // Po sekundzie następuje sprawdzenie zmiennych wedle warunków i zaliczenie punktu zwyciezcy rundy.
  // Gra konczy sie po 3 rundach zwycieskich ktoregos z graczy.
  // Po wygranej wyskakuje napis: "Brawo TY".

  return changeTheStage();
};

export default RPSgui;
