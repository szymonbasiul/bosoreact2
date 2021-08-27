import { FC } from "react"
import { StarsContainerComponent } from "../score_star/StarsContainerComponent"

interface DSOitem {
    [name: string]: number
}
interface DSOitems {
    [key: string]: DSOitem
}

interface PITypes {
    designer: string
}

const PersonalInfo: FC<PITypes> = ({ designer }) => {

    const designerSkillObject: DSOitems = {
        "Szymon B.": {
            "css/sass": 2, 'react/typescript': 1, "node/express": 4
        },
        "Bogdan T.": {
            "css/sass": 1, "react/typescript": 1, "node/express": 2
        }
    }

    console.log(designerSkillObject[designer]["css/sass"])
    const skillList = ["css/sass", "react/typescript", "node/express"] as const
    const skillMap = skillList.map(x => {
        return (
            <ol key={x}>
                <StarsContainerComponent skillName={x}
                    numberOfStars={5} numberOfFilledStars={designerSkillObject[designer][x]} />
                {designerSkillObject[designer][x]}

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

