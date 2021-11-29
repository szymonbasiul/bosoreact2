import React, { FC } from "react";
import RPSgui from "./RPSgui";
import "./RPS.css";

const RPS: FC = () => {
  return (
    <>
      <div className="rpsContainer">
        <RPSgui />
      </div>
    </>
  );
};

export default RPS;
