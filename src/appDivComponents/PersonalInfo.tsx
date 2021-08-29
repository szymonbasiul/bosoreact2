import { FC } from "react"
import { designerSkillObject, skillList } from "../config/DesignerObject";
import { StarsContainerComponent } from "../score_star/StarsContainerComponent"



interface PITypes {
    designer: string
}

const PersonalInfo: FC<PITypes> = ({ designer }) => {
    const skillMap = skillList.map(x => {
        return (
            <ol key={x}>
                <StarsContainerComponent skillName={x}
                    numberOfStars={5} numberOfFilledStars={designerSkillObject[designer][x]} />
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

