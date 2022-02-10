import React, { FC } from "react";
import StickmanGui from "./StickmanGui";

const Stickman: FC = () => {
	return (
		<>
			<div className="stickmanContainer">
				<StickmanGui />
			</div>
		</>
	);
};

export default Stickman;
