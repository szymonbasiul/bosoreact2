import PersonalObject from '../appDivComponents/PersonalObject';
import ImgPicker from '../reusable_functions/ImgPicker';
import { FC } from 'react';
import '../styles/Personal.css';



const PersonalContainer: FC = () => {
    return(
<div className="personal-container">
        <PersonalObject personalPhoto={ImgPicker("default_user")} writtenClassNumber={"one"} designer={"Bogdan T."}/>
        <PersonalObject personalPhoto={ImgPicker("default_user")} writtenClassNumber={"two"} designer={"Szymon B."}/>
        </div>)
}

export default PersonalContainer;
