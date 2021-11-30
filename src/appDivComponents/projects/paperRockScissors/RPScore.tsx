import React from 'react';
import { FC, useState } from 'react';

const RPScore: FC = () => {

    let rpsObject: { [key: string]: boolean } = {
        rock: false,
        paper: false,
        scissors: false,
      };

    const [rockPaperScissorsState, setRockPaperScissorsState] =
    useState(rpsObject);

    const toggleClickedRps = (clickedElement: string) => {
        rpsObject[clickedElement] = true;
        setRockPaperScissorsState(rpsObject);
        console.log(rockPaperScissorsState);
    };

    const [rpsCpuState, setRpsCpuState] = useState(rpsObject);

    const randomCpuClickedRps = (randomElement: string) => {
        

    }

    return (
        <div>
            const game = (
    <div className="rpsShape">
      <div id="rps" onClick={() => {toggleClickedRps('rock')}} className="rpsActionButton Up">
        <img src={require("../../../img/stone.jpg").default} alt="rock" />
      </div>
      <div id="rps" onClick={() => {toggleClickedRps('paper')}} className="rpsActionButton Mid">
        <img src={require("../../../img/paper.png").default} alt="paper" />
      </div>
      <div id="rps" onClick={() => {toggleClickedRps("scissors")}} className="rpsActionButton Down">
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
        </div>
    );
}

// Po najechaniu kursorem na przycisk - dostaje CZERWONĄ ramkę, a po kliknięciu efekt wciskanego guzika. Jednocześnie zapisuje sie nasz wybór w zmiennej.
  // Po stronie CPU (w opoźnieniu 2 sekund) losuje sie jedna z 3 opcji i zapisuje w zmiennej.
  // Po sekundzie następuje sprawdzenie zmiennych wedle warunków i zaliczenie punktu zwyciezcy rundy.
  // Gra konczy sie po 3 rundach zwycieskich ktoregos z graczy.
  // Po wygranej wyskakuje napis: "Brawo TY".

export default RPScore;