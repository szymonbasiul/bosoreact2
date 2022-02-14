import "./Stickman_gui.css";

const Stickman_gui = () => {
	const animationFrame = (
		<div className="animationContainer">
			<div className="stickmanContainer">
				<div className="textCloud">Lorem ipsum dolor sit amet.</div>
				<div className="stickmanBody">
					{/* HEAD */}
					<div className="stickHead">
						<div className="eyeAxis">
							<div className="lEye"></div>
							<div className="rEye"></div>
						</div>
						<div className="smile"></div>
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
