import { FC } from "react"
import { StarsContainerComponent } from "../score_star/StarsContainerComponent"

interface PITypes {
    designer: string
}


const designersSkillLevel = {
    "Szymon B.":
    {"scss/css": 2, "css/sass": 3, "react/typescript": 1, "node/express": 4, "mysql": 5 },
    "Bogdan T.":
    {"scss/css": 1, "css/sass": 1, "react/typescript": 1, "node/express": 2, "mysql": 1 }

}

const PersonalInfo: FC<PITypes> = ({ designer }) => {
    const test = "Szymon B.";
    const skillList = ["scss/css", "css/sass", "react/typescript", "node/express", "mysql"];
    const skillMap = skillList.map(x => {
        return(
    <ol key={x}>
                <StarsContainerComponent skillName={x}
                    numberOfStars={5} numberOfFilledStars={3} />
                
            </ol>
        )
    });
    return (
        <>
    {/* {default_text} */}
            <ul>
                {skillMap}
            </ul>
        </>
    )
}
export default PersonalInfo;

