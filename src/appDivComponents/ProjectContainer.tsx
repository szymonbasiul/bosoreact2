import { FC } from "react";
import Calculator from "./projects/calculatorProject/Calculator";
import Blackscreen from "./projects/default/Blackscreen";
import RPS from "./projects/rockPaperScissors/RPS";
import Stickman from "./projects/stickmanGuy/Stickman";
import "./ProjectContainer.css";
import {
	BrowserRouter as Router,
	Navigate,
	Link,
	Route,
	Routes,
} from "react-router-dom";

const ProjectContainer: FC = () => {
	const routeList = [
		{
			pathName: "/calculator",
			componentName: Calculator,
		},
		{
			pathName: "/home",
			componentName: Blackscreen,
		},
		{
			pathName: "/rps",
			componentName: RPS,
		},
		{
			pathName: "/stickman",
			componentName: Stickman,
		},
	];

	const throwRoutesFromTheList = routeList.map((x) => (
		<Route path={x.pathName} element={<x.componentName />} key={x.pathName} />
	));

	return (
		<div className="siteContent">
			<Router>
				<div className="buttonPanel">
					<div className="projectButton">
						<Link to="/calculator">Calculator</Link>
					</div>
					<div className="projectButton">
						<Link to="/rps">RPS</Link>
					</div>
					<div className="projectButton">
						<Link to="/stickman">Stickman</Link>
					</div>
					<div className="projectButton">
						<Link to="/home">Turn Off</Link>
					</div>
				</div>
				<div className="projectContainer">
					<Routes>
						<Route path="/" element={<Navigate to="/home" />} />
						{throwRoutesFromTheList}
						{/* <Route path="/calculator" element={<Calculator />} /> */}
					</Routes>
				</div>
			</Router>
		</div>
	);
};

export default ProjectContainer;
