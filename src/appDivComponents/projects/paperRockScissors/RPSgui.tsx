import React, { useState } from "react";
import RPScore from "./RPScore";
import "./RPS_gui.css";

export const RPSgui = () => {

  const [stageState, setStageState] = useState<String>("Welkomen");
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
      return <RPScore/>;
    }
  };

  

  return changeTheStage();
};
