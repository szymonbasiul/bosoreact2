import { useState } from "react";
import "./Stickman_gui.css";

const Stickman_gui = () => {
	const [textThatChanged, setTextThatChanged] = useState("Hello user!");
	const [smileOhStyle, setSmileOhStyle] = useState("smile");
	const animationFrame = (
		<div className="animationContainer">
			<div className="animatedBackground">
				<div className="sky">
					<div className="dayAndNight">
						<div className="sun"></div>
						<div className="moon"></div>
					</div>
				</div>

				<div className="ocean">
					<div className="wave1">
						<div className="wave2">
							<div className="wave3"></div>
						</div>
					</div>

					<div className="beach">
						<div className="sand"></div>
					</div>
				</div>
			</div>
			<div className="stickmanContainer">
				<div className="textCloud">{textThatChanged}</div>
				<div className="stickmanBody">
					{/* HEAD */}
					<div
						className="stickHead"
						onMouseEnter={() => {
							setTextThatChanged("Co jest?!");
							setSmileOhStyle("smileOh");
						}}
						onMouseLeave={() => {
							setTextThatChanged("Hello user!");
							setSmileOhStyle("smile");
						}}
					>
						<div className="eyeAxis">
							<div className="lEye"></div>
							<div className="rEye"></div>
						</div>
						<div className={smileOhStyle}></div>
					</div>
					{/* HEAD */}
					{/* TORSO */}
					<div className="torsoContainer">
						<div className="lArm"></div>
						<div className="torso"></div>
						<div className="rArm"></div>
					</div>
					{/* TORSO */}
					<div className="legContainer">
						<div className="lLeg"></div>
						<div className="rLeg"></div>
					</div>
				</div>
			</div>
		</div>
	);
	return animationFrame;
};

export default Stickman_gui;
