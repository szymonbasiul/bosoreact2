import { ButtonsObject } from "./ButtonsObject";
import './Calculator_gui_logic.css'

function Calculator_gui_logic() {


    const commonButtonMaped
        = ButtonsObject.displayString.map(x => {
            return <div className='common-button'>{x}</div>
        })
    return (
        <div className='calculatorShape'>
            <div className='input-field'>pole z wynikiem</div>
            <div className='common-button'>{commonButtonMaped}</div>
            
            <div className='enter-button'>enter button</div>
        </div>
    );
}

export default Calculator_gui_logic;