import { FC, useState } from "react";
import Calculator from "./projects/calculatorProject/Calculator";
import './ProjectContainer.css';
import Blackscreen from "./projects/default/Blackscreen";




const ProjectContainer: FC = () => {
    const [projectDisplay, setProjectDisplay] = useState<string>('black');

    const contentSwitch = () => {
        switch (projectDisplay) {
            case 'CalculatoR':
                return <Calculator />
                break;
            default:
                return <Blackscreen/>;
        }
    }
    
    return (
        <div className="siteContent">
            <div onClick={() => { setProjectDisplay('CalculatoR') }} className="projectButton">
            Calculator
        </div>
            <div className="projectContainer">
                {contentSwitch()}
        </div>
        </div>
    )

}

export default ProjectContainer;