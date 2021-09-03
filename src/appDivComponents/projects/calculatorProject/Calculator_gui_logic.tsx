import { ButtonsObject } from "./ButtonsObject";

function Calculator_gui_logic() {


    const commonButtonMaped
        = ButtonsObject.displayString.map(x => {
            return <div className='common-button'>{x}</div>
        })
    return (
        <div>
            <div className='input-field'>pole z wynikiem</div>
            <div className='common-button'>button</div>
            {commonButtonMaped}
            <div className='enter-button'>enter button</div>
        </div>
    );
}

export default Calculator_gui_logic;