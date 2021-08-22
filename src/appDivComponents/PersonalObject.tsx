//import ImgPicker from "../reusable_functions/ImgPicker";
import { FC } from 'react'

const PersonalObject = (personalPhoto: string
    , writtenClassNumber: string
    , designer: string) => {
    return (
        <div className={`person-${writtenClassNumber}-container`}>
            <div className={`person-${writtenClassNumber}`}>
                <div className="photo">
                    <img className="person-img" src={personalPhoto} alt="user_face" />
                </div>
                <div className="personal-info">
                    {/* {default_text} */}
                </div>
            </div>
            <div className={`personal-bar-${writtenClassNumber}`}>
                {designer}
            </div>
        </div>
    )
}
export default PersonalObject;