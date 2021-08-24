import { FC } from "react"
import { StarsContainerComponent } from "../score_star/StarsContainerComponent"



const PersonalInfo: FC = () => {
    const skillList = ["scss/css", "css/sass", "react/typescript", "node/express", "mysql"];
    const skillMap = skillList.map(x => {
        return(
    <ol key={x}>
        <StarsContainerComponent skillName={x}
          numberOfStars={5} numberOfFilledStars={2} />
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

