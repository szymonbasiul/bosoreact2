import { FC } from "react";
import Calculator from "./projects/calculatorProject/Calculator";
import './ProjectContainer.css';


const ProjectContainer: FC = () => {
    return (
        <div className="projectContainer">

            <Calculator/>
        </div>
    )

}

export default ProjectContainer;