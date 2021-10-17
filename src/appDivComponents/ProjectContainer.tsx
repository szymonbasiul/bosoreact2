import { FC, useState } from "react";
import Calculator from "./projects/calculatorProject/Calculator";
import './ProjectContainer.css';
import Blackscreen from "./projects/default/Blackscreen";
import { BrowserRouter as Router, Redirect, Link, Route, Switch } from "react-router-dom";


const ProjectContainer: FC = () => {
    const [projectDisplay, setProjectDisplay] = useState<string>('black');

    const routeList = [
        {
            pathName: "/calculator",
            componentName: Calculator
        },
        {
            pathName: "/home",
            componentName: Blackscreen,
        }
    ];

    const throwRoutesFromTheList = routeList.map(x => <Route exact path={x.pathName} component={x.componentName}/>)


    return (
        <div className="siteContent">
            <Router>
            <div className="buttonPanel">
            <div onClick={() => { setProjectDisplay('CalculatoR') }} className="projectButton">
                <Link to="/calculator">Calculator</Link>
            </div>
            <div className="projectButton">
                <Link to="/home">Blackscreen</Link>
            </div>
            <div className="projectButton">
            Project3
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
    )

}

export default ProjectContainer;