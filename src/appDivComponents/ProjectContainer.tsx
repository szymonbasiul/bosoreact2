import { FC } from "react";
import Calculator from "./projects/calculatorProject/Calculator";
import "./ProjectContainer.css";
import Blackscreen from "./projects/default/Blackscreen";
import RPS from "./projects/paperRockScissors/RPS";
import {
  BrowserRouter as Router,
  Redirect,
  Link,
  Route,
  Switch,
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
  ];

  const throwRoutesFromTheList = routeList.map((x) => (
    <Route
      exact
      path={x.pathName}
      component={x.componentName}
      key={x.pathName}
    />
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
            <Link to="/home">Turn Off</Link>
          </div>
        </div>
        <div className="projectContainer">
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            {throwRoutesFromTheList}
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default ProjectContainer;
