//import ImgPicker from "../reusable_functions/ImgPicker";
import { FC } from 'react'
import PersonalInfo from './PersonalInfo';



interface PersonDetails {
    personalPhoto: string;
    writtenClassNumber: string;
    designer: string;
}

const PersonalObject: FC<PersonDetails> = ({personalPhoto, writtenClassNumber, designer}) => {
    return (
        <div className={`person-${writtenClassNumber}-container`}>
            <div className={`person-${writtenClassNumber}`}>
                <div className="photo">
                    <img className="person-img" src={personalPhoto} alt="user_face" />
                </div>
                <div className="personal-info">
                    {/* {default_text} */}
                    <PersonalInfo designer={designer}/>

                </div>
            </div>
            <div className={`personal-bar-${writtenClassNumber}`}>
                {designer}
            </div>
        </div>
    )
}
export default PersonalObject;