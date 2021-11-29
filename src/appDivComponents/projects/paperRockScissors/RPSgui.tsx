import React, { useState } from "react";
import "./RPS_gui.css";
// import '../Calculator_gui.css'
// interface RPScustomTypes {
//   rpsObject: TypesOfActionDisplayValue;
// }

// interface TypesOfActionDisplayValue {
//   rock: boolean;
//   paper: boolean;
//   scissors: boolean;
// }

export const RPSgui = () => {
  let rpsObject: { [key: string]: boolean } = {
    rock: false,
    paper: false,
    scissors: false,
  };

  // const [rockPaperScissorsState, setRockPaperScissorsState] =
  //   useState(rpsObject);

  const toggleClickedRps = (clickedElement: string) => {
    rpsObject[clickedElement] = true;
  };
  toggleClickedRps("rock");

  const [stageState, setStageState] = useState<String>("Welkomen");

  const game = (
    <div className="rpsShape">
      <div id="rps" onClick={() => {}} className="rpsActionButton Up">
        <img src={require("../../../img/stone.jpg").default} alt="rock" />
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

  // Po najechaniu kursorem na przycisk - dostaje CZERWONĄ ramkę, a po kliknięciu efekt wciskanego guzika. Jednocześnie zapisuje sie nasz wybór w zmiennej.
  // Po stronie CPU (w opoźnieniu 2 sekund) losuje sie jedna z 3 opcji i zapisuje w zmiennej.
  // Po sekundzie następuje sprawdzenie zmiennych wedle warunków i zaliczenie punktu zwyciezcy rundy.
  // Gra konczy sie po 3 rundach zwycieskich ktoregos z graczy.
  // Po wygranej wyskakuje napis: "Brawo TY".

  return changeTheStage();
};
